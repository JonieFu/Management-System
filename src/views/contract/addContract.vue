<template>
  <div class="container">
    <div claass="header"><h5>合同审核</h5></div>
    <el-divider :content-position="'right'"></el-divider>
    {{ title }}
    <!-- <el-table :data="">
      <el-table-column label=""></el-table-column>
    </el-table> -->
  </div>
</template>
<script>
import { Bus } from "@/assets/Bus.js";
export default {
  data() {
    return {
      title: "",
    };
  },
  mounted() {
    console.log(this.$router.params.msg)
    // this.title = this.$router.params.msg
  },
};
</script>
<style lang="scss" scoped>
.header {
  border: 1px solid red;
}
h5 {
  margin-top: 10px;
  margin-left: 10px;
}
::v-deep .el-divider {
  width: 90vw;
  margin-top: 10px;
}
</style>