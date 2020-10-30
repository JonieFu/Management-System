<template>
  <div class="app-container">
    <el-form :model="form" :inline="true">
      <el-form-item label="员工姓名" size="small" style="margin-left: 20px">
        <el-input v-model="form.name" placeholder="请输入员工姓名"></el-input>
      </el-form-item>
      <el-form-item label="员工账号" size="small">
        <el-input v-model="form.num" placeholder="请输入员工账号"></el-input>
      </el-form-item>
      <el-form-item label="员工职位" size="small">
        
          <el-select v-model="form.title" placeholder="请选择职位" >
            <el-option label="组长" value="1"></el-option>
            <el-option label="部长" value="2"></el-option>
            <el-option label="总经理" value="3"></el-option>
          </el-select>
        
      </el-form-item>
      <el-form-item label="所属部门" size="small">
       <el-select v-model="form.department" placeholder="请选择所属部门 " >
            <el-option label="采购部" value="1"></el-option>
            <el-option label="技术部" value="2"></el-option>
            <el-option label="财务部" value="3"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item size="small">
        <el-button type="primary" @click="onSubmit" icon="el-icon-search"
          >搜索</el-button
        >
      </el-form-item>
      <el-form-item class="add" size="small">
        <el-button
          type="primary"
          @click="dialogFormVisible = true"
          icon="el-icon-circle-plus"
          >添加</el-button
        >
        <el-dialog
          title="添加新员工"
          :visible.sync="dialogFormVisible"
          center
          width="800px"
        >
          <el-form :model="form" style="text-align: center">
            <el-form-item label="员工姓名">
              <el-input
                v-model="form.name"
                autocomplete="off"
                placeholder="请输入员工姓名"
              ></el-input>
            </el-form-item>
            <el-form-item label="员工职称">
              <el-input
                v-model="form.title"
                autocomplete="off"
                placeholder="请输入员工职称"
              ></el-input>
            </el-form-item>
            <el-form-item label="员工账号">
              <el-input
                v-model="form.num"
                autocomplete="off"
                placeholder="请输入员工账号"
              ></el-input>
            </el-form-item>
            <el-form-item label="所在部门">
              <el-input
                v-model="form.department"
                autocomplete="off"
                placeholder="请输入所在部门"
              ></el-input>
            </el-form-item>
            <el-form-item label="员工状态">
              <el-input
                v-model="form.status"
                autocomplete="off"
                placeholder="请输入员工状态"
              ></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
              <el-input
                v-model="form.tel"
                autocomplete="off"
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
            <el-form-item label="工作邮箱">
              <el-input
                v-model="form.email"
                autocomplete="off"
                placeholder="请输入工作邮箱"
              ></el-input>
            </el-form-item>
            <el-form-item label="家庭地址">
              <el-input
                v-model="form.address"
                autocomplete="off"
                placeholder="请输入家庭住址"
              ></el-input>
            </el-form-item>
          </el-form>
          <div class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </el-form-item>
      <el-form-item size="small">

        <el-upload action="D:/">
          <el-button size="small" type="primary" icon="">上传文件</el-button>
        </el-upload>
      </el-form-item>
    </el-form>

    <div class="table">
      <el-table
        :data="tableData"
        border
        @selection-change="handleSelectionChange"
        :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      >
        <el-table-column align="center" type="selection"></el-table-column>
        <el-table-column
          align="center"
          label="序号"
          width="50px"
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
          label="职称"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="department"
          label="部门"
        ></el-table-column>
        <el-table-column align="center" prop="status" label="员工状态">
          <template slot-scope="scope">
            <el-button size="mini" :type="toggleType(scope.row.status)">{{
              scope.row.status
            }}</el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="time" label="日期">
        </el-table-column>
        <el-table-column align="center" prop="tel" label="电话">
        </el-table-column>
        <el-table-column align="center" prop="email" label="邮箱">
        </el-table-column>
        <el-table-column align="center" prop="address" label="地址">
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
            >
              <el-form
                :model="editData"
                style="border: none; box-shadow: none"
                label-width="80px"
              >
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
                    ><el-form-item label="员工职称">
                      <el-input
                        v-model="editData.title"
                        autocomplete="off"
                        placeholder="请输入员工职称"
                      ></el-input> </el-form-item
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
                    <el-form-item label="所在部门">
                      <el-input
                        v-model="editData.department"
                        autocomplete="off"
                        placeholder="请输入所在部门"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row
                  ><el-col :span="12">
                    <el-form-item label="员工状态">
                      <el-input
                        v-model="editData.status"
                        autocomplete="off"
                        placeholder="请输入员工状态"
                      ></el-input>
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
                  <el-col :span="12"
                    ><el-form-item label="家庭地址">
                      <el-input
                        v-model="editData.address"
                        autocomplete="off"
                        placeholder="请输入家庭住址"
                        width="100px"
                      ></el-input> </el-form-item
                  ></el-col>
                </el-row>
              </el-form>
              <div class="table-dialog-footer">
                <el-button @click="informationEditVisible = false" size="small"
                  >取消</el-button
                >
                <el-button
                  type="primary"
                  @click="informationEditVisible = false"
                  size="small"
                  >保存</el-button
                >
              </div>
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

      <div class="block">
        <el-button
          @click="removeData"
          type="danger"
          style="margin-top: 10px"
          size="mini"
        >
          删除选中
        </el-button>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[1, 2, 3, 4]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNum()"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelWidth: "70px",
      tableDataAmount: [],
      editData: [],
      select:"",
      form: {
        name: "",
        num: "",
        title: "",
        department: "",
        tel: "",
        address: "",
        email: "",
        status: "",
      },
      tableData: [
        {
          name: "王小虎",
          num: "2",
          title: "职工",
          department: "项目管理",
          tel: "17866234",
          email: "wangxiaohu@gmail.com",
          status: "离职",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "2020-10-23",
        },
        {
          name: "王小虎",
          num: "2",
          title: "职工",
          department: "项目管理",
          tel: "17866234",
          email: "wangxiaohu@gmail.com",
          status: "离职",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "2020-10-23",
        },
        {
          name: "王小虎",
          num: "2",
          title: "职工",
          department: "项目管理",
          tel: "17866234",
          email: "wangxiaohu@gmail.com",
          status: "离职",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "2020-10-23",
        },
        {
          name: "王小虎",
          num: "2",
          title: "职工",
          department: "项目管理",
          tel: "17866234",
          email: "wangxiaohu@gmail.com",
          status: "离职",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "2020-10-23",
        },
        {
          name: "王小虎",
          num: "2",
          title: "职工",
          department: "项目管理",
          tel: "17866234",
          email: "wangxiaohu@gmail.com",
          status: "离职",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "2020-10-23",
        },
        {
          name: "王小虎",
          num: "3",
          title: "职工",
          department: "项目管理",
          tel: "17866234",
          email: "wangxiaohu@gmail.com",
          status: "在职",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "2020-10-23",
        },
        {
          name: "王小虎",
          num: "4",
          title: "职工",
          department: "项目管理",
          tel: "17866234",
          email: "wangxiaohu@gmail.com",
          status: "离职",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "2020-10-23",
        },
        {
          name: "王小虎",
          num: "5",
          title: "职工",
          department: "项目管理",
          tel: "17866234",
          email: "wangxiaohu@gmail.com",
          status: "在职",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "2020-10-23",
        },
        {
          name: "王小虎",
          num: "6",
          title: "职工",
          department: "项目管理",
          tel: "17866234",
          email: "wangxiaohu@gmail.com",
          status: "离职",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "2020-10-23",
        },
      ],
      dialogFormVisible: false,
      informationEditVisible: false,
      currentPage: 1,
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      window.alert("搜索");
    },
    handleEdit(index, row) {
      this.informationEditVisible = true;

      this.editData = row;
    },
    removeRow(index, row) {
      this.tableData.splice(index, 1);
    },
    handleSelectionChange(data) {
      this.tableDataAmount = data;
    },
    toggleType(status) {
      if (status === "在职") {
        return "primary";
      } else {
        return "info";
      }
    },
    toggleStyle(status) {
      if (status === "在职") {
        return "cusor:default";
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
.el-form {
  border: 1px solid #d7d7d7;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .el-form-item {
    margin-top: 20px;
    margin-right: 50px;
  }
  .add {
    .el-form {
      border: none;
      box-shadow: none;
      .el-form-item {
        margin: 0 20px 20px 0;
      }
    }
    .dialog-footer {
      text-align: center;
    }
    .el-button {
      margin: 0 15px 0 15px;
    }
  }
}
.table {
  margin-top: 10px;
  border: 1px solid #d7d7d7;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .el-table {
    .el-form-item {
      &:nth-child(n) {
        margin-left: 40px;
      }
    }
    .table-dialog-footer {
      text-align: center;
      .el-button {
        margin: 0 15px 0 15px;
      }
    }
  }
  .block {
    background: #eef1f6;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .el-button {
      margin-bottom: 6px;
      margin-left: 2px;
    }
  }
}
</style>