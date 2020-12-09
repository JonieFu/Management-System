import request from '@/utils/request'

export function getCompanyName() {
  return request({
    url: '/vue-admin-template/company/list',
    method: 'get',
  })
}
