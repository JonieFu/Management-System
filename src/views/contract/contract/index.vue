<template>
  <div class="app-container">
    <el-form :inline="true" size="small">
      <el-row>
        <el-col :span="6" v-for="n in 4" :key="n">
          <el-form-item :label="lableList[n - 1]" :key="lableList[n - 1]">
            <el-input :placeholder="'请输入' + lableList[n - 1]"></el-input>
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
        :prop="tableProp[n-1]"
        :label="tableLabelData[n - 1]"
        :key="n - 1"
      ></el-table-column>
    </el-table>
    <div class="footer">
      <el-button @click="removeData" type="danger" size="small"
        >删除选中</el-button
      >
      <Page/>
    </div>
    </div>
  </div>
</template>
<script>
import Page from "@/components/page/index.vue";
import { getContractData } from "@/api/contract/contract";
export default {
  components:{Page},
  data() {
    return {
      lableList: ["商务合同编号", "合同编号", "合同名称", "中标批次"],
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
    };
  },
  mounted() {
    getContractData().then((response) => {
      this.tableData = response.data;
    });
  },
  methods: {
    handleSelectionChange() {
      this.tableData = data;
    },
  },
};
</script>
<style lang="scss" scoped>
.table{
  margin-top: 20px;
}
.footer {
  display: flex;
  justify-content: space-between;
}
</style>