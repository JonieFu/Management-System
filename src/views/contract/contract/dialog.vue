<template>
  <el-dialog :title="title" center width="500px" :visible="infomationVisible" @close="closeDialog">
    <!-- <el-form :model="form" label-width="80px" size="small">
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
    </el-form> -->
    <slot></slot>
  </el-dialog>
</template>
<script>
export default {
  name:"Dialog",
  props: { title: String, infomationVisible: Boolean },
  data() {
    return {};
  },
  methods: {
    closeDialog(){
      this.$emit("update:infomationVisible",false)
    }
  },
};
</script>
<style lang="scss" scoped>
</style>