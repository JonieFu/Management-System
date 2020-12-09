<template>
  <div class="app-container">
    <el-row>
      <el-form :inline="true" size="small">
        <el-form-item label="表名称"
          ><el-input placeholder="" style="width: 300px"></el-input
        ></el-form-item>
        <el-button
          type="primary"
          icon="el-icon-search"
          style="width: 70px"
          size="small"
        ></el-button>
      </el-form>
    </el-row>
    <el-row class="middle">
      <el-button
        type="danger"
        size="small"
        icon="el-icon-delete"
        @click="removeData"
        >批量删除</el-button
      >
      <el-button
        type="primary"
        size="small"
        icon="el-icon-circle-plus-outline"
        @click="addInformation"
        >添加</el-button
      >
    </el-row>
    <el-table
      @selection-change="handleSelectionChange"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      :data="tableData"
    >
      <el-table-column align="center" type="selection"></el-table-column>
      <el-table-column
        align="center"
        label="序号"
        type="index"
      ></el-table-column>
      <el-table-column
        align="center"
        v-for="(value, key, index) in tableProp"
        :label="tableList[index]"
        :prop="key"
        :key="key"
      >
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="{ $index, row }">
          <el-button size="mini" type="primary" @click="handleEdit($index, row)"
            >编辑</el-button
          >
          <el-button
            style="margin: 0"
            size="mini"
            type="danger"
            @click="removeRow($index, row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      center
      title="编辑"
      :visible.sync="informationEditVisible"
    ></el-dialog>
    <el-dialog
      center
      title="添加"
      :visible.sync="informationEddVisible"
    ></el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableList: [
        "表名称",
        "业务描述",
        "创建用户",
        "创建时间",
        "更改用户",
        "更改时间",
        "状态",
      ],
      tableProp: {
        name: "",
        work: "",
        user: "",
        time: "",
        reuser: "",
        retime: "",
        state: "",
      },

      tableData: [
        {
          name: "sp_factroy",
          work: "工厂主数据",
          user: "admin",
          time: "2020",
          reuser: "admin",
          retime: "20201",
          state: "正常",
        },
      ],
      informationEditVisible: false,
      informationEddVisible: false,
      editData: [],
      tableDataAmount: [],
    };
  },
  methods: {
    messageNotification(val) {
      this.$message({
        message: val,
        type: "success",
      });
    },
    handleSelectionChange(data) {
      this.tableDataAmount = data;
    },
    addInformation() {
      this.informationEddVisible = true;
    },
    handleEdit(index, row) {
      this.informationEditVisible = true;
    },
    removeRow(index, row) {
      this.tableData.splice(index, 1);
      this.messageNotification("删除成功");
    },
    removeData() {
      this.tableData = this.tableData.filter((item) => {
        return this.tableDataAmount.indexOf(item) === -1;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.middle {
  background: #f2f2f2;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
}
</style>