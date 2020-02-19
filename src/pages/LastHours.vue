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
import separateInDays from '../utils/separateInDays'

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
      key: 0
    }
  },
  async created () {
    await MASTER.get('/occurences/?type=period')
      .then(async (res) => {
        await separateInDays(res.data.transductor_connection_fail, 'transductor_connection_fail', this.today, this.yesterday, this.beforeYesterday)
        await separateInDays(res.data.slave_connection_fail, 'slave_connection_fail', this.today, this.yesterday, this.beforeYesterday)
        await separateInDays(res.data.critical_tension, 'critical_tension', this.today, this.yesterday, this.beforeYesterday)
        await separateInDays(res.data.precarious_tension, 'precarious_tension', this.today, this.yesterday, this.beforeYesterday)
        await separateInDays(res.data.phase_drop, 'phase_drop', this.today, this.yesterday, this.beforeYesterday)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
