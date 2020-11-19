import request from '@/utils/request'

export function getContractData() {
  return request({
    url: '/vue-admin-template/contract/contract/list',
    method: 'get',
   })
}