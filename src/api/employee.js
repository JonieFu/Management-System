import request from '@/utils/request'

export function getEmployeeData() {
  console.log("打印数据")
  return request({
    url: '/vue-admin-template/employee/list',
    method: 'get',
   })
}