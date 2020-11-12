import request from '@/utils/request'

export function getCompanyName(params) {
  return request({
    url: '/vue-admin-template/company/list',
    method: 'get',
    params
  })
}
