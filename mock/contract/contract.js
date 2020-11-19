

const Mock = require('mockjs')
const data = Mock.mock({
  "data":[
    {
      BUSINESS_CONTRACT_CODE:"23456783456",
      CONTRACT_CODE:"134567",
      BIDDING_BATCH:"2",
      BIDDING_POSITION:"北京京仪研究总院",
      BIDDING_PARTY_A:"京仪北方",
      BIDDING_TIME:"2020-1-1",
      END_TIME:"2022-1-1",
      BIDDING_COUNT:"1"
    },
    {
      BUSINESS_CONTRACT_CODE:"23456783456",
      CONTRACT_CODE:"134567",
      BIDDING_BATCH:"2",
      BIDDING_POSITION:"北京京仪研究总院",
      BIDDING_PARTY_A:"京仪北方",
      BIDDING_TIME:"2020-1-1",
      END_TIME:"2022-1-1",
      BIDDING_COUNT:"1"
    },
    {
      BUSINESS_CONTRACT_CODE:"23456783456",
      CONTRACT_CODE:"134567",
      BIDDING_BATCH:"2",
      BIDDING_POSITION:"北京京仪研究总院",
      BIDDING_PARTY_A:"京仪北方",
      BIDDING_TIME:"2020-1-1",
      END_TIME:"2022-1-1",
      BIDDING_COUNT:"1"
    },
    {
      BUSINESS_CONTRACT_CODE:"23456783456",
      CONTRACT_CODE:"134567",
      BIDDING_BATCH:"2",
      BIDDING_POSITION:"北京京仪研究总院",
      BIDDING_PARTY_A:"京仪北方",
      BIDDING_TIME:"2020-1-1",
      END_TIME:"2022-1-1",
      BIDDING_COUNT:"1"
    }
    ]
})
module.exports = [
  {
    url: '/vue-admin-template/contract/contract/list',
    type: 'get',
    response: config => {
      const items = data.data
      return {
        code: 20000,
        data: items
      }
    }
  }
]