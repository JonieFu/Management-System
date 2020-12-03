<template>
  <div class="container">
    <div
      claass="header"
      style="
        font-size: 14px;
        border-width: 0 0 1px 0;
        border-style: solid;
        border-color: black;
        padding: 0 0 5px 0;
        margin: 10px;
      "
    >
      编辑合同
    </div>
    <div class="form">
      <el-form :inline="true" :model="reviewMessage" label-width="130px">
        <el-form-item
          v-for="(value, key, index) in reviewMessage"
          :label="contractMessage[key] + ':'"
          :key="index"
        >
          <el-input
            v-model="reviewMessage[key]"
            autocomplete="off"
            :placeholder="'请输入' + contractMessage[key]"
          ></el-input></el-form-item
      ></el-form>
    </div>
    <el-row>
      <el-col :span="2"
        ><router-link
          :to="{
            name: 'Contract',
            params: { data: reviewMessage, num: contractIndex },
          }"
          ><el-button type="primary" size="small">保存</el-button></router-link
        ></el-col
      >
      <el-col :span="2"
        ><router-link :to="{ name: 'Contract' }"
          ><el-button type="primary" size="small">返回</el-button></router-link
        ></el-col
      >
      <el-col :span="2"
        ><el-upload action="D:/" style="display: inline-block">
          <el-button type="primary" size="small">上传附件</el-button>
        </el-upload></el-col
      > </el-row
    >··
  </div>
</template>
<script>
export default {
  data() {
    return {
      contractMessage: {
        CONTRACT_NAME: "合同名称",
        BUSINESS_CONTRACT_CODE: "商务合同编号",
        CONTRACT_CODE: "合同编号",
        BIDDING_POSITION: "招标单位",
        BIDDING_PARTY_A: "合同甲方单位",
        BIDDING_BATCH: "中标批次",
        BIDDING_TIME: "中标时间",
        END_TIME: "合同签订结束日期",
        BIDDING_COUNT: "中标数量",
        SOFTWARE_VERSION: "研究方案软件版本",
        HARDWARE_VERSION: "研究方案硬件版本",
        PRODUCT_DETAIL_CODE: "产品详细信息编号",
        INTERNAL_CONTROL_CODE: "中标内控订单编号",
        STATE: "状态",
      },
      reviewMessage: {},
      contractIndex: NaN,
    };
  },
  mounted() {
    this.contractIndex = this.$route.params.contractIndex;
    this.reviewMessage = this.$route.params.data;
  },
  methods: {
    download() {
      console.log("下载合同");
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  margin: 0 10px 10px 10px;
}

::v-deep .el-input__inner {
  border: none;
}
::v-deep .el-divider {
  width: 90vw;
  margin-top: 10px;
}
.el-row {
  margin-left: 10px;
}
</style>