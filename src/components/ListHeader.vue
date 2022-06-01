<template>
  <div class="list-header">
    <div class="filters-container">
      <slot name="actions"></slot>
      <slot></slot>
      <el-button v-if="$slots.default" size="small" class="filter-item" icon="el-icon-search" @click="handleFilter"></el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ListHeader',
  props: {
    title: String,
    handleFilter: Function
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.filters-container {
  display: flex;
  .el-button, .el-select, .el-input, .el-date-editor {
    margin: 0;
  }
  .el-button + .el-button,
  .el-select + .el-button,
  .el-input + .el-button,
  .el-date-editor + .el-button {
    margin-left: 10px;
  }
  .el-input + .el-input,
  .el-button + .el-input,
  .el-select + .el-input,
  .el-date-editor + .el-input {
    margin-left: 10px;
  }
  .el-select + .el-select,
  .el-button + .el-select,
  .el-input + .el-select,
  .el-date-editor + .el-select {
    margin-left: 10px;
  }
  .el-select + .el-date-editor ,
  .el-button + .el-date-editor ,
  .el-input + .el-date-editor ,
  .el-date-editor + .el-date-editor  {
    margin-left: 10px;
  }
}
</style>
