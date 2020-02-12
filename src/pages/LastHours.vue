<template>
  <div>
    <page-header :backButton="true" :title="'Ocorrências nas últimas 72h'"/>
    <div class="q-ma-xl q-pt-sm">
      <p v-if="today.length === 0 && yesterday.length === 0 && beforeYesterday.length === 0">
        Não houve ocorrências nas últimas 72 horas
      </p>
      <simple-list v-if="today.length > 0" :title="'HOJE'" :items="today" :type="'history'" />
      <q-separator v-if="today.length > 0 && yesterday.length > 0" spaced inset style="height: 1px;" />
      <simple-list v-if="yesterday.length > 0" :title="'ONTEM'" :items="yesterday" :type="'history'" />
      <q-separator v-if="yesterday.length > 0 && beforeYesterday.length > 0" spaced inset style="height: 1px;" />
      <simple-list v-if="beforeYesterday.length > 0" :title="'ANTEONTEM'" :items="beforeYesterday" :type="'history'" />
    </div>
  </div>
</template>

<script>
import pageHeader from '../components/pageHeader.vue'
import simpleList from '../components/simpleList.vue'
import MASTER from '../services/masterApi/http-common'

export default {
  components: {
    pageHeader: pageHeader,
    simpleList: simpleList
  },
  data () {
    return {
      today: [
        // {
        //   initialHour: '11h40',
        //   finalHour: '11h49',
        //   occurence: 'Pico de consumo',
        //   name: 'ICC Norte m2',
        //   sigla: 'FCE',
        //   id: 1
        // },
      ],
      yesterday: [],
      beforeYesterday: []
    }
  },
  created () {
    MASTER.get('/occurences/?type=period')
      .then((res) => {
        this.separateInDays(res.data.transductor_connection_fail, 'Falha de comunicação')
        this.separateInDays(res.data.slave_connection_fail, 'Falha de comunicação')
        this.separateInDays(res.data.critical_tension, 'Tensão crítica')
        this.separateInDays(res.data.precarious_tension, 'Tensão precária')
        this.separateInDays(res.data.phase_drop, 'Queda de fase')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    separateInDays (arr, type) {
      let today = new Date()
      arr.forEach((elem) => {
        let d = new Date(elem.time)
        let item = {
          ...elem,
          occurence: type,
          writtenTime: this.getTime(d)
        }

        if (today.getDate() === d.getDate()) {
          this.today.push(item)
        } else if (today.getDate() - 1 === d.getDate()) {
          this.yesterday.push(item)
        } else if (today.getDate() - 2 === d.getDate()) {
          this.yesterday.push(item)
        }
      })
    },
    getTime (date) {
      let h = date.getHours()
      let m = date.getMinutes()
      let res = h.toString() + 'h ' + m.toString() + 'min'
      return res
    }
  }
}
</script>
