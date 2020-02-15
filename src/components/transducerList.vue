<template>
  <div>
    <div>
      <simple-list :title="'PERTO DE VOCÊ'" :items="nearby" :list="true" />
      <q-separator spaced inset class="bar" />
      <simple-list :title="'TODOS'" :items="nearby" :list="true" />
    </div>
  </div>
</template>

<script>
import simpleList from '../components/simpleList.vue'

export default {
  name: 'TransducerList',
  components: {
    simpleList: simpleList
  },
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      nearby: [
        {
          name: 'ICC Norte m1',
          sigla: 'DRA',
          obs: 'A - 198V',
          time: '32 min',
          icon: 'warning',
          id: 1
        },
        {
          name: 'ICC Norte m2',
          sigla: 'DRA',
          obs: 'A - 202V',
          time: '30 min',
          id: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.ListTitle {
  color: #777777;
}
.bar {
  height: 2px;
  margin: 0 0;
  width: 100%;
}
</style>
