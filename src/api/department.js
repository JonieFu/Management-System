import request from '@/utils/request'

export function getDepartmentData() {
  console.log("打印数据")
  return request({
    url: '/vue-admin-template/department/list',
    method: 'get',
   })
}