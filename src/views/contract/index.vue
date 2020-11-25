<template>
  <div class="app-container">
    <el-form :inline="true" size="small" :model="searchInput">
      <el-row>
        <el-col
          :span="6"
          v-for="(value, key, index) in searchInput"
          :key="index"
        >
          <el-form-item :label="lableList[index]">
            <el-input
              :placeholder="'请输入' + lableList[index]"
              v-model="searchInput[key]"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-button type="primary" size="small">搜索</el-button>
      <el-button type="primary" size="small"><router-link :to="{name:'Add'}">新增</router-link></el-button>
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
          v-for="n in 9"
          :prop="tableProp[n - 1]"
          :label="tableLabelData[n - 1]"
          :key="n - 1"
        ></el-table-column>
        <el-table-column align="center" label="操作" class="handle">
          <template scope="{$index,row}">
            <el-row>
              <el-col>
                <router-link
                  :to="{
                    name: 'Review',
                    params: { data: reviewMessage, contractIndex: $index },
                  }"
                >
                  <el-button
                    type="priamary"
                    size="mini"
                    @click="review($index, row)"
                  >
                    审核</el-button
                  >
                </router-link>
              </el-col>
            </el-row>
            <el-row>
              <el-col
                >
                <router-link 
                :to="{
                  name: 'Edit',
                  params: { data: reviewMessage, contractIndex: $index },
                }">
                <el-button
                  size="mini"
                  type="primary"
                  @click="edit($index, row)"
                  >编辑</el-button
                >
                </router-link>
                </el-col
              >
            </el-row>
            <el-row>
              <el-col
                ><el-button size="mini" type="danger" @click="removeRow($index,row)">删除</el-button></el-col
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
  </div>
</template>
<script>
import Page from "@/components/page/index.vue";
import { getContractData } from "@/api/contract/contract";

export default {
  components: { Page },
  data() {
    return {
      lableList: ["商务合同编号", "合同编号", "合同名称", "中标批次"],
      searchInput: {
        bussiness_contract_code: "",
        contract_code: "",
        contract_name: "",
        bidding_batch: "",
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
        "状态",
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
        "STATE",
      ],
      tableData: [],
      tableDataAmount: [],
      visible: false,
      editVisible: false,
      reviewMessage: {},
    };
  },
  mounted() {
    getContractData().then((response) => {
      this.tableData = response.data;
      if (this.$route.params.num >= 0) {
        this.tableData[this.$route.params.num] = this.$route.params.data;
      }
      else if(this.$route.params.addData){
        console.log(this.$route.params.addData.END_TIME)
        this.tableData.push(this.$route.params.addData)
      }
    });
  },
  methods: {
    messageNotification(val){
      this.$message({
        message:val,
        type:"success"
      })
    },
    removeRow(index, row) {
      this.tableData.splice(index, 1);
      this.messageNotification("删除成功")
    },
    edit(index, row) {
     this.reviewMessage = this.tableData[index];
    },
    review(index, row) {
      this.reviewMessage = this.tableData[index];
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