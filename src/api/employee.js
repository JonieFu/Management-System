import request from '@/utils/request'

export function getEmployeeData() {
  return request({
    url: '/vue-admin-template/employee/list',
    method: 'get',
  })
}