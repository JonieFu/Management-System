<template>
  <div class="app-container">
    <el-form class="constant.topForm" :model="form" :inline="true" size="small">
      <el-row>
        <el-col :span="8" :lg="7">
          <el-form-item label="部门名称">
            <el-input v-model="form.name" placeholder="部门名称"></el-input
          ></el-form-item>
        </el-col>
        <el-col :span="8" :lg="7">
          <el-form-item label="部门编号">
            <el-input
              v-model="form.num"
              placeholder="请输入部门编号"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2" :lg="2">
          <el-button
            type="primary"
            size="small"
            @click="onSubmit"
            icon="el-icon-search"
            >搜索</el-button
          >
        </el-col>
        <el-col :span="2" :lg="2">
          <el-button
            type="primary"
            size="small"
            @click="constant.dialogFormVisible = true"
            icon="el-icon-circle-plus"
            >添加</el-button
          >
        </el-col>
      </el-row>
    </el-form>
    <el-dialog
      title="添加部门信息"
      :visible.sync="constant.dialogFormVisible"
      center
      width="500px"
    >
      <el-form :model="form" label-width="80px" size="small">
        <el-row>
          <el-col>
            <el-form-item label="部门名称">
              <el-input
                v-model="form.name"
                autocomplete="off"
                placeholder="请输入部门名称"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="部门编号">
              <el-input
                v-model="form.num"
                autocomplete="off"
                placeholder="请输入部门编号"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="联系电话">
              <el-input
                v-model="form.tel"
                autocomplete="off"
                placeholder="请输入联系电话"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="所属公司">
              <el-input
                v-model="form.company"
                autocomplete="off"
                placeholder="请输入所属公司"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row>
        <el-col :span="2" :offset="16">
          <el-button @click="constant.dialogFormVisible = false" size="small"
            >取 消</el-button
          >
        </el-col>
        <el-col :span="2" :offset="3">
          <el-button
            type="primary"
            size="small"
            @click="messageNotification('添加成功')"
            >确 定</el-button
          >
        </el-col>
      </el-row>
    </el-dialog>

    <div class="table">
      <el-table
        :data="constant.tableData"
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
          prop="name"
          label="部门名称"
        ></el-table-column>
        <el-table-column align="center" prop="company" label="所属公司">
        </el-table-column>
        <el-table-column
          align="center"
          prop="num"
          label="部门编号"
        ></el-table-column>
        <el-table-column align="center" prop="tel" label="联系电话">
        </el-table-column>
        <el-table-column align="center" prop="time" label="录入时间">
        </el-table-column>

        <el-table-column class="operating" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-dialog
              title="编辑员工信息"
              :visible.sync="constant.informationEditVisible"
              center
              width="500px"
            >
              <el-form :model="constant.editData" label-width="80px">
                <el-row>
                  <el-col>
                    <el-form-item label="部门名称">
                      <el-input
                        v-model="constant.editData.name"
                        autocomplete="off"
                        placeholder="请输入部门名称"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col>
                    <el-form-item label="部门编号">
                      <el-input
                        v-model="constant.editData.num"
                        autocomplete="off"
                        placeholder="请输入部门编号"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col>
                    <el-form-item label="联系电话">
                      <el-input
                        v-model="constant.editData.tel"
                        autocomplete="off"
                        placeholder="请输入联系电话"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col>
                    <el-form-item label="所属公司">
                      <el-input
                        v-model="constant.editData.company"
                        autocomplete="off"
                        placeholder="请输入所属公司"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="2" :offset="16">
                    <el-button
                      @click="constant.informationEditVisible = false"
                      size="small"
                      >取消</el-button
                    >
                  </el-col>
                  <el-col :span="2" :offset="3">
                    <el-button type="primary" size="small" @click="confirmEdit"
                      >确定</el-button
                    >
                  </el-col>
                </el-row>
              </el-form>
            </el-dialog>
            <el-button
              type="danger"
              @click="removeRow(scope.$index, scope.row)"
              size="mini"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer">
      <el-button @click="removeData" type="danger" size="small"
        >删除选中</el-button
      >
      <el-pagination
        layout="total, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="5"
        :current-page="constant.currentPage"
        :total="50"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import tableJsonData from "./department.json";
export default {
  data() {
    return {
      constant: {
        topForm: {},
        tableDataAmount: [],
        editData: [],
        tableData: [],
        dialogFormVisible: false,
        informationEditVisible: false,
        currentPage: 1,
      },
      form: {
        name: "",
        num: "",
        company: "",
        tel: "",
      },
    };
  },
  mounted() {
    this.constant.tableData = tableJsonData.slice(0, 5);
  },
  methods: {
    messageNotification(val) {
      this.$message({
        message: val,
        type: "success",
      });
    },
    confirmEdit() {
      this.constant.tableData[
        this.constant.editData.index
      ] = this.constant.editData;
      this.constant.informationEditVisible = false;
      this.messageNotification("编辑成功");
    },
    onSubmit() {
      window.alert("搜索");
    },
    handleEdit(index, row) {
      console.log(row);
      this.constant.informationEditVisible = true;
      this.constant.editData = { ...row };
      this.constant.editData["index"] = index;
    },
    removeRow(index, row) {
      this.constant.tableData.splice(index, 1);
      this.messageNotification("删除成功");
    },
    handleSelectionChange(data) {
      this.constant.tableDataAmount = data;
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    totalNum() {
      return this.constant.tableData.length;
    },
    removeData() {
      this.constant.tableData = this.constant.tableData.filter((item) => {
        return this.constant.tableDataAmount.indexOf(item) === -1;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.table {
  margin-top: 20px;
}
.footer {
  display: flex;
  justify-content: space-between;
}
</style>
