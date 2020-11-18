import request from '@/utils/request'

export function getRoleName() {
  return request({
    url: '/vue-admin-template/role/list',
    method: 'get',
   })
}
