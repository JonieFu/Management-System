<template>
  <div class="container">
    <el-row class="header">
      <span>采购单信息</span>
    </el-row>
    <div class="form">
      <el-form :inline="true" size="mini">
        <el-row>
          <el-col :span="7"
            ><el-form-item label="采购单号">
              <el-input></el-input> </el-form-item
          ></el-col>
          <el-col :span="7"
            ><el-form-item label="客户编码"> <el-input></el-input></el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="供货单位">
              <el-input style="width: 800px"></el-input
            ></el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7"
            ><el-form-item label="供货日期">
              <el-input></el-input> </el-form-item
          ></el-col>
          <el-col :span="7"
            ><el-form-item label="交货日期"> <el-input></el-input></el-form-item
          ></el-col>
          <el-col :span="7"
            ><el-form-item label="供货联系人">
              <el-input></el-input></el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="7" :lg="2"
            ><el-form-item label="联系电话">
              <el-input></el-input> </el-form-item
          ></el-col>
          <el-col :span="7" :lg="2"
            ><el-form-item label="运输方式"> <el-input></el-input></el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="收货地点">
              <el-input style="width: 800px"></el-input
            ></el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="备注" label-width="67px"
              ><el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                style="width: 700px"
              ></el-input
            ></el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-row class="mediate">
      <span>原材料详情</span>
    </el-row>
    <div class="table">
      <el-table border>
        <el-table-column
          align="center"
          label="序号"
          type="index"
          width="50px"
        ></el-table-column>
        <el-table-column
          align="center"
          v-for="(item, index) in table_title"
          :label="item"
          :key="index"
        ></el-table-column>
      </el-table>
      <el-row class="bottom" type="flex" justify="center">
        <el-col :span="2"
          ><el-button size="small" style="width: 80px" type="primary"
            >确认</el-button
          ></el-col
        >
        <el-col :span="2"
          ><el-button size="small" style="width: 80px" type="primary"
            >取消</el-button
          ></el-col
        >
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textarea: "",
      table_title: [
        "物料名称",
        "色号",
        "规格",
        "规格单位",
        "采购数量",
        "理论重量",
        "计价单位",
        "采购单价",
        "实收数量",
        "非规格数",
        "原料批号",
        "库位储备",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
  .header {
    padding: 10px;
    background: #f2f2f2;
    margin-bottom: 20px;
  }
  .form {
    margin-bottom: 5px;
    padding-left: 10px;
    .el-row {
      height: 35px;
    }
    .el-form-item {
      margin-bottom: 5px;
    }
  }
  .mediate {
    margin-top: 15px;
    padding: 10px;
    background: #f2f2f2;
  }
  .bottom {
    margin-top: 10px;
  }
}
</style>