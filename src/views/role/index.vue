<template>
  <div class="app-container">
    <el-form v-model="searchName" :inline="true" size="small">
      <el-form-item>
        <el-input
          placeholder="请输入角色名称"
          v-model="searchName.input"
          clearable
        >
        </el-input>
      </el-form-item>
      <el-button type="primary" icon="el-icon-search" size="small"
        >搜索</el-button
      >
      <el-button type="primary" icon="el-icon-circle-plus" size="small"
        >添加</el-button
      >
    </el-form>
    <el-table
      :data="tableList"
      @selection-change="handleSelectionChange"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
    >
      <el-table-column
        align="center"
        type="selection"
      ></el-table-column>
      <el-table-column
        align="center"
        type="index"
        label="序号"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="num"
        label="权限编号"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="roleName"
        label="角色名称"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="power"
        label="权限"
        min-width="200px"
      ></el-table-column>
      <el-table-column
      align="center"
      label="创建时间"
      >
      </el-table-column>
      <el-table-column
      align="center"
      label="创建人"
      >
      </el-table-column>
      <el-table-column align="center" label="操作">
        <el-button
          type="primary"
          size="small"
          @click="informationEditVisible = 'true'"
          >编辑</el-button
        >
      </el-table-column>
    </el-table>
    <el-dialog title="角色分配" center :visible.sync="informationEditVisible" >
      <el-form v-model="tableList" size="small" label-width="80px">
        <el-row>
          <el-col :span="14">
            <el-form-item label="角色名称">
              <el-input v-model="tableList.roleName" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="分配权限">
            <el-checkbox label="全选"></el-checkbox>
          </el-form-item>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import tableData from "./role.json";
export default {
  data() {
    return {
      informationEditVisible: false,
      searchName: {
        input: "",
      },
      tableList: [],
    };
  },
  mounted() {
    this.tableList = tableData;
    console.log(this.tableList);
  },
  methods: {
    handleSelectionChange(data) {
      this.tableDataAmount = data;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>