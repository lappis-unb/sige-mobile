<template>
  <div>
    <page-header :isDropdown="true" />
    <div class="q-gutter-md">
      <simple-list :title="'PERTO DE VOCÊ'" :items="nearby" :list="true" />
      <q-separator spaced inset style="height: 2px;" />
      <simple-list :title="'TODOS'" :items="nearby" :list="true" />
    </div>
  </div>
</template>

<script>
import pageHeader from "../components/header.vue";
import simpleList from "../components/simpleList.vue";

export default {
  name: "TransducerList",
  components: {
    pageHeader: pageHeader,
    simpleList: simpleList
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
}
</style>