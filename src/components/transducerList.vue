<template>
  <div class="q-mt-lg">
    <page-header :isDropdown="true" />
    <div v-if="title" class="ListTitle h1">PERTO DE VOCÊ</div>
    <occurences-list :list="true" :items="nearby" />
    <q-separator spaced inset />
    <div v-if="title" class="ListTitle h1">TODOS</div>
    <occurences-list :list="true" :items="nearby" />
  </div>
</template>

<script>
import pageHeader from "../components/header.vue";
import occurencesList from "../components/occurencesList.vue";

export default {
  name: "TransducerList",
  components: {
    pageHeader: pageHeader,
    occurencesList: occurencesList
  },
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      nearby: [
        {
          name: "ICC Norte m1",
          sigla: "DRA",
          obs: "A - 198V",
          time: "32 min",
          icon: "warning",
          id: 1
        },
        {
          name: "ICC Norte m2",
          sigla: "DRA",
          obs: "A - 202V",
          time: "30 min",
          id: 2
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.ListTitle {
  color: #777777;
  margin-bottom: -10%;
}
</style>