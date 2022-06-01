<template>
  <div class="dashboard-container"></div>
</template>

<script>
import List from '@/components/List'
import { mapGetters } from 'vuex'

export default {
  mixins: [List],
  computed: {
    ...mapGetters(['orgId'])
  },
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.box-card {
  text-align: center;
  margin: 10px;
  .title {
    color: rgb(0, 81, 195);
    margin-bottom: 10px;
  }
}
</style>
