<template>
  <div class="page-header">
    <div class="page-title">{{ title ? title : getTitle}}</div>
    <div class="page-actions">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageHeader',
  props: {
    title: String,
    autoTitle: undefined
  },
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    getTitle () {
      const matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      if (matched) {
        return [...matched].reverse()[0].name
      } else {
        return undefined
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
