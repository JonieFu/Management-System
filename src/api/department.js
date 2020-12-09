import request from '@/utils/request'

export function getDepartmentData() {

  return request({
    url: '/vue-admin-template/department/list',
    method: 'get',
  })
}