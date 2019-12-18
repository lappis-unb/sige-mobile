<template>
  <div>
    <page-header :lastHours="true" :title="'Ocorrências nas últimas 72h'" />
    <div class="q-gutter-md">
      <simple-list :title="'PERTO DE VOCÊ'" :items="nearby" :list="true" />
      <q-separator spaced inset style="height: 2px;" />
      <simple-list :title="'TODOS'" :items="nearby" :list="true" />
    </div>
  </div>
</template>

<script>
import header from "../components/header.vue";
import simpleList from "../components/simpleList.vue";

export default {
  components: {
    pageHeader: header,
    simpleList: simpleList
  }
};
</script>