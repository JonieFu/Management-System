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
      <el-button type="primary" icon="el-icon-circle-plus" size="small" @click="informationAddVisible=true"
        >添加</el-button
      >
    </el-form>
    <el-table
      :data="tableList"
      @selection-change="handleSelectionChange"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
    >
      <el-table-column align="center" type="selection"></el-table-column>
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
      <el-table-column align="center" label="创建时间"> </el-table-column>
      <el-table-column align="center" label="创建人"> </el-table-column>
      <el-table-column align="center" label="操作">
        <el-button
          type="primary"
          size="small"
          @click="informationEditVisible = true"
          >编辑</el-button
        >
      </el-table-column>
    </el-table>
    <el-dialog title="角色分配" center :visible.sync="informationEditVisible" >
      <el-form v-model="tableList" size="mini" label-width="80px">
        <el-row>
          <el-col :span="14">
            <el-form-item label="角色名称">
              <el-input v-model="tableList.roleName" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="分配权限">
          <el-row>
            <el-col>
              <el-checkbox  :indeterminate="dialogData.isIndeterminate" label="全选" v-model="dialogData.checkAll" @change="handleCheckAllChange"></el-checkbox>
            </el-col>
          </el-row>
          <el-divider ></el-divider> 
          <el-row>
              <el-col :span="8">
                <span><el-switch v-model="dialogData.value" @change="changeSwitch"></el-switch>系统信息</span>
              </el-col >
              <el-col :span="14">
                <el-checkbox-group v-model="dialogData.checkedSystemMessage" @change="handleCheckedCitiesChange">
              <el-checkbox  v-for="system in dialogData.systemMessage" :label="system" :key="system">{{system}}</el-checkbox>
            </el-checkbox-group>
              </el-col>
          </el-row>
          <el-divider ></el-divider> 
          <el-row>
            <el-col :span="8">
              <span><el-switch v-model="dialogData.value" @change="changeSwitch"></el-switch>商品管理</span>
            </el-col>
             <el-col :span="14">
                <el-checkbox-group v-model="dialogData.chectedProductInformation" @change="handleCheckedCitiesChange">
              <el-checkbox  v-for="system in dialogData.productInformation" :label="system" :key="system">{{system}}</el-checkbox>
            </el-checkbox-group>
              </el-col>
          </el-row>
          </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="角色分配" center :visible.sync="informationAddVisible" >
      <el-form v-model="tableList" size="mini" label-width="80px">
        <el-row>
          <el-col :span="14">
            <el-form-item label="角色名称">
              <el-input v-model="tableList.roleName" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="分配权限">
          <el-row>
            <el-col>
              <el-checkbox  :indeterminate="dialogData.isIndeterminate" label="全选" v-model="dialogData.checkAll" @change="handleCheckAllChange"></el-checkbox>
            </el-col>
          </el-row>
          <el-divider ></el-divider> 
          <el-row>
              <el-col :span="8">
                <span><el-switch v-model="dialogData.value" @change="changeSwitch"></el-switch>系统信息</span>
              </el-col >
              <el-col :span="14">
                <el-checkbox-group v-model="dialogData.checkedSystemMessage" @change="handleCheckedCitiesChange">
              <el-checkbox  v-for="system in dialogData.systemMessage" :label="system" :key="system">{{system}}</el-checkbox>
            </el-checkbox-group>
              </el-col>
          </el-row>
          <el-divider ></el-divider> 
          <el-row>
            <el-col :span="8">
              <span><el-switch v-model="dialogData.value" @change="changeSwitch"></el-switch>商品管理</span>
            </el-col>
             <el-col :span="14">
                <el-checkbox-group v-model="dialogData.chectedProductInformation" @change="handleCheckedCitiesChange">
              <el-checkbox  v-for="system in dialogData.productInformation" :label="system" :key="system">{{system}}</el-checkbox>
            </el-checkbox-group>
              </el-col>
          </el-row>
          </el-form-item>
      </el-form>
    </el-dialog>
    <div class="footer">
      <Page />
    </div>
  </div>
</template>
<script>
import Page from "@/components/page/index.vue";
import {getRoleName} from "@/api/role"
export default {
  components: { Page },
  data() {
    return {
      dialogData: {
        isIndeterminate: true,
        systemMessage: ["系统首页", "个人信息"],
        productInformation: ["商品列表", "添加商品", "商品分类"],
        checkedSystemMessage: [],
        chectedProductInformation: [],
        checkAll: false,
        value: false,
      },
      name:"fuyu",
      informationAddVisible:false,
      informationEditVisible: false,
      searchName: {
        input: "",
      },
      tableList: [],
    };
  },
  mounted() {
    getRoleName().then(response =>{
      this.tableList = response.data;
      this.tableList.forEach((item, index) => {
      this.tableList[index].power = item.power.join(" / ");
    });
    })
  },
  methods: {
    changeSwitch(){
      this.dialogData.checkedSystemMessage = this.dialogData.value? this.dialogData.systemMessage:[]
    },
    handleCheckAllChange(val){
      this.dialogData.checkedSystemMessage = val?this.dialogData.systemMessage:[];
      this.dialogData.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value){
       let checkedCount = value.length;
       console.log(checkedCount);
      this.dialogData.checkAll = (checkedCount === this.dialogData.systemMessage.length);
       console.log(this.dialogData.checkAll);
       this.dialogData.isIndeterminate = checkedCount > 0 && checkedCount < this.dialogData.systemMessage.length;
    },
    handleSelectionChange(data) {
      this.tableDataAmount = data;
    },
  },
};
</script>
<style lang="scss" scoped>
// 设置按钮的大小
.el-divider--horizontal {
  margin: 8px 0;
}
.el-dialog {
  .el-row {
    span {
      .el-switch {
        margin-right: 10px;
        margin-bottom: 3px;
      }
    }
  }
}
::v-deep .el-switch__core {
  width: 35px !important;
  height: 15px;
  color: red;
}
::v-deep .el-switch__core::after {
  width: 13px;
  height: 13px;
  margin-top: -1px;
  margin-right: -13px;
  margin-bottom: 2px;
}
::v-deep .el-switch.is-checked .el-switch__core::after {
  margin-left: -13px;
}
.footer {
  display: flex;
  justify-content: flex-end;
}
</style>