<template>
  <div>
    <page-header :backButton="true" :title="'Últimas 72h'"/>
    <q-spinner v-if="isLoading" size="3em" class="spinner" />
    <div class="empty" v-else-if="today.length === 0 && yesterday.length === 0 && beforeYesterday.length === 0">
      <p>
        Não houve ocorrências nas últimas 72 horas
      </p>
    </div>
    <div v-else class="q-ma-md q-pt-xs history-container">
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
      today: [],
      yesterday: [],
      beforeYesterday: [],
      key: 0,
      isLoading: true
    }
  },
  created () {
    MASTER.get('/occurences/?type=period')
      .then((res) => {
        console.log(res.data)
        this.separateInDays(res.data.transductor_connection_fail, 'Falha de comunicação')
        this.separateInDays(res.data.slave_connection_fail, 'Falha de comunicação')
        this.separateInDays(res.data.critical_tension, 'Tensão crítica')
        this.separateInDays(res.data.precarious_tension, 'Tensão precária')
        this.separateInDays(res.data.phase_drop, 'Queda de fase')
        this.isLoading = false
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    separateInDays (arr, type) {
      let today = new Date()
      arr.forEach((elem) => {
        let endTime = elem.end_time !== null ? new Date(elem.end_time) : today
        let startTime = new Date(elem.start_time)

        let item = {
          ...elem,
          occurence: type,
          writtenStartTime: this.getTime(startTime, endTime, true),
          writtenEndTime: this.getTime(endTime, today, false),
          key: this.key
        }
        this.key++

        if (today.getDate() === endTime.getDate()) {
          this.today.push(item)
        } else if (today.getDate() - 1 === endTime.getDate()) {
          this.yesterday.push(item)
        } else if (today.getDate() - 2 === endTime.getDate()) {
          this.beforeYesterday.push(item)
        }
      })
    },
    getTime (date, compareDate, isStartTime) {
      let days = Math.floor((compareDate - date) / (1000 * 60 * 60 * 24))
      let res = ''

      if (isStartTime && days > 0) {
        res += days.toString() + ' dia '
      } else {
        let h = date.getHours()
        let min = date.getMinutes()
        res += h.toString() + 'h' + min.toString().padStart(2, 0)
      }
      return res
    }
  }
}
</script>

<style lang="scss" scoped>
.history-container {
  background-color: #fafafa;
  margin-top: 10%;
}
.spinner {
  display: flex;
  margin: 0 auto;
  height: 80vh;
}
.empty {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
