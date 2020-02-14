<template>
  <div v-if="items" class="q-mt-md" >
    <div class="container" v-if="!list"> 
      <q-icon class="icon" :name="getIcon()" />
      <div class="title_container" :class="{'light' : !this.serious}">{{this.title}}</div>
    </div>
    <div class="content q-mb-xs">
      <occurence-item v-if="type == 'occurence'" :items="items" :type="type" :info="info"/>
      <history-item v-else-if="type == 'history'" :items="items" />
      <transducer-item v-else-if="type == 'transducer'" :items="items" />
      <list-item v-else :items="items" />
    </div>
  </div>
</template>
<script>
import historyItem from "./historyItem.vue";
import transducerItem from "./transducerItem.vue";
import occurenceItem from "./occurenceItem.vue";
import listItem from "./listItem.vue";

export default {
  name: "MainList",
  components: {
    historyItem: historyItem,
    transducerItem: transducerItem,
    occurenceItem: occurenceItem,
    listItem: listItem
  },
  props: {
    icon: {
      type: String,
      default: "warning"
    },
    title: {
      type: String
    },
    info: {
      type: String,
      default: ""
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
      default: "list"
    },
    serious: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getIcon() {
      return this.icon;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
}

.icon {
  height: 10%;
  width: 12%;
}

.title_container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f13209;
  margin-left: -1px;
  padding-left: 2%;
  width: 100%;
  font-family: Roboto;
  font-size: 7vw;
  font-weight: 300;
  font-style: italic;
  color: #ffffff;
}

.light {
  background-color: #f1c809;
}
</style>
