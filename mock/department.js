const Mock = require('mockjs')
const data = Mock.mock({
  "data":[
      {
        "name": "项目管理部",
        "num": "3",
        "tel": "17866234",
        "time": "2020-10-23",
        "company":"北京京仪研究总院"
      },
      {
        "name": "人力资源部",
        "num": "3",
        "tel": "17866234",
        "time": "2020-10-23",
        "company":"北京京仪研究总院"
      },
      {
        "name": "综合管理部",
        "num": "3",
        "tel": "17866234",
        "time": "2020-10-23",
        "company":"北京京仪研究总院"
      },
      {
        "name": "信息技术部",
        "num": "3",
        "tel": "17866234",
        "time": "2020-10-23",
        "company":"北京京仪研究总院"
      }
    ]
})

module.exports = [
  {
    url: '/vue-admin-template/department/list',
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

