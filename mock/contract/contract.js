

const Mock = require('mockjs')
const data = Mock.mock({
  "data":[
    {
      CONTRACT_NAME:"MES系统",
      BUSINESS_CONTRACT_CODE:"GSD23124",
      CONTRACT_CODE:"1234567",
      BIDDING_POSITION:"京仪研究总院",
      BIDDING_PARTY_A:"京仪北方",
      BIDDING_BATCH:"34",
      BIDDING_TIME:"2020-1-1",
      END_TIME:"2022-1-1",
      BIDDING_COUNT:"1",
      SOFTWARE_VERSION:"1.0.1",
      HARDWARE_VERSION:"1.2.1",
      PRODUCT_DETAIL_CODE:"567890",
      INTERNAL_CONTROL_CODE:"5463",
      STATE:"待审核"
    },
    {
      CONTRACT_NAME:"MES系统",
      BUSINESS_CONTRACT_CODE:"GSD23124",
      CONTRACT_CODE:"1234567",
      BIDDING_POSITION:"京仪研究总院",
      BIDDING_PARTY_A:"京仪北方",
      BIDDING_BATCH:"34",
      BIDDING_TIME:"2020-1-1",
      END_TIME:"2022-1-1",
      BIDDING_COUNT:"1",
      SOFTWARE_VERSION:"1.0.1",
      HARDWARE_VERSION:"1.2.1",
      PRODUCT_DETAIL_CODE:"567890",
      INTERNAL_CONTROL_CODE:"5463",
      STATE:"待审核"
    },
    {
      CONTRACT_NAME:"MES系统",
      BUSINESS_CONTRACT_CODE:"GSD23124",
      CONTRACT_CODE:"1234567",
      BIDDING_POSITION:"京仪研究总院",
      BIDDING_PARTY_A:"京仪北方",
      BIDDING_BATCH:"34",
      BIDDING_TIME:"2020-1-1",
      END_TIME:"2022-1-1",
      BIDDING_COUNT:"1",
      SOFTWARE_VERSION:"1.0.1",
      HARDWARE_VERSION:"1.2.1",
      PRODUCT_DETAIL_CODE:"567890",
      INTERNAL_CONTROL_CODE:"5463",
      STATE:"待审核"
    },
    {
      CONTRACT_NAME:"MES系统",
      BUSINESS_CONTRACT_CODE:"GSD23124",
      CONTRACT_CODE:"1234567",
      BIDDING_POSITION:"京仪研究总院",
      BIDDING_PARTY_A:"京仪北方",
      BIDDING_BATCH:"34",
      BIDDING_TIME:"2020-1-1",
      END_TIME:"2022-1-1",
      BIDDING_COUNT:"1",
      SOFTWARE_VERSION:"1.0.1",
      HARDWARE_VERSION:"1.2.1",
      PRODUCT_DETAIL_CODE:"567890",
      INTERNAL_CONTROL_CODE:"5463",
      STATE:"待审核"
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