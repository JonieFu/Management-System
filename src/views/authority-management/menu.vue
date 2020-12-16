<template>
  <div class="container">
    <el-form size="small">
      <el-form-item>
        <el-input placeholder="名称" style="width: 250px"></el-input>
        <el-button size="small" type="primary" style="margin-left: 10px"
          >查询</el-button
        >
        <el-button size="small" type="primary">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="id"
      border
      :load="load"
      :tree-props="{ children: 'children' }"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
    >
      <el-table-column align="center" type="selection"></el-table-column>
      <el-table-column align="center" prop="system" label="名称" width="180">
      </el-table-column>
      <el-table-column align="center" prop="type" label="类型" width="180">
      </el-table-column>
      <el-table-column align="center" prop="upper_menu" label="上级菜单">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <el-button type="primary" size="mini">编辑</el-button>
        <el-button type="danger" size="mini">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getEmployeeData } from "@/api/employee";
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          system: "系统管理",
          type: "目录",
          upper_menu: "",
          children: [
            {
              id: 11,
              system: "角色管理",
              type: "菜单",
              upper_menu: "",
              grandchild: [
                {
                  id: 111,
                  name: "王小虎",
                  shangji: "王晓磊",
                },
              ],
            },
          ],
        },
        // { id: 2, system: "serve", type: "目录", upper_menu: "" },
      ],
    };
  },
  methods: {
    handleSelectionChange(data) {
      this.tableDataAmount = data;
    },
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            id: 32,
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
        ]);
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
}
</style>