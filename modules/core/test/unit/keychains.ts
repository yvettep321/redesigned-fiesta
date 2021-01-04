//
// Test for Keychains
//

import 'should';
import * as Promise from 'bluebird';
const co = Promise.coroutine;
import * as nock from 'nock';
import * as common from '../../src/common';
import * as _ from 'lodash';

import { TestBitGo } from '../lib/test_bitgo';

describe('Keychains', function v2keychains() {
  describe('Update Password', function updatePassword() {
    let bitgo;
    let keychains;
    let bgUrl;

    before(function beforeDescribe() {
      nock.pendingMocks().should.be.empty();

      bitgo = new TestBitGo({ env: 'mock' });
      bitgo.initializeTestVars();
      bitgo.setValidate(false);
      keychains = bitgo.keychains();

      bgUrl = common.Environments[bitgo.getEnv()].uri;
    });

    it('should fail to update the password', co(function *coItFail() {
      try {
        yield keychains.updatePassword({ newPassword: '5678' });
        throw new Error();
      } catch (e) {
        e.message.should.equal('Missing parameter: oldPassword');
      }

      try {
        yield keychains.updatePassword({ oldPassword: 1234, newPassword: '5678' });
        throw new Error();
      } catch (e) {
        e.message.should.equal('Expecting parameter string: oldPassword but found number');
      }

      try {
        yield keychains.updatePassword({ oldPassword: '1234' });
        throw new Error();
      } catch (e) {
        e.message.should.equal('Missing parameter: newPassword');
      }

      try {
        yield keychains.updatePassword({ oldPassword: '1234', newPassword: 5678 });
        throw new Error();
      } catch (e) {
        e.message.should.equal('Expecting parameter string: newPassword but found number');
      }
    }));

    it('successful password update', co(function *isSuccessfulPasswordUpdate() {
      const oldPassword = 'oldPassword';
      const newPassword = 'newPassword';
      const otherPassword = 'otherPassword';

      nock(bgUrl)
      .post('/api/v1/user/encrypted')
      .reply(200, {
        keychains: {
          xpub1: bitgo.encrypt({ input: 'xprv1', password: oldPassword }),
          xpub2: bitgo.encrypt({ input: 'xprv2', password: otherPassword })
        },
        version: 1
      });

      const result = yield keychains.updatePassword({ oldPassword: oldPassword, newPassword: newPassword });
      _.forOwn(result.keychains, function(encryptedXprv, xpub) {
        xpub.should.startWith('xpub');
        try {
          const decryptedPrv = bitgo.decrypt({ input: encryptedXprv, password: newPassword });
          decryptedPrv.should.startWith('xprv');
        } catch (e) {
          // the decryption didn't work because of the wrong password, this is one of the keychains that didn't match
          // the old password
          e.message.should.startWith('password error');
        }
      });
      result.should.hasOwnProperty('version');
    }));
  });

  after(function afterKeychains() {
    nock.pendingMocks().should.be.empty();
  });
});
