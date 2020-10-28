<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :inline="true">
      <el-form-item label="员工姓名">
        <el-input v-model="form.name" placeholder="请输入员工姓名"></el-input>
      </el-form-item>
      <el-form-item label="员工账号">
        <el-input v-model="form.num" placeholder="请输入员工账号"></el-input>
      </el-form-item>
      <el-form-item label="员工职位">
        <el-input v-model="form.title" placeholder="请输入员工职位"></el-input>
      </el-form-item>
      <el-form-item label="所属部门">
        <el-input
          v-model="form.department"
          placeholder="请输入所属部门"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="text" @click="onSubmit" icon="el-icon-search"
          >搜索</el-button
        >
      </el-form-item>
      <el-form-item class="add" label=""
        ><el-button
          type="text"
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
      dialogFormVisible: false,
    };
  },
  mounted() {
    console.log(window.innerWidth);
  },
  methods: {
    onSubmit() {
      window.alert("搜索");
    },
  },
};
</script>
<style lang="scss" scoped>
.app-container {
  border: 1px solid red;
  width: 95%;
  margin: auto;
  .el-form-item {
    margin: 0 7% 0 0;
    &:last-child {
      margin-right: -6%;
    }
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
}
</style>