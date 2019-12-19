<template>
  <div>
    <page-header :lastHours="true" :title="'Ocorrências nas últimas 72h'" />
    <div class="q-ma-md">
      <simple-list :title="'HOJE'" :items="today" :list="true" />
      <q-separator spaced inset style="height: 2px;" />
      <simple-list :title="'ONTEM'" :items="yesterday" :list="true" />
      <q-separator spaced inset style="height: 2px;" />
      <simple-list :title="'ANTEONTEM'" :items="beforeYesterday" :list="true" />
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
  },
  data() {
    return {
      today: [
        {
          initialHour: "11h40",
          finalHour: "11h49",
          occurrence: "Pico de consumo",
          name: "ICC Norte m2",
          sigla: "FCE",
          id: 1
        },
        {
          initialHour: "09h35",
          finalHour: "09h47",
          occurrence: "Queda de fase",
          name: "ICC Norte m1",
          sigla: "DRA",
          id: 2
        }
      ],
      yesterday: [
        {
          initialHour: "11h40",
          finalHour: "11h49",
          occurrence: "Pico de consumo",
          name: "ICC Norte m2",
          sigla: "FCE",
          id: 1
        },
        {
          initialHour: "09h35",
          finalHour: "09h47",
          occurrence: "Queda de fase",
          name: "ICC Norte m1",
          sigla: "DRA",
          id: 2
        },
        {
          initialHour: "11h40",
          finalHour: "11h49",
          occurrence: "Pico de consumo",
          name: "ICC Norte m2",
          sigla: "FCE",
          id: 3
        },
        {
          initialHour: "09h35",
          finalHour: "09h47",
          occurrence: "Queda de fase",
          name: "ICC Norte m1",
          sigla: "DRA",
          id: 4
        },
        {
          initialHour: "11h40",
          finalHour: "11h49",
          occurrence: "Pico de consumo",
          name: "ICC Norte m2",
          sigla: "FCE",
          id: 5
        },
        {
          initialHour: "09h35",
          finalHour: "09h47",
          occurrence: "Queda de fase",
          name: "ICC Norte m1",
          sigla: "DRA",
          id: 6
        }
      ],
      beforeYesterday: [
        {
          initialHour: "11h40",
          finalHour: "11h49",
          occurrence: "Pico de consumo",
          name: "ICC Norte m2",
          sigla: "FCE",
          id: 1
        },
        {
          initialHour: "09h35",
          finalHour: "09h47",
          occurrence: "Queda de fase",
          name: "ICC Norte m1",
          sigla: "DRA",
          id: 2
        },
        {
          initialHour: "11h40",
          finalHour: "11h49",
          occurrence: "Pico de consumo",
          name: "ICC Norte m2",
          sigla: "FCE",
          id: 3
        },
        {
          initialHour: "09h35",
          finalHour: "09h47",
          occurrence: "Queda de fase",
          name: "ICC Norte m1",
          sigla: "DRA",
          id: 4
        },
        {
          initialHour: "11h40",
          finalHour: "11h49",
          occurrence: "Pico de consumo",
          name: "ICC Norte m2",
          sigla: "FCE",
          id: 5
        },
        {
          initialHour: "09h35",
          finalHour: "09h47",
          occurrence: "Queda de fase",
          name: "ICC Norte m1",
          sigla: "DRA",
          id: 6
        }
      ]
    };
  }
};
</script>