<template>
  <div class="q-mt-lg">
    <div v-if="title" class="ListTitle h1">{{title}}</div>
    <occurences-list :list="true" :items="items" />
  </div>
</template>

<script>
import pageHeader from "../components/header.vue";
import occurencesList from "../components/occurencesList.vue";

export default {
  name: "SimpleList",
  components: {
    pageHeader: pageHeader,
    occurencesList: occurencesList
  },
  props: {
    title: {
      type: String
    },
    items: {
      type: []
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