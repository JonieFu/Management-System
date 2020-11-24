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
                >
                <el-button type="priamary">
                  <router-link
                  :to="{path:'/contract-management/review',params:{key:this.title}}"
                  >审核</router-link>
                </el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col
                ><el-button
                  size="mini"
                  type="primary"
                  @click="edit($index, row)"
                  >编辑</el-button
                ></el-col
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
    <Dialog
      :title="'审核合同'"
      :infomationVisible.sync="visible"
      :reviewMessage="reviewMessage"
      :formName="tableLabelData"
      :edit="true"
    >
    <el-row type="flex" justify="center" :gutter="20">
      <el-col :span="4">
        <el-button type="info" size="small">未通过</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" size="small">通过</el-button>
      </el-col>
    </el-row>
    
    </Dialog>
    <Dialog
      :title="'编辑合同'"
      :infomationVisible.sync="editVisible"
      :reviewMessage="reviewMessage"
      :formName="tableLabelData"
    ></Dialog>
  </div>
</template>
<script>
import Page from "@/components/page/index.vue";
import { getContractData } from "@/api/contract/contract";
import Dialog from "@/components/dialog/index.vue";
import {Bus} from "@/assets/Bus.js"

export default {
  components: { Page, Dialog },
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
      visible: false,
      editVisible: false,
      reviewMessage: {},
      title:""
    };
  },
  mounted() {
    getContractData().then((response) => {
      this.tableData = response.data;
    });
  },
  methods: {
    edit(index, row) {
      this.editVisible = true;
      this.tableProp.forEach((item) => {
        this.reviewMessage[item] = row[item];
      });
    },
    review(index, row) {
      this.title = "fuyu"
      // this.visible = true;
      this.tableProp.forEach((item) => {
        this.reviewMessage[item] = row[item];
      });
      console.log(this.reviewMessage)
      Bus.$emit("xx",this.title)
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
::v-deep review-dialog {
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
}

.footer {
  display: flex;
  justify-content: space-between;
}
</style>