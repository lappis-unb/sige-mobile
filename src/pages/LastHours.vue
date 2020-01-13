<template>
  <div>
    <page-header :backButton="true" :title="'Ocorrências nas últimas 72h'"/>
    <div class="q-ma-xl" style="margin-top: 20%">
      <simple-list :title="'HOJE'" :items="today" :type="'history'" />
      <q-separator spaced inset style="height: 1px;" />
      <simple-list :title="'ONTEM'" :items="yesterday" :type="'history'" />
      <q-separator spaced inset style="height: 1px;" />
      <simple-list :title="'ANTEONTEM'" :items="beforeYesterday" :type="'history'" />
    </div>
  </div>
</template>

<script>
import pageHeader from '../components/pageHeader.vue'
import simpleList from '../components/simpleList.vue'

export default {
  components: {
    pageHeader: pageHeader,
    simpleList: simpleList
  },
  data () {
    return {
      today: [
        {
          initialHour: '11h40',
          finalHour: '11h49',
          occurence: 'Pico de consumo',
          name: 'ICC Norte m2',
          sigla: 'FCE',
          id: 1
        },
        {
          initialHour: '09h35',
          finalHour: '09h47',
          occurence: 'Queda de fase',
          name: 'ICC Norte m1',
          sigla: 'DRA',
          id: 2
        }
      ],
      yesterday: [
        {
          initialHour: '11h40',
          finalHour: '11h49',
          occurence: 'Pico de consumo',
          name: 'ICC Norte m2',
          sigla: 'FCE',
          id: 1
        },
        {
          initialHour: '09h35',
          finalHour: '09h47',
          occurence: 'Queda de fase',
          name: 'ICC Norte m1',
          sigla: 'DRA',
          id: 2
        },
        {
          initialHour: '11h40',
          finalHour: '11h49',
          occurence: 'Pico de consumo',
          name: 'ICC Norte m2',
          sigla: 'FCE',
          id: 3
        },
        {
          initialHour: '09h35',
          finalHour: '09h47',
          occurence: 'Queda de fase',
          name: 'ICC Norte m1',
          sigla: 'DRA',
          id: 4
        },
        {
          initialHour: '11h40',
          finalHour: '11h49',
          occurence: 'Pico de consumo',
          name: 'ICC Norte m2',
          sigla: 'FCE',
          id: 5
        },
        {
          initialHour: '09h35',
          finalHour: '09h47',
          occurence: 'Queda de fase',
          name: 'ICC Norte m1',
          sigla: 'DRA',
          id: 6
        }
      ],
      beforeYesterday: [
        {
          initialHour: '11h40',
          finalHour: '11h49',
          occurence: 'Pico de consumo',
          name: 'ICC Norte m2',
          sigla: 'FCE',
          id: 1
        },
        {
          initialHour: '09h35',
          finalHour: '09h47',
          occurence: 'Queda de fase',
          name: 'ICC Norte m1',
          sigla: 'DRA',
          id: 2
        },
        {
          initialHour: '11h40',
          finalHour: '11h49',
          occurence: 'Pico de consumo',
          name: 'ICC Norte m2',
          sigla: 'FCE',
          id: 3
        },
        {
          initialHour: '09h35',
          finalHour: '09h47',
          occurence: 'Queda de fase',
          name: 'ICC Norte m1',
          sigla: 'DRA',
          id: 4
        },
        {
          initialHour: '11h40',
          finalHour: '11h49',
          occurence: 'Pico de consumo',
          name: 'ICC Norte m2',
          sigla: 'FCE',
          id: 5
        },
        {
          initialHour: '09h35',
          finalHour: '09h47',
          occurence: 'Queda de fase',
          name: 'ICC Norte m1',
          sigla: 'DRA',
          id: 6
        }
      ]
    }
  }
}
</script>
