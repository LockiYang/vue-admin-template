<template>
  <el-table @sort-change="sortChange" :default-sort="defaultSort" :data="list" v-loading="listLoading" border fit highlight-current-row element-loading-text="加载中">
    <el-table-column label="#" align="center" width="40">
      <template v-slot="scope">
        {{ scope.$index + 1 }}
      </template>
    </el-table-column>
    <slot></slot>
  </el-table>
</template>

<script>

export default {
  name: 'ListTable',
  props: {
    list: Array,
    defaultSort: Object,
    listLoading: Boolean,
    sortChange: {
      type: Function,
      default: function () {}
    }
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
</style>
