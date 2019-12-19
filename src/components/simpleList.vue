<template>
  <div class="q-mt-lg">
    <div v-if="title" class="ListTitle h1">{{title}}</div>
    <main-list :list="true" :items="items" :type="type" />
  </div>
</template>

<script>
import pageHeader from "../components/pageHeader.vue";
import mainList from "../components/mainList.vue";

export default {
  name: "SimpleList",
  components: {
    pageHeader: pageHeader,
    mainList: mainList
  },
  props: {
    title: {
      type: String
    },
    items: {
      type: Array,
      default: []
    },
    type: {
      type: String,
      default: "list"
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.ListTitle {
  color: #777777;
}
</style>