<template>
  <div class="app-container">
  </div>
</template>
<script>
import { parseTime } from '@/utils/format'
import { yonTypeFilter, successNotify, optionsToMap } from '@/utils'
import { pagesConfig, yonOptions, switchOptions } from '@/utils/constants'
import checkPermission from '@/utils/permission'

import ListHeader from '@/components/ListHeader'
import ListTable from '@/components/ListTable'
import ListPagination from '@/components/ListPagination'
import ListDelBtn from '@/components/ListDelBtn'
import ListSwitch from '@/components/ListSwitch'
import PageHeader from '@/components/PageHeader'

/* eslint-disable */
export default {
  components: { ListPagination, ListHeader, ListTable, ListDelBtn, ListSwitch, PageHeader },
  filters: {
    parseTime,
    yonTypeFilter,
    commonFilter (val, options) {
      return optionsToMap(options)[val]
    }
  },
  data () {
    return {
      pagesConfig,
      yonOptions,
      switchOptions,
      list: undefined,
      listTotal: undefined,
      listLoading: true,
      listQuery: {
        pageNum: 1,
        pageSize: pagesConfig.pageSize,
        sort_createAt: 'desc'
      },

      formTemp: {},
      formVisible: false,
      formType: '',
      formRules: {},
      formTitleMap: {
        update: '编辑',
        create: '新建'
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    optionsToMap,
    successNotify,
    checkPermission,
    resetTemp () {
      this.formTemp = {}
    },
    getList () {
      this.listLoading = true
      this.api.list(this.listQuery).then(response => {
        this.list = response.result
        this.listTotal = response.pagination.total
        setTimeout(() => {
          this.listLoading = false
        }, 0.3 * 1000)
      })
    },
    handleFilter () {
      this.listQuery.pageNum = 1
      this.getList()
    },
    handleSizeChange (val) {
      this.listQuery.pageSize = val
      this.getList()
    },
    handleCurrentChange (val) {
      this.listQuery.pageNum = val
      this.getList()
    },
    handleCreate () {
      this.resetTemp()
      this.formType = 'create'
      this.formVisible = true
      this.$nextTick(() => {
        this.$refs.dataForm.clearValidate()
      })
    },
    submitCreate () {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          this.api.create(this.formTemp).then(() => {
            successNotify(this)
            this.getList()
            this.formVisible = false
          })
        }
      })
    },
    handleUpdate (row) {
      this.formTemp = Object.assign({}, row)
      this.formType = 'update'
      this.formVisible = true
      this.$nextTick(() => {
        this.$refs.dataForm.clearValidate()
      })
    },
    submitUpdate () {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          this.api.update(this.formTemp).then(() => {
            successNotify(this)
            this.getList()
            this.formVisible = false
          })
        }
      })
    },
    handleDelete (row) {
      const params = {
        id: row.id
      }
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.api.delete(params).then(() => {
          successNotify(this, '删除成功')
          this.getList()
        })
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
