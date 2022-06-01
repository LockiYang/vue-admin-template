<template>
  <div class="pagination-container">
    <el-pagination :total="listTotal" :current-page="listQuery.pageNum" :page-size="listQuery.pageSize" :page-sizes="pagesConfig.pageSizes" @size-change="handleSizeChange" @current-change="handleCurrentChange" background layout="total, sizes, prev, pager, next, jumper" />
  </div>
</template>

<script>
import { pagesConfig } from '@/utils/constants'

export default {
  name: 'ListPagination',
  props: {
    listQuery: Object,
    listTotal: Number,
    handleSizeChange: Function,
    handleCurrentChange: Function
  },
  data () {
    return {
      pagesConfig
    }
  },
  methods: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
