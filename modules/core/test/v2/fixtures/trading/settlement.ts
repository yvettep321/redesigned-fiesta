export default {
  listSettlements: {
    settlements: [{
      id: 'fbbb8da8-e7a3-4d9e-82a3-fc396abf9890',
      requesterAccountId: '5cf940969449412d00f53b4c55fc2139',
      status: 'pending',
      type: 'direct',
      affirmations: [{
        id: 'f8259b32-6407-4c42-a48d-7519e7d1905f',
        partyAccountId: '5cf940969449412d00f53b4c55fc2139',
        status: 'affirmed',
        settlement: 'fbbb8da8-e7a3-4d9e-82a3-fc396abf9890',
        lock: {
          id: '82d2c6f7-5e09-4dc6-8847-cf862f519590',
          accountId: '5cf940969449412d00f53b4c55fc2139',
          status: 'active',
          amount: '555',
          currency: 'ofctusd',
          createdAt: '2019-06-06T16:36:21.985Z'
        },
        payload: '{"version":"1.2.0","accountId":"5cf940969449412d00f53b4c55fc2139","amounts":[{"accountId":"5df03e088b4eb3470019a88734b69f7a","sendSubtotal":"500","sendAmount":"500","sendCurrency":"ofctbtc","receiveAmount":"555","receiveCurrency":"ofctusd"},{"accountId":"5cf940969449412d00f53b4c55fc2139","sendSubtotal":"555","sendAmount":"555","sendCurrency":"ofctusd","receiveAmount":"500","receiveCurrency":"ofctbtc"}],"nonceHold":"brJ/Ufv/v4Fg8Emap4vnIA==","nonceSettle":"fMOE8AEEGJVdXZ7143B+qQ=="}',
        signature: '2049b6cd2e2693f26415987cb14a9e14be81ddf1e3e370fe19477e7da5237835f9467e5846a4d12a7fd23e860153083938080fe1d8f78f673851e470a9e45f7e3d',
        createdAt: '2019-06-06T16:36:22.062Z',
        expireAt: '2019-06-07T16:36:22.057Z'
      }, {
        id: 'c412e732-c4ea-4ff2-b157-403893cee47b',
        partyAccountId: '5cf940a49449412d00f53b8f7392f7c0',
        status: 'pending',
        settlement: 'fbbb8da8-e7a3-4d9e-82a3-fc396abf9890',
        lock: {
          id: 'f95c2d97-3841-4aa7-b80c-1d7b31f5503c',
          accountId: '5cf940a49449412d00f53b8f7392f7c0',
          status: 'active',
          amount: '500',
          currency: 'ofctbtc',
          createdAt: '2019-06-06T16:36:21.980Z'
        },
        payload: '{"version":"1.2.0","accountId":"5cf940a49449412d00f53b8f7392f7c0","amounts":[{"accountId":"5df03e088b4eb3470019a88734b69f7a","sendSubtotal":"500","sendAmount":"500","sendCurrency":"ofctbtc","receiveAmount":"555","receiveCurrency":"ofctusd"},{"accountId":"5cf940969449412d00f53b4c55fc2139","sendSubtotal":"555","sendAmount":"555","sendCurrency":"ofctusd","receiveAmount":"500","receiveCurrency":"ofctbtc"}],"nonceHold":"brJ/Ufv/v4Fg8Emap4vnIA==","nonceSettle":"fMOE8AEEGJVdXZ7143B+qQ=="}',
        createdAt: '2019-06-06T16:36:22.066Z',
        expireAt: '2019-06-07T16:36:22.057Z'
      }],
      expireAt: '2019-06-07T16:36:22.057Z',
      createdAt: '2019-06-06T16:36:22.058Z',
      trades: [{
        id: '027f0ff0-4e34-4824-899c-4fd33d46abc4',
        externalId: 'a4o3ah601etw676okvkvsmizciorxc8v',
        baseAccountId: '5cf940a49449412d00f53b8f7392f7c0',
        quoteAccountId: '5cf940969449412d00f53b4c55fc2139',
        timestamp: '2019-06-06T16:36:20.810Z',
        status: 'executed',
        baseAmount: '500',
        quoteAmount: '555',
        baseCurrency: 'ofctbtc',
        quoteCurrency: 'ofctusd',
        costBasis: '12345',
        costBasisCurrency: 'USD'
      }]
    },
      {
        id: 'ff5a8c54-fb0e-481b-900c-abfaa7958a5c',
        requesterAccountId: '5cf940969449412d00f53b4c55fc2139',
        requesterAccountName: 'Test Enterprise',
        status: 'pending',
        type: 'agency',
        affirmations: [
          {
            id: '6f3ff2ed-a40e-4ad7-935b-eea36ec16fce',
            partyAccountId: '5cf940969449412d00f53b4c55fc2139',
            partyAccountName: 'Test Enterprise',
            status: 'affirmed',
            settlement: '',
            lock: null,
            payload: '{"version":"1.2.0","accountId":"5cf940969449412d00f53b4c55fc2139","amounts":[{"accountId":"5df03e088b4eb3470019a89e37864bed","sendSubtotal":"942777","sendFee":"0","sendAmount":"942777","sendCurrency":"ofctusd","receiveAmount":"115087","receiveCurrency":"ofctbtc"},{"accountId":"5df03e088b4eb3470019a88734b69f7a","sendSubtotal":"115087","sendFee":"0","sendAmount":"115087","sendCurrency":"ofctbtc","receiveAmount":"941966","receiveCurrency":"ofctusd"}],"nonceHold":"+8ZMkylYWnLH7P6t7HvjEQ==","nonceSettle":"yZbXXOR7zkbBWSh+gS4ghA=="}',
            signature: '1f2d7c206a7ed7c345f5b2ab1446b11f9fec234ae9e93285abc20e9cdd327479f74e1e93dfdc073f0350c8e79f2e33f62ac3570c1fb423d254bf761cf5c0550271',
            createdAt: '2019-12-11T00:53:52.982Z',
            expireAt: '2019-12-11T02:53:52.978Z'
          },
          {
            id: '489c56f6-3ec2-49fe-87eb-95c8f66a3ad5',
            counterpartyAccountId: '5cf940969449412d00f53b4c55fc2139',
            counterpartyName: 'Test Enterprise',
            partyAccountId: '5df03e088b4eb3470019a88734b69f7a',
            partyAccountName: 'TESTINGE2E 5wbdfxt0a3j1t569baiw3ou2ukby1aug',
            status: 'pending',
            settlement: '',
            lock: null,
            payload: '{"version":"1.2.0","accountId":"5df03e088b4eb3470019a88734b69f7a","amounts":[{"accountId":"5df03e088b4eb3470019a88734b69f7a","sendSubtotal":"115087","sendAmount":"115087","sendCurrency":"ofctbtc","receiveAmount":"941966","receiveCurrency":"ofctusd"},{"accountId":"5cf940969449412d00f53b4c55fc2139","sendSubtotal":"941966","sendAmount":"941966","sendCurrency":"ofctusd","receiveAmount":"115087","receiveCurrency":"ofctbtc"}],"nonceHold":"14qL7T1aLkaRDBSrgMNtbg==","nonceSettle":"RGPKwiin9rO1iISJG8AqvQ=="}',
            signature: '',
            createdAt: '2019-12-11T00:53:52.988Z',
            expireAt: '2019-12-11T02:53:52.978Z'
          },
          {
            id: '7c8c3f11-9b52-4f64-9d55-98c5add9972c',
            counterpartyAccountId: '5cf940969449412d00f53b4c55fc2139',
            counterpartyName: 'Test Enterprise',
            partyAccountId: '5df03e088b4eb3470019a89e37864bed',
            partyAccountName: 'TESTINGE2E qlzyrvn6hjum72ovetm9ahd069gt7wi8',
            status: 'pending',
            settlement: '',
            lock: null,
            payload: '{"version":"1.2.0","accountId":"5df03e088b4eb3470019a89e37864bed","amounts":[{"accountId":"5df03e088b4eb3470019a89e37864bed","sendSubtotal":"942777","sendFee":"0","sendAmount":"942777","sendCurrency":"ofctusd","receiveAmount":"115087","receiveCurrency":"ofctbtc"},{"accountId":"5cf940969449412d00f53b4c55fc2139","sendSubtotal":"115087","sendFee":"0","sendAmount":"115087","sendCurrency":"ofctbtc","receiveAmount":"942777","receiveCurrency":"ofctusd"}],"nonceHold":"Tz4pGR5beaUKI1/qNsEuHw==","nonceSettle":"XFWVbytujspmE6CiEBbnTA=="}',
            signature: '',
            createdAt: '2019-12-11T00:53:52.992Z',
            expireAt: '2019-12-11T02:53:52.978Z'
          }
        ],
        expireAt: '2019-12-11T02:53:52.978Z',
        createdAt: '2019-12-11T00:53:52.979Z',
        trades: [
          {
            id: 'a37c5c9a-efc0-4b2c-89e0-39538de86b29',
            baseAccountId: '5df03e088b4eb3470019a88734b69f7a',
            quoteAccountId: '5df03e088b4eb3470019a89e37864bed',
            status: 'executed',
            timestamp: '2019-12-11T00:53:52.814Z',
            baseAmount: '115087',
            quoteAmount: '942777',
            baseCurrency: 'ofctbtc',
            quoteCurrency: 'ofctusd',
            baseReceiveAmount: '941966',
            quoteReceiveAmount: '115087',
            baseReceiveCurrency: 'ofctusd',
            quoteReceiveCurrency: 'ofctbtc',
            costBasis: '',
            costBasisCurrency: '',
            externalId: 'xff7vln0eh9hh3rp0derlbunlo1sw6k6'
          }
        ]
      }]
  },
  singleSettlementId: 'fbbb8da8-e7a3-4d9e-82a3-fc396abf9890',
  getSingleSettlement: {
    id: 'fbbb8da8-e7a3-4d9e-82a3-fc396abf9890',
    requesterAccountId: '5cf940969449412d00f53b4c55fc2139',
    status: 'pending',
    type: 'direct',
    affirmations: [{
      id: 'f8259b32-6407-4c42-a48d-7519e7d1905f',
      partyAccountId: '5cf940969449412d00f53b4c55fc2139',
      status: 'affirmed',
      settlement: 'fbbb8da8-e7a3-4d9e-82a3-fc396abf9890',
      lock: {
        id: '82d2c6f7-5e09-4dc6-8847-cf862f519590',
        accountId: '5cf940969449412d00f53b4c55fc2139',
        status: 'active',
        amount: '555',
        currency: 'ofctusd',
        createdAt: '2019-06-06T16:36:21.985Z'
      },
      payload: '{"version":"1.2.0","accountId":"5cf940969449412d00f53b4c55fc2139","amounts":[{"accountId":"5df03e088b4eb3470019a88734b69f7a","sendSubtotal":"500","sendAmount":"500","sendCurrency":"ofctbtc","receiveAmount":"555","receiveCurrency":"ofctusd"},{"accountId":"5cf940969449412d00f53b4c55fc2139","sendSubtotal":"555","sendAmount":"555","sendCurrency":"ofctusd","receiveAmount":"500","receiveCurrency":"ofctbtc"}],"nonceHold":"brJ/Ufv/v4Fg8Emap4vnIA==","nonceSettle":"fMOE8AEEGJVdXZ7143B+qQ=="}',
      signature: '2049b6cd2e2693f26415987cb14a9e14be81ddf1e3e370fe19477e7da5237835f9467e5846a4d12a7fd23e860153083938080fe1d8f78f673851e470a9e45f7e3d',
      createdAt: '2019-06-06T16:36:22.062Z',
      expireAt: '2019-06-07T16:36:22.057Z'
    }, {
      id: 'c412e732-c4ea-4ff2-b157-403893cee47b',
      partyAccountId: '5cf940a49449412d00f53b8f7392f7c0',
      status: 'pending',
      settlement: 'fbbb8da8-e7a3-4d9e-82a3-fc396abf9890',
      lock: {
        id: 'f95c2d97-3841-4aa7-b80c-1d7b31f5503c',
        accountId: '5cf940a49449412d00f53b8f7392f7c0',
        status: 'active',
        amount: '500',
        currency: 'ofctbtc',
        createdAt: '2019-06-06T16:36:21.980Z'
      },
      payload: '{"version":"1.2.0","accountId":"5cf940a49449412d00f53b8f7392f7c0","amounts":[{"accountId":"5df03e088b4eb3470019a88734b69f7a","sendSubtotal":"500","sendAmount":"500","sendCurrency":"ofctbtc","receiveAmount":"555","receiveCurrency":"ofctusd"},{"accountId":"5cf940969449412d00f53b4c55fc2139","sendSubtotal":"555","sendAmount":"555","sendCurrency":"ofctusd","receiveAmount":"500","receiveCurrency":"ofctbtc"}],"nonceHold":"brJ/Ufv/v4Fg8Emap4vnIA==","nonceSettle":"fMOE8AEEGJVdXZ7143B+qQ=="}',
      createdAt: '2019-06-06T16:36:22.066Z',
      expireAt: '2019-06-07T16:36:22.057Z'
    }],
    expireAt: '2019-06-07T16:36:22.057Z',
    createdAt: '2019-06-06T16:36:22.058Z',
    trades: [{
      id: '027f0ff0-4e34-4824-899c-4fd33d46abc4',
      externalId: 'a4o3ah601etw676okvkvsmizciorxc8v',
      baseAccountId: '5cf940a49449412d00f53b8f7392f7c0',
      quoteAccountId: '5cf940969449412d00f53b4c55fc2139',
      timestamp: '2019-06-06T16:36:20.810Z',
      status: 'executed',
      baseAmount: '500',
      quoteAmount: '555',
      baseCurrency: 'ofctbtc',
      quoteCurrency: 'ofctusd',
      costBasis: '12345',
      costBasisCurrency: 'USD'
    }]
  },
  createDirectSettlementPayloadRequest: {
    version: '1.2.0',
    amounts: [
      {
        accountId: '5cf940a49449412d00f53b8f7392f7c0',
        sendAmount: '500',
        sendCurrency: 'ofctbtc',
        receiveAmount: '555',
        receiveCurrency: 'ofctusd',
      },
      {
        accountId: '5cf940969449412d00f53b4c55fc2139',
        sendAmount: '555',
        sendCurrency: 'ofctusd',
        receiveAmount: '500',
        receiveCurrency: 'ofctbtc',
      }
    ]
  },
  createDirectSettlementPayloadResponse: {
    payload: '{"version":"1.2.0","accountId":"5cf940969449412d00f53b4c55fc2139","nonceHold":"djTPc0eRtQixTviodw1iJQ==","nonceSettle":"Wemw9X+iFcwsRFV3nJebxA==","amounts":[{"accountId":"5cf940a49449412d00f53b8f7392f7c0","sendCurrency":"ofctbtc","sendSubtotal":"500","sendAmount":"500","receiveCurrency":"ofctusd","receiveAmount":"555"},{"accountId":"5cf940969449412d00f53b4c55fc2139","sendCurrency":"ofctusd","sendSubtotal":"555","sendAmount":"555","receiveCurrency":"ofctbtc","receiveAmount":"500"}]}'
  },
  createDirectSettlementRequest: {
    requesterAccountId: '5cf940969449412d00f53b4c55fc2139',
    payload: /{.*}/,
    signature: /[0-9a-fA-F]*/,
    trades: [{
      baseAccountId: '5cf940a49449412d00f53b8f7392f7c0',
      quoteAccountId: '5cf940969449412d00f53b4c55fc2139',
      status: 'executed',
      timestamp: '2019-06-06T16:36:20.810Z',
      baseAmount: '500',
      baseCurrency: 'ofctbtc',
      quoteAmount: '555',
      quoteCurrency: 'ofctusd',
      costBasis: '12345',
      costBasisCurrency: 'USD',
      externalId: 'a4o3ah601etw676okvkvsmizciorxc8v'
    }]
  },
  createDirectSettlementResponse: {
    id: 'fbbb8da8-e7a3-4d9e-82a3-fc396abf9890',
    requesterAccountId: '5cf940969449412d00f53b4c55fc2139',
    status: 'pending',
    type: 'direct',
    affirmations: [{
      id: 'c412e732-c4ea-4ff2-b157-403893cee47b',
      partyAccountId: '5cf940a49449412d00f53b8f7392f7c0',
      status: 'pending',
      settlement: 'fbbb8da8-e7a3-4d9e-82a3-fc396abf9890',
      lock: {
        id: 'f95c2d97-3841-4aa7-b80c-1d7b31f5503c',
        accountId: '5cf940a49449412d00f53b8f7392f7c0',
        status: 'active',
        amount: '500',
        currency: 'ofctbtc',
        createdAt: '2019-06-06T16:36:21.980Z'
      },
      payload: '{"version":"1.2.0","accountId":"5cf940a49449412d00f53b8f7392f7c0","amounts":[{"accountId":"5df03e088b4eb3470019a88734b69f7a","sendSubtotal":"500","sendAmount":"500","sendCurrency":"ofctbtc","receiveAmount":"555","receiveCurrency":"ofctusd"},{"accountId":"5cf940969449412d00f53b4c55fc2139","sendSubtotal":"555","sendAmount":"555","sendCurrency":"ofctusd","receiveAmount":"500","receiveCurrency":"ofctbtc"}],"nonceHold":"brJ/Ufv/v4Fg8Emap4vnIA==","nonceSettle":"fMOE8AEEGJVdXZ7143B+qQ=="}',
      createdAt: '2019-06-06T16:36:22.066Z',
      expireAt: '2019-06-07T16:36:22.057Z'
    }, {
      id: 'f8259b32-6407-4c42-a48d-7519e7d1905f',
      partyAccountId: '5cf940969449412d00f53b4c55fc2139',
      status: 'affirmed',
      settlement: 'fbbb8da8-e7a3-4d9e-82a3-fc396abf9890',
      lock: {
        id: '82d2c6f7-5e09-4dc6-8847-cf862f519590',
        accountId: '5cf940969449412d00f53b4c55fc2139',
        status: 'active',
        amount: '555',
        currency: 'ofctusd',
        createdAt: '2019-06-06T16:36:21.985Z'
      },
      payload: '{"version":"1.2.0","accountId":"5cf940969449412d00f53b4c55fc2139","amounts":[{"accountId":"5df03e088b4eb3470019a88734b69f7a","sendSubtotal":"500","sendAmount":"500","sendCurrency":"ofctbtc","receiveAmount":"555","receiveCurrency":"ofctusd"},{"accountId":"5cf940969449412d00f53b4c55fc2139","sendSubtotal":"555","sendAmount":"555","sendCurrency":"ofctusd","receiveAmount":"500","receiveCurrency":"ofctbtc"}],"nonceHold":"brJ/Ufv/v4Fg8Emap4vnIA==","nonceSettle":"fMOE8AEEGJVdXZ7143B+qQ=="}',
      signature: '2049b6cd2e2693f26415987cb14a9e14be81ddf1e3e370fe19477e7da5237835f9467e5846a4d12a7fd23e860153083938080fe1d8f78f673851e470a9e45f7e3d',
      createdAt: '2019-06-06T16:36:22.062Z',
      expireAt: '2019-06-07T16:36:22.057Z'
    }],
    expireAt: '2019-06-07T16:36:22.057Z',
    createdAt: '2019-06-06T16:36:22.058Z',
    trades: [{
      id: '027f0ff0-4e34-4824-899c-4fd33d46abc4',
      externalId: 'a4o3ah601etw676okvkvsmizciorxc8v',
      baseAccountId: '5cf940a49449412d00f53b8f7392f7c0',
      quoteAccountId: '5cf940969449412d00f53b4c55fc2139',
      timestamp: '2019-06-06T16:36:20.810Z',
      status: 'executed',
      baseAmount: '500',
      quoteAmount: '555',
      baseCurrency: 'ofctbtc',
      quoteCurrency: 'ofctusd',
      costBasis: '12345',
      costBasisCurrency: 'USD'
    }]
  },

  createAgencySettlementPayloadRequest: {
    version: '1.2.0',
    amounts: [
      {
        accountId: '5df03e088b4eb3470019a89e37864bed',
        sendAmount: '942777',
        sendCurrency: 'ofctusd',
        receiveAmount: '115087',
        receiveCurrency: 'ofctbtc'
      },
      {
        accountId: '5df03e088b4eb3470019a88734b69f7a',
        sendAmount: '115087',
        sendCurrency: 'ofctbtc',
        receiveAmount: '941966',
        receiveCurrency: 'ofctusd'
      }
    ]
  },
  createAgencySettlementPayloadResponse: {
    payload: '{"version":"1.2.0","accountId":"5cf940969449412d00f53b4c55fc2139","amounts":[{"accountId":"5df03e088b4eb3470019a89e37864bed","sendSubtotal":"942777","sendFee":"0","sendAmount":"942777","sendCurrency":"ofctusd","receiveAmount":"115087","receiveCurrency":"ofctbtc"},{"accountId":"5df03e088b4eb3470019a88734b69f7a","sendSubtotal":"115087","sendFee":"0","sendAmount":"115087","sendCurrency":"ofctbtc","receiveAmount":"941966","receiveCurrency":"ofctusd"}],"nonceHold":"+8ZMkylYWnLH7P6t7HvjEQ==","nonceSettle":"yZbXXOR7zkbBWSh+gS4ghA=="}'
  },
  createAgencySettlementRequest: {
    requesterAccountId: '5cf940969449412d00f53b4c55fc2139',
    payload: /{.*}/,
    signature: /[0-9a-fA-F]*/,
    trades: [
      {
        id: 'a37c5c9a-efc0-4b2c-89e0-39538de86b29',
        baseAccountId: '5df03e088b4eb3470019a88734b69f7a',
        quoteAccountId: '5df03e088b4eb3470019a89e37864bed',
        status: 'executed',
        timestamp: '2019-12-11T00:53:52.814Z',
        baseAmount: '115087',
        quoteAmount: '942777',
        baseCurrency: 'ofctbtc',
        quoteCurrency: 'ofctusd',
        baseReceiveAmount: '941966',
        quoteReceiveAmount: '115087',
        baseReceiveCurrency: 'ofctusd',
        quoteReceiveCurrency: 'ofctbtc',
        costBasis: '',
        costBasisCurrency: '',
        externalId: 'xff7vln0eh9hh3rp0derlbunlo1sw6k6'
      }
    ]
  },
  createAgencySettlementResponse: {
    id: 'ff5a8c54-fb0e-481b-900c-abfaa7958a5c',
    requesterAccountId: '5cf940969449412d00f53b4c55fc2139',
    requesterAccountName: 'Test Enterprise',
    status: 'pending',
    type: 'agency',
    affirmations: [
      {
        id: '6f3ff2ed-a40e-4ad7-935b-eea36ec16fce',
        partyAccountId: '5cf940969449412d00f53b4c55fc2139',
        partyAccountName: 'Test Enterprise',
        status: 'affirmed',
        settlement: '',
        lock: null,
        payload: '{"version":"1.2.0","accountId":"5cf940969449412d00f53b4c55fc2139","amounts":[{"accountId":"5df03e088b4eb3470019a89e37864bed","sendSubtotal":"942777","sendFee":"0","sendAmount":"942777","sendCurrency":"ofctusd","receiveAmount":"115087","receiveCurrency":"ofctbtc"},{"accountId":"5df03e088b4eb3470019a88734b69f7a","sendSubtotal":"115087","sendFee":"0","sendAmount":"115087","sendCurrency":"ofctbtc","receiveAmount":"941966","receiveCurrency":"ofctusd"}],"nonceHold":"+8ZMkylYWnLH7P6t7HvjEQ==","nonceSettle":"yZbXXOR7zkbBWSh+gS4ghA=="}',
        signature: '1f2d7c206a7ed7c345f5b2ab1446b11f9fec234ae9e93285abc20e9cdd327479f74e1e93dfdc073f0350c8e79f2e33f62ac3570c1fb423d254bf761cf5c0550271',
        createdAt: '2019-12-11T00:53:52.982Z',
        expireAt: '2019-12-11T02:53:52.978Z'
      },
      {
        id: '489c56f6-3ec2-49fe-87eb-95c8f66a3ad5',
        counterpartyAccountId: '5cf940969449412d00f53b4c55fc2139',
        counterpartyName: 'Test Enterprise',
        partyAccountId: '5df03e088b4eb3470019a88734b69f7a',
        partyAccountName: 'TESTINGE2E 5wbdfxt0a3j1t569baiw3ou2ukby1aug',
        status: 'pending',
        settlement: '',
        lock: null,
        payload: '{"version":"1.2.0","accountId":"5df03e088b4eb3470019a88734b69f7a","amounts":[{"accountId":"5df03e088b4eb3470019a88734b69f7a","sendSubtotal":"115087","sendAmount":"115087","sendCurrency":"ofctbtc","receiveAmount":"941966","receiveCurrency":"ofctusd"},{"accountId":"5cf940969449412d00f53b4c55fc2139","sendSubtotal":"941966","sendAmount":"941966","sendCurrency":"ofctusd","receiveAmount":"115087","receiveCurrency":"ofctbtc"}],"nonceHold":"14qL7T1aLkaRDBSrgMNtbg==","nonceSettle":"RGPKwiin9rO1iISJG8AqvQ=="}',
        signature: '',
        createdAt: '2019-12-11T00:53:52.988Z',
        expireAt: '2019-12-11T02:53:52.978Z'
      },
      {
        id: '7c8c3f11-9b52-4f64-9d55-98c5add9972c',
        counterpartyAccountId: '5cf940969449412d00f53b4c55fc2139',
        counterpartyName: 'Test Enterprise',
        partyAccountId: '5df03e088b4eb3470019a89e37864bed',
        partyAccountName: 'TESTINGE2E qlzyrvn6hjum72ovetm9ahd069gt7wi8',
        status: 'pending',
        settlement: '',
        lock: null,
        payload: '{"version":"1.2.0","accountId":"5df03e088b4eb3470019a89e37864bed","amounts":[{"accountId":"5df03e088b4eb3470019a89e37864bed","sendSubtotal":"942777","sendFee":"0","sendAmount":"942777","sendCurrency":"ofctusd","receiveAmount":"115087","receiveCurrency":"ofctbtc"},{"accountId":"5cf940969449412d00f53b4c55fc2139","sendSubtotal":"115087","sendFee":"0","sendAmount":"115087","sendCurrency":"ofctbtc","receiveAmount":"942777","receiveCurrency":"ofctusd"}],"nonceHold":"Tz4pGR5beaUKI1/qNsEuHw==","nonceSettle":"XFWVbytujspmE6CiEBbnTA=="}',
        signature: '',
        createdAt: '2019-12-11T00:53:52.992Z',
        expireAt: '2019-12-11T02:53:52.978Z'
      }
    ],
    expireAt: '2019-12-11T02:53:52.978Z',
    createdAt: '2019-12-11T00:53:52.979Z',
    trades: [
      {
        id: 'a37c5c9a-efc0-4b2c-89e0-39538de86b29',
        baseAccountId: '5df03e088b4eb3470019a88734b69f7a',
        quoteAccountId: '5df03e088b4eb3470019a89e37864bed',
        status: 'executed',
        timestamp: '2019-12-11T00:53:52.814Z',
        baseAmount: '115087',
        quoteAmount: '942777',
        baseCurrency: 'ofctbtc',
        quoteCurrency: 'ofctusd',
        baseReceiveAmount: '941966',
        quoteReceiveAmount: '115087',
        baseReceiveCurrency: 'ofctusd',
        quoteReceiveCurrency: 'ofctbtc',
        costBasis: '',
        costBasisCurrency: '',
        externalId: 'xff7vln0eh9hh3rp0derlbunlo1sw6k6'
      }
    ]
  }
};
