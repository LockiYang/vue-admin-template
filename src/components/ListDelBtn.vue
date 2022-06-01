<template>
  <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
    <el-button plain type="danger" size="mini" @click="handleDelete(row)"><i class="el-icon-delete" /></el-button>
  </el-tooltip>
</template>

<script>
import { successNotify } from '@/utils'
export default {
  name: 'ListDelBtn',
  props: {
    row: Object,
    list: Array,
    delApi: Function
  },
  data () {
    return {

    }
  },
  methods: {
    handleDelete (row) {
      const params = {
        id: row.id
      }
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.delApi(params).then(() => {
          successNotify(this, '删除成功')
          const index = this.list.indexOf(row)
          this.list.splice(index, 1)
        })
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
