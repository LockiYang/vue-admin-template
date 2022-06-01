<template>
  <div>
    <el-tag :class="{ 'el-tag--danger': !isActive }">{{ isActive | commonFilter(switchOptions) }}</el-tag>
  </div>
</template>

<script>
import { commonFilter } from '@/utils'
import { switchOptions } from '@/utils/constants'

export default {
  name: 'ListSwitch',
  data () {
    return {
      switchOptions
    }
  },
  filters: {
    commonFilter
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
</style>
