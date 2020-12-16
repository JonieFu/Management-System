<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <el-col :span="3"
        ><span class="el-icon-notebook-2">数据列表</span></el-col
      >
      <el-col :span="7">
        <el-select
          class="num"
          v-model="value"
          placeholder="显示条数/页"
          size="small"
          width="100px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
        <el-select v-model="rank" placeholder="排序方式" size="small">
          <el-option
            v-for="item in sortOptions"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-table :data="tableList" :border="true">
      <el-table-column
        align="center"
        label="序号"
        type="index"
        width="50px"
      ></el-table-column>
      <el-table-column
        v-for="(item, index) in tableTitle"
        :label="item"
        :prop="propList[index]"
        :key="propList[index]"
        :sortable="true"
        align="center"
      ></el-table-column>
    </el-table>
    <el-row class="page" type="flex" justify="end">
      <Page />
    </el-row>
  </div>
</template>
<script>
import Page from "@/components/page";
export default {
  components: { Page },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "每页5条",
        },
        {
          value: "选项2",
          label: "每页10条",
        },
        {
          value: "选项3",
          label: "每页15条",
        },
        {
          value: "选项4",
          label: "每页20条",
        },
        {
          value: "选项5",
          label: "每页25条",
        },
      ],
      sortOptions: [
        { value: "ascending", label: "升序" },
        { value: "descending", label: "降序" },
        { value: "null", label: "原始顺序" },
      ],
      propList: [
        "num",
        "version",
        "quality",
        "color",
        "specification",
        "production_amount",
        "sales",
      ],
      tableList: [
        {
          num: "纽扣",
          version: "bmh25*25",
          quality: "橡胶",
          color: "乳白色",
          specification: "包",
          production_amount: "78",
          sales: "Kg",
        },
        {
          num: "纽扣",
          version: "bmh25*25",
          quality: "橡胶",
          color: "乳白色",
          specification: "包",
          production_amount: "78",
          sales: "Kg",
        },
        {
          num: "纽扣",
          version: "bmh25*25",
          quality: "橡胶",
          color: "乳白色",
          specification: "包",
          production_amount: "78",
          sales: "Kg",
        },
      ],
      tableTitle: [
        "物料名称",
        "规格型号",
        "材质",
        "色号",
        "规格单位",
        "生产用量",
        "计价单位",
      ],
      value: "",
      rank: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
  span {
    line-height: 34px;
  }
  .num {
    margin-right: 10px;
  }
  ::v-deep .el-button {
    margin-left: 0px;
  }
  .page {
    margin-top: 10px;
  }
  .el-select {
    width: 120px;
  }
}
</style>