<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :inline="true">
      <el-form-item label="员工姓名" size="mini">
        <el-input v-model="form.name" placeholder="请输入员工姓名"></el-input>
      </el-form-item>
      <el-form-item label="员工账号" size="mini">
        <el-input v-model="form.num" placeholder="请输入员工账号"></el-input>
      </el-form-item>
      <el-form-item label="员工职位" size="mini">
        <el-input v-model="form.title" placeholder="请输入员工职位"></el-input>
      </el-form-item>
      <el-form-item label="所属部门" size="mini">
        <el-input
          v-model="form.department"
          placeholder="请输入所属部门"
        ></el-input>
      </el-form-item>
      <el-form-item size="mini">
        <el-button type="primary" @click="onSubmit" icon="el-icon-search"
          >搜索</el-button
        >
      </el-form-item>
      <el-form-item class="add" label="" size="mini">
        <el-button
          type="primary"
          @click="dialogFormVisible = true"
          icon="el-icon-circle-plus"
          >添加</el-button
        >
        <el-dialog title="添加新员工" :visible.sync="dialogFormVisible" center>
          <el-form :model="form">
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
            <el-form-item label="直属上级">
              <el-input
                v-model="form.superior"
                autocomplete="off"
                placeholder="请输入其直属上级"
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
    <el-table :data="tableData" height="250" border>
      <el-table-column
        label="序号"
        align="center"
        type="index"
      ></el-table-column>
      <el-table-column align="center" prop="num" label="账号">
      </el-table-column>
      <el-table-column align="center" prop="name" label="姓名">
      </el-table-column>
      <el-table-column align="center" prop="title" label="职称">
      </el-table-column>
      <el-table-column align="center" prop="department" label="部门">
      </el-table-column>
      <el-table-column align="center" prop="superior" label="直属领导">
      </el-table-column>
      <el-table-column align="center" prop="time" label="日期">
      </el-table-column>
      <el-table-column align="center" prop="tel" label="电话">
      </el-table-column>
      <el-table-column align="center" prop="email" label="邮箱">
      </el-table-column>
      <el-table-column align="center" prop="address" label="地址">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-dialog
            title="编辑员工信息"
            :visible.sync="informationEditVisible"
            center
            ><el-form :model="form">
              <el-form-item label="员工姓名">
                <el-input
                  v-model="scope.row.name"
                  autocomplete="off"
                  placeholder="请输入员工姓名"
                ></el-input>
              </el-form-item>
              <el-form-item label="员工职称">
                <el-input
                  v-model="scope.row.title"
                  autocomplete="off"
                  placeholder="请输入员工职称"
                ></el-input>
              </el-form-item>
              <el-form-item label="员工账号">
                <el-input
                  v-model="scope.row.num"
                  autocomplete="off"
                  placeholder="请输入员工账号"
                ></el-input>
              </el-form-item>
              <el-form-item label="所在部门">
                <el-input
                  v-model="scope.row.department"
                  autocomplete="off"
                  placeholder="请输入所在部门"
                ></el-input>
              </el-form-item>
              <el-form-item label="直属上级">
                <el-input
                  v-model="scope.row.superior"
                  autocomplete="off"
                  placeholder="请输入其直属上级"
                ></el-input>
              </el-form-item>
              <el-form-item label="手机号码">
                <el-input
                  v-model="scope.row.tel"
                  autocomplete="off"
                  placeholder="请输入手机号"
                ></el-input>
              </el-form-item>
              <el-form-item label="工作邮箱">
                <el-input
                  v-model="scope.row.email"
                  autocomplete="off"
                  placeholder="请输入工作邮箱"
                ></el-input>
              </el-form-item>
              <el-form-item label="家庭地址">
                <el-input
                  v-model="scope.row.address"
                  autocomplete="off"
                  placeholder="请输入家庭住址"
                  width="100px"
                ></el-input>
              </el-form-item>
            </el-form>
            <div class="dialog-footer">
              <el-button @click="informationEditVisible = false"
                >取消</el-button
              >
              <el-button type="primary" @click="informationEditVisible = false"
                >保存</el-button
              >
            </div>
          </el-dialog>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelWidth: "70px",
      form: {
        name: "",
        num: "",
        title: "",
        department: "",
        tel: "",
        address: "",
        email: "",
        superior: "",
      },
      tableData: [
        {
          name: "王小虎",
          num: "12",
          title: "职工",
          department: "项目管理",
          tel: "17866234",
          email: "wangxiaohu@gmail.com",
          superior: "王大虎",
          address: "上海市普陀区金沙江路 1518 弄",
          time: "2020-10-23",
        },
      ],
      dialogFormVisible: false,
      informationEditVisible: false,
    };
  },
  mounted() {
    console.log(window.innerWidth);
  },
  methods: {
    onSubmit() {
      window.alert("搜索");
    },
    handleEdit(index, row) {
      this.informationEditVisible = true;
      console.log(row.name);
      console.log(this.informationEditVisible);
    },
    handleDelete(index, row) {
      console.log(this.informationEditVisible);
      console.log(index, row);
    },
  },
};
</script>
<style lang="scss" scoped>
/* .app-container {
  border: 1px solid red;
  width: 95%;
  margin: auto;
  .el-form-item {
    margin: 0 7% 0 0;

    .el-button {
      background-color: #409eff;
      color: white;
      width: 150%;
    }
  }
  .add {
    .el-dialog {
      .el-form-item {
        margin-left: 60px;
        margin-bottom: 5px;
      }
    }
    .dialog-footer {
      margin-top: 20px;
      margin-left: 500px;
      width: 200px;
      .el-button {
        width: 70px;
        &:first-child {
          background: #eeeeee;
        }
      }
    }
  }
}
@media only screen and (max-width: 1600px) {
  .app-container {
    .el-form-item {
      margin: 0 3% 0 0;
    }
  }
} */
</style>