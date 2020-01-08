<template>
  <div>
    <page-header :title="'Ocorrências em andamento'" :last72h="true" />
    <main-list :title="'Tensão crítica'" :items="critical_tension" :type="'occurence'" />
    <main-list :title="'Queda de fase'" :items="phase_drop" :type="'occurence'" />
    <main-list :title="'Falha de comunicação'" :items="comunication_fail" :type="'occurence'" />
  </div>
</template>
<script>
import pageHeader from "../components/pageHeader.vue";
import mainList from "../components/mainList.vue";

export default {
  name: "Occurences",
  components: {
    pageHeader: pageHeader,
    mainList: mainList
  },
  data() {
    return {
      critical_tension: [
        {
          name: "ICC Norte m1",
          sigla: "DRA",
          obs: "A - 198V",
          time: "32 min",
          id: 1
        },
        {
          name: "ICC Norte m2",
          sigla: "DRA",
          obs: "A - 202V",
          time: "30 min",
          id: 2
        }
      ],
      phase_drop: [
        {
          name: "BSA m1",
          sigla: "DRA",
          obs: "Fase A",
          time: "26 min",
          id: 1
        }
      ],
      comunication_fail: [
        {
          name: "Prédio A m1",
          sigla: "FGA",
          obs: "Possível queda de energia",
          time: "12 min",
          id: 1
        },
        {
          name: "Prédio B m1",
          sigla: "FGA",
          obs: "Possível queda de energia",
          time: "12 min",
          id: 2
        },
        {
          name: "Ala principal m1",
          sigla: "FCE",
          obs: "Possível queda de energia",
          time: "10 min",
          id: 3
        },
        {
          name: "Ala principal m2",
          sigla: "FCE",
          obs: "Possível queda de energia",
          time: "10 min",
          id: 4
        },
        {
          name: "Ala principal m3",
          sigla: "FCE",
          obs: "Possível queda de energia",
          time: "10 min",
          id: 5
        },
        {
          name: "Ala de serviço m3",
          sigla: "FCE",
          obs: "Possível queda de energia",
          time: "10 min",
          id: 6
        }
      ]
    };
  }
};
</script>