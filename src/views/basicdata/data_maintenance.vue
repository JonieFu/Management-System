<template>
  <div class="container">
    <el-container>
      <el-aside width="300px" class="aside">
        <div class="table">
          <el-table
            :data="aside_table"
            :header-cell-style="{ background: '#f2f2f2', color: '#606266' }"
            border
          >
            <el-table-column
              align="center"
              label="表名称"
              prop="name"
            ></el-table-column>
            <el-table-column
              align="center"
              label="业务描述"
              prop="business"
            ></el-table-column>
          </el-table>
        </div>

        <div class="bottom">
          <Page />
        </div>
      </el-aside>
      <el-main>
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
              <el-button
                size="mini"
                type="primary"
                @click="handleEdit($index, row)"
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
        <Page />
        <el-dialog
          center
          title="编辑"
          :visible.sync="informationEditVisible"
          
        ></el-dialog>
        <el-dialog center title="添加" :visible.sync="informationEddVisible" width="650px">
          <el-form :inline="true" size="small">
            <el-row>
              <el-col :span="12">
                <el-form-item label="流程编码"
                  ><el-input></el-input
                ></el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="流程描述"
                  ><el-input></el-input
                ></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-form-item label="流程时序">
                  <el-input style="width: 472px"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-divider content-position="left">流程与工序关系</el-divider>
          <el-transfer v-model="value" :data="data"></el-transfer>
        </el-dialog>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Page from "@/components/page/index";
export default {
  components: { Page },
  data() {
    return {
      aside_table: [
        {
          name: "sp_factory",
          business: "工厂主数据",
        },
        {
          name: "sp_factory",
          business: "工厂主数据",
        },
      ],
      tableList: [
        "工序代码",
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
      data: [],
      value: [1, 4],
    };
  },
  created() {
    const data = [];
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `备选项 ${i}`,
        disabled: i % 4 === 0,
      });
    }
    this.data = data;
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
.container {
  .el-aside {
    height: 91vh;
    background: #eeeeee;
    padding: 10px 5px 0px 5px;
    .table {
      height: 91%;
    }
    .bottom {
      margin-bottom: 5px;
    }
  }
  .middle {
    background: #f2f2f2;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
  }
  .el-divider {
    margin-top: 5px;
  }
}
</style>