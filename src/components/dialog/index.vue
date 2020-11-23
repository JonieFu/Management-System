<template>
  <el-dialog :title="title" center width="500px" :visible="infomationVisible" @close="closeDialog">
   <!-- <el-form>
     <el-form-item v-for="(item,index) in itemList" :label="item" :key="index"></el-form-item>
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