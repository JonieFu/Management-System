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
        <el-input v-model="form.title" placeholder="请输入员工职位"></el-input>
      </el-form-item>
      <el-form-item label="所属部门" size="small">
        <el-input
          v-model="form.department"
          placeholder="请输入所属部门"
        ></el-input>
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
    </el-form>
    <el-button
      @click="removeData"
      type="danger"
      style="margin-top: 10px"
      size="mini"
    >
      删除选中
    </el-button>
    <el-table
      :data="tableData"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column align="center" type="selection"></el-table-column>
      <el-table-column
        align="center"
        label="序号"
        type="index"
      ></el-table-column>
      <el-table-column align="center" prop="num" label="账号"></el-table-column>
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
          <el-button
            size="mini"
            :type="toggleType(scope.row.status)"
            :disabled="toggleDisabled(scope.row.status)"
            >{{ scope.row.status }}</el-button
          >
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
            width="800px"
          >
            <el-form
              :model="editData"
              :inline="true"
              style="border: none; box-shadow: none; text-align: center"
            >
              <el-form-item label="员工姓名">
                <el-input
                  v-model="editData.name"
                  autocomplete="off"
                  placeholder="请输入员工姓名"
                ></el-input>
              </el-form-item>
              <el-form-item label="员工职称">
                <el-input
                  v-model="editData.title"
                  autocomplete="off"
                  placeholder="请输入员工职称"
                ></el-input>
              </el-form-item>
              <el-form-item label="员工账号">
                <el-input
                  v-model="editData.num"
                  autocomplete="off"
                  placeholder="请输入员工账号"
                ></el-input>
              </el-form-item>
              <el-form-item label="所在部门">
                <el-input
                  v-model="editData.department"
                  autocomplete="off"
                  placeholder="请输入所在部门"
                ></el-input>
              </el-form-item>
              <el-form-item label="员工状态">
                <el-input
                  v-model="editData.status"
                  autocomplete="off"
                  placeholder="请输入员工状态"
                ></el-input>
              </el-form-item>
              <el-form-item label="手机号码">
                <el-input
                  v-model="editData.tel"
                  autocomplete="off"
                  placeholder="请输入手机号"
                ></el-input>
              </el-form-item>
              <el-form-item label="工作邮箱">
                <el-input
                  v-model="editData.email"
                  autocomplete="off"
                  placeholder="请输入工作邮箱"
                ></el-input>
              </el-form-item>
              <el-form-item label="家庭地址">
                <el-input
                  v-model="editData.address"
                  autocomplete="off"
                  placeholder="请输入家庭住址"
                  width="100px"
                ></el-input>
              </el-form-item>
            </el-form>
            <div class="dialog-footer">
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
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
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
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },

  methods: {
    onSubmit() {
      window.alert("搜索");
    },
    handleEdit(index, row) {
      this.informationEditVisible = true;

      this.editData = row;
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
    toggleDisabled(status) {
      if (status === "在职") {
        return false;
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
    removeData() {
      // let arr = []
      // for (let i = 0; i < this.tableData.length; i++) {
      //   // console.log(this.tableData[i]);
      //   this.tableDataAmount.indexOf(this.tableData[i]) === -1 && arr.push(this.tableData[i])
      // }
      // console.log(arr);
      // this.tableData = arr

      this.tableData = this.tableData.filter((item) => {
        return this.tableDataAmount.indexOf(item) === -1;
      });
    },
    // delet() {
    //   let that = this;
    //   let val = that.tableDataAmount;
    //   val.forEach(function (item, index) {
    //     that.tableData.forEach(function (itemI, indexI) {
    //       if (item.num === itemI.num) {
    //         that.tableData.splice(indexI, 1);
    //       }
    //     });
    //   });
    // },
  },
};
</script>
<style lang="scss" scoped>
.el-form {
  border: 1px solid #d7d7d7;
  box-shadow: 0px 1px 9px 1px rgba(215, 215, 215, 1);
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
.el-table {
  &:last-child {
    .el-dialog {
      text-align: center;
      .el-form-item {
        margin: 0 20px 20px 0;
      }
      .dialog-footer {
        text-align: center;
      }
      .el-button {
        margin: 0 15px 0 15px;
      }
    }
  }
}
.block{
  background: #d7d7d7;
  margin:0 auto;
}
</style>