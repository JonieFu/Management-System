<template>
  <div>
  <el-dialog title="角色分配" center :visible.sync="visible" close-on-click-modal="false">
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
  </div>
</template>

<script>
export default {
  props:["visible"],
  data(){
    return{
      tableList:[],
      dialogData:{
        isIndeterminate:true,
        systemMessage:["系统首页","个人信息"],
        productInformation:["商品列表","添加商品","商品分类"],
        checkedSystemMessage:[],
        chectedProductInformation:[],
        checkAll:false,
        value:false,
        },
    }
  },
  mounted(){
    console.log(this.visible);
  },
  methods:{

    
  }
}
</script>