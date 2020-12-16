const Mock = require('mockjs')
const data = Mock.mock({
  "data":[
    {"num":"NO 7528",
      "roleName":"销售组",
      "power":["系统首页","个人信息","商品列表","销售报表","出库管理"]
    },
    {"num":"NO 7528",
      "roleName":"销售组",
      "power":["系统首页","个人信息","商品列表","销售报表","出库管理"]
    },
    {"num":"NO 7528",
      "roleName":"销售组",
      "power":["系统首页","个人信息","商品列表","销售报表","出库管理"]
    },
    {"num":"NO 7528",
      "roleName":"销售组",
      "power":["系统首页","个人信息","商品列表","销售报表","出库管理"]
    },
    {"num":"NO 7528",
      "roleName":"销售组",
      "power":["系统首页","个人信息","商品列表","销售报表","出库管理"]
    }
  ]
})

module.exports = [
  {
    url: '/vue-admin-template/role/list',
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
