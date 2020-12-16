const Mock = require('mockjs')
const data = Mock.mock({
  "data":[
    {
      "name": "北京京仪研究总院",
      "num": "4",
      "address": "北京市大兴区兴业街2号",
      "tel":1563565362,
      "time": "2020-10-25"
    },
    {
      "name": "北京京仪研究总院",
      "num": "4",
      "address": "北京市大兴区兴业街2号",
      "tel":1563565362,
      "time": "2020-10-25"
    },
    {
      "name": "北京京仪研究总院",
      "num": "4",
      "address": "北京市大兴区兴业街2号",
      "tel":1563565362,
      "time": "2020-10-25"
    },
    {
      "name": "北京京仪研究总院",
      "num": "4",
      "address": "北京市大兴区兴业街2号",
      "tel":1563565362,
      "time": "2020-10-32"
    }
    ]
})

module.exports = [
  {
    url: '/vue-admin-template/company/list',
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

