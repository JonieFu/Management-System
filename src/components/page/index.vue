<template>
  <el-pagination
        layout="total, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="5"
        :current-page="1"
        :total="5"
      >
      </el-pagination>
</template>
<script>
export default {
  
  methods:{
    handleSizeChange(){},
    handleCurrentChange(){}
  }
}
</script>