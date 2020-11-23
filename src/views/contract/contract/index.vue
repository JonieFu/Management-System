<template>
  <div class="app-container">
    <el-form :inline="true" size="small" :model="searchInput">
      <el-row>
        <el-col :span="6" v-for="(value,key,index) in searchInput"  :key="index">
          <el-form-item :label="lableList[index]">
            <el-input :placeholder="'请输入' + lableList[index]" v-model="searchInput[key]"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-button type="primary" size="small">搜索</el-button>
    </el-form>
    <div class="table">
      <el-table
        :data="tableData"
        @selection-change="handleSelectionChange"
        :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      >
        <el-table-column align="center" type="selection"></el-table-column>
        <el-table-column
          align="center"
          label="序号"
          type="index"
        ></el-table-column>
        <el-table-column
          align="center"
          v-for="n in 8"
          :prop="tableProp[n - 1]"
          :label="tableLabelData[n - 1]"
          :key="n - 1"
        ></el-table-column>
        <el-table-column align="center" label="操作" class="handle">
          <template scope="{$index,row}">
            <el-row>
              <el-col
                ><el-button
                  size="mini"
                  type="primary"
                  @click="review($index, row)"
                  >审核</el-button
                ></el-col
              >
            </el-row>
            <el-row>
              <el-col
                ><el-button size="mini" type="primary">编辑</el-button></el-col
              >
            </el-row>
            <el-row>
              <el-col
                ><el-button size="mini" type="danger">删除</el-button></el-col
              >
            </el-row>
          </template>
        </el-table-column>
      </el-table>
      <div class="footer">
        <el-button @click="removeData" type="danger" size="small"
          >删除选中</el-button
        >
        <Page />
      </div>
    </div>
    <Dialog :title="title" :infomationVisible.sync="visible" :reviewMessage="reviewMessage">
    </Dialog>
  </div>
</template>
<script>
import Page from "@/components/page/index.vue";
import { getContractData } from "@/api/contract/contract";
import Dialog from "@/components/dialog/index.vue";

export default {
  components: { Page,Dialog},
  data() {
    return {
      lableList: ["商务合同编号", "合同编号", "合同名称", "中标批次"],
      searchInput:{
        bussiness_contract_code:"",
        contract_code:"",
        contract_name:"",
        bidding_batch:"",
      },
      tableLabelData: [
        "商务合同编号",
        "合同编号",
        "中标批次",
        "招标单位",
        "合同甲方单位",
        "中标时间",
        "合同签订结束日期",
        "中标数量",
      ],
      tableProp: [
        "BUSINESS_CONTRACT_CODE",
        "CONTRACT_CODE",
        "BIDDING_BATCH",
        "BIDDING_POSITION",
        "BIDDING_PARTY_A",
        "BIDDING_TIME",
        "END_TIME",
        "BIDDING_COUNT",
      ],
      tableData: [],
      tableDataAmount: [],
      contractVisible: "false",
      title: "审核合同",
      visible: false,
      reviewMessage:[]
    };
  },
  mounted() {
    getContractData().then((response) => {
      this.tableData = response.data;
    });
  },
  methods: {
    toggle() {
      // todo
      this.contractVisible ? "flase" : "ture";
    },
    review(data, row) {
      console.log(row)     

      this.visible = true;
     
    },
    removeData() {
      this.tableData = this.tableData.filter((item) => {
        return this.tableDataAmount.indexOf(item) === -1;
      });
    },
    handleSelectionChange(data) {
      this.tableDataAmount = data;
    },
  },
};
</script>
<style lang="scss" scoped>
.table {
  margin-top: 20px;
}
.handle {
  .el-button {
    margin-bottom: 20px;
  }
}
.footer {
  display: flex;
  justify-content: space-between;
}
</style>