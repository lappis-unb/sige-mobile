<template>
  <div class="q-mt-lg">
    <div v-if="title" class="ListTitle h1">{{title}}</div>
    <main-list :list="true" :items="items" :type="type" />
  </div>
</template>

<script>
import mainList from '../components/mainList.vue'

export default {
  name: 'SimpleList',
  components: {
    mainList: mainList
  },
  props: {
    title: {
      type: String
    },
    /* eslint-disable */
    items: {
      type: Array,
      default: []
    },
    /* eslint-enable */
    type: {
      type: String,
      default: 'list'
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.ListTitle {
  color: #777777;
}
</style>
