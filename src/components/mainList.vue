<template>
  <div v-if="items">
    <div class="content q-mb-xs">
      <q-card class="card-title q-mb-sm" v-if="!list">
        <q-icon :name="getIcon()" />
        {{this.title}}
      </q-card>
      <occurence-item v-if="type == 'occurence'" :items="items" :info="info"/>
      <history-item v-else-if="type == 'history'" :items="items" />
      <transducer-item v-else-if="type == 'transducer'" :items="items" />
      <list-item v-else :items="items" />
    </div>
  </div>
</template>
<script>
import historyItem from './historyItem.vue'
import transducerItem from './transducerItem.vue'
import occurenceItem from './occurenceItem.vue'
import listItem from './listItem.vue'

export default {
  name: 'MainList',
  components: {
    historyItem: historyItem,
    transducerItem: transducerItem,
    occurenceItem: occurenceItem,
    listItem: listItem
  },
  props: {
    icon: {
      type: String,
      default: 'warning'
    },
    title: {
      type: String
    },
    info: {
      type: String,
      default: ''
    },
    /* eslint-disable */
    items: {
      type: Array,
      default: []
    },
    /* eslint-enable */
    list: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'list'
    }
  },
  methods: {
    getIcon () {
      return this.icon
    }
  }
}
</script>
<style lang="scss">
.card-title {
  font-size: 150%;
  background: #e8e8e8;
  padding: 5%;
}
</style>
