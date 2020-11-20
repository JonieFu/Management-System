<template>
<el-dialog :title="title" center width="500px" :visible = "infomationVisible">
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
        </el-row>
  </el-form>
</el-dialog>
</template>
<script>
export default {
  props:["title"],
  data(){
    return{
      infomationVisible:"false"
    }
  },
  methods:{
    infomationVisible(){
      this.$emit("informationVisible")
    }
  }
  
}
</script>
<style lang="scss" scoped>
</style>