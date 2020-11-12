import Mock from "mockjs"

Mock.mock("/vue-admin-template/company/list","get",function(){
  status:2000;
  message:"获取列表成功";
  data:[1,2,3,4]
})