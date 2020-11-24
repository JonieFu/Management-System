<template>
  <el-dialog
    :title="title"
    center
    width="500px"
    :visible="infomationVisible"
    @close="closeDialog"
  >
    <el-form :model="reviewMessage" size="small" label-width="125px">
      <el-form-item
        v-for="(value, key, index) in reviewMessage"
        :label="formName[index]"
        :key="index"
      >
        <el-input v-model="reviewMessage[key]" :disabled="edit"></el-input>
      </el-form-item>
    </el-form>
    <slot></slot>
  </el-dialog>
</template>
<script>
export default {
  name: "Dialog",
  props: {
    title: String,
    infomationVisible: Boolean,
    reviewMessage: Object,
    formName: Array,
    edit: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    closeDialog() {
      this.$emit("update:infomationVisible", false);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>