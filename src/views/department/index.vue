<template>
  <div class="app-container">
    <el-form class="topForm" :model="form" :inline="true" size="small">
      <el-form-item label="员工姓名">
        <el-input v-model="form.name" placeholder="请输入员工姓名"></el-input>
      </el-form-item>
      <el-form-item label="员工账号">
        <el-input v-model="form.num" placeholder="请输入员工账号"></el-input>
      </el-form-item>
      <el-form-item label="员工岗位">
        <el-select v-model="form.title" placeholder="请选择岗位">
          <el-option label="前端工程师" value="1"></el-option>
          <el-option label="软件工程师" value="2"></el-option>
          <el-option label="架构师" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属部门">
        <el-select v-model="form.department" placeholder="请选择所属部门 ">
          <el-option label="项目管理部" value="1"></el-option>
          <el-option label="人力资源部" value="2"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-row>
      <el-col :span="4" :md="2">
        <el-button
          type="primary"
          size="small"
          @click="onSubmit"
          icon="el-icon-search"
          >搜索</el-button
        >
      </el-col>
      <el-col :span="4" :md="2">
        <el-button
          type="primary"
          size="small"
          @click="dialogFormVisible = true"
          icon="el-icon-circle-plus"
          >添加</el-button
        >
      </el-col>
      <el-col :span="4" :md="2">
        <el-upload action="D:/" style="display: inline-block">
          <el-button type="primary" size="small" icon="el-icon-upload2"
            >上传文件</el-button
          >
        </el-upload>
      </el-col>
    </el-row>
    <el-dialog
      title="添加新员工"
      :visible.sync="dialogFormVisible"
      center
      width="500px"
    >
      <el-form :model="form" label-width="80px" size="small">
        <el-row>
          <el-col :span="12">
            <el-form-item label="员工姓名">
              <el-input
                v-model="form.name"
                autocomplete="off"
                placeholder="请输入员工姓名"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="员工岗位">
              <el-select v-model="form.title" placeholder="请选择岗位">
                <el-option label="前端工程师" value="1"></el-option>
                <el-option label="软件工程师" value="2"></el-option>
                <el-option label="架构师" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="员工账号">
              <el-input
                v-model="form.num"
                autocomplete="off"
                placeholder="请输入员工账号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="所属部门">
              <el-select
                v-model="form.department"
                placeholder="请选择所属部门 "
              >
                <el-option label="项目管理部" value="1"></el-option>
                <el-option label="人力资源部" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="员工状态">
              <el-select v-model="form.status" placeholder="请选择员工状态 ">
                <el-option label="离职" value="0"></el-option>
                <el-option label="在职" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号码">
              <el-input
                v-model="form.tel"
                autocomplete="off"
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="工作邮箱">
              <el-input
                v-model="form.email"
                autocomplete="off"
                placeholder="请输入工作邮箱"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="家庭住址">
              <el-input
                v-model="form.address"
                autocomplete="off"
                placeholder="请输入家庭住址"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row>
        <el-col :span="2" :offset="16">
          <el-button @click="dialogFormVisible = false" size="small"
            >取 消</el-button
          >
        </el-col>
        <el-col :span="2" :offset="3">
          <el-button
            type="primary"
            size="small"
            @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </el-col>
      </el-row>
    </el-dialog>

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
          prop="num"
          label="账号"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="姓名"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="title"
          label="岗位"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="department"
          label="部门"
        ></el-table-column>
        <el-table-column align="center" prop="status" label="状态">
          <template slot-scope="{ row }">
            <div :class="row.status ? 'statusOn' : 'statusOff'">
              {{ formatStatus(row.status) }}
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="time" label="入职时间">
        </el-table-column>
        <el-table-column align="center" prop="tel" label="电话">
        </el-table-column>
        <el-table-column align="center" prop="email" label="邮箱">
        </el-table-column>
        <el-table-column align="center" prop="address" label="住址">
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
              :visible.sync="informationEditVisible"
              center
              width="500px"
            >
              <el-form :model="editData" label-width="80px">
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="员工姓名">
                      <el-input
                        v-model="editData.name"
                        autocomplete="off"
                        placeholder="请输入员工姓名"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12"
                    ><el-form-item label="员工岗位">
                      <el-select
                        v-model="editData.title"
                        placeholder="请选择岗位"
                      >
                        <el-option label="前端工程师" value="1"></el-option>
                        <el-option label="软件工程师" value="2"></el-option>
                        <el-option label="架构师" value="3"></el-option>
                      </el-select> </el-form-item
                  ></el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="员工账号">
                      <el-input
                        v-model="editData.num"
                        autocomplete="off"
                        placeholder="请输入员工账号"
                      ></el-input> </el-form-item
                  ></el-col>
                  <el-col :span="12">
                    <el-form-item label="所属部门">
                      <el-select
                        v-model="editData.department"
                        placeholder="请选择所属部门 "
                      >
                        <el-option label="项目管理部" value="1"></el-option>
                        <el-option label="人力资源部" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row
                  ><el-col :span="12">
                    <el-form-item label="员工状态">
                      <el-select
                        v-model="editData.status"
                        placeholder=""
                        style="width: 100%"
                      >
                        <el-option
                          :label="statusText[0]"
                          :value="statusList[0]"
                        ></el-option>
                        <el-option
                          :label="statusText[1]"
                          :value="statusList[1]"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="手机号码">
                      <el-input
                        v-model="editData.tel"
                        autocomplete="off"
                        placeholder="请输入手机号"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="工作邮箱">
                      <el-input
                        v-model="editData.email"
                        autocomplete="off"
                        placeholder="请输入工作邮箱"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="16">
                    <el-form-item label="家庭住址">
                      <el-input
                        v-model="editData.address"
                        autocomplete="off"
                        placeholder="请输入家庭住址"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
              <el-row>
                <el-col :span="2" :offset="16">
                  <el-button
                    @click="informationEditVisible = false"
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
        :current-page="currentPage"
        :total="50"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import tableJsonData from "./employee.json";

export default {
  data() {
    return {
      topForm: {},
      formLabelWidth: "70px",
      tableDataAmount: [],
      editData: [],
      statusText: ["离职", "在职"],
      statusList: [0, 1],
      form: {
        name: "",
        num: "",
        title: "",
        department: "",
        tel: "",
        address: "",
        email: "",
        status: null,
      },
      tableData: [],
      dialogFormVisible: false,
      informationEditVisible: false,
      currentPage: 1,
    };
  },
  mounted() {
    this.tableData = tableJsonData.slice(0, 5);
  },
  methods: {
    confirmEdit(){
      if(this.editData.status === this.statusText[0]){
        this.editData.status = this.statusList[0]
      }else if(this.editData.status === this.statusText[1]){
        this.editData.status = this.statusList[1]
      }
      this.tableData[this.editData.index] = this.editData
      this.informationEditVisible = false
    },
    formatStatus(value) {
      return this.statusText[value];
    },
    onSubmit() {
      window.alert("搜索");
    },
    handleEdit(index, row) {
      this.informationEditVisible = true;
      console.log(row);
      this.editData = { ...row };
      // this.editData = row
      console.log(this.editData);
      this.editData["index"] = index;
      this.editData.status ? this.statusText[1] : this.statusText[0];
    },
    removeRow(index, row) {
      this.tableData.splice(index, 1);
    },
    handleSelectionChange(data) {
      this.tableDataAmount = data;
    },
    toggleType(status) {
      if (status === 1) {
        return "primary";
      } else {
        return "info";
      }
    },
    toggleStyle(status) {
      if (status === 1) {
        return "cursor:default";
      } else {
        return true;
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    totalNum() {
      return this.tableData.length;
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
.topForm {
  .el-input {
    width: 180px;
  }
  .el-select {
    width: 180px;
  }
}
.table {
  margin-top: 20px;
  .statusOn {
    width: 4em;
    margin-left: auto;
    margin-right: auto;
    color: #ffffff;
    border-radius: 4px;
    background: #409eff;
  }
  .statusOff {
    width: 4em;
    margin-left: auto;
    margin-right: auto;
    color: #ffffff;
    border-radius: 4px;
    background: #909399;
  }
}
.footer {
  display: flex;
  justify-content: space-between;
}
</style>