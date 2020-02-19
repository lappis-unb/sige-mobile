<template>
    <div v-if="!isLoading" class="q-mt-xl q-pt-xs">
        <page-header :backButton="true" :title="name" />
            <div v-if="occurrences.length > 0" class="occurence-warning">
                <b>Ocorrência{{occurrences.length > 1? 's' : ''}} em andamento</b>
            </div>
            <div v-for="occ in occurrences" v-bind:key="occ.id" class="occurence">
                <div class="q-ma-md">
                    <div class="occurence-title">
                        <q-icon name="warning"/>
                        {{occ.type}}
                    </div>
                    <div class="occurence-title">
                        {{occ.info}}
                    </div>
                    <i class="occurence-time">Desde {{occ.writtenStartTime}}</i>
                </div>
                <q-separator spaced inset style="height: 1px;" />
            </div>
        <div class="q-ma-md">
            <p v-if="hasMeasurements" class="lastReading">Última leitura - {{lastReading}}.</p>
            <p v-if="!hasMeasurements" class="lastReading">Não há leituras salvas </p>
            <table v-if="hasMeasurements" align="center" class="readings">
                <tr>
                    <th>Tensão</th>
                    <th>Corrente</th>
                    <th>Potência</th>
                </tr>
                <tr>
                    <td>A - {{tension.a}}V</td>
                    <td>A - {{current.a}}A</td>
                    <td>A - {{power.a}}W</td>
                </tr>
                <tr>
                    <td>B - {{tension.b}}V</td>
                    <td>B - {{current.b}}A</td>
                    <td>R - {{power.r}}kVAr</td>

                </tr>
                <tr>
                    <td>C - {{tension.c}}V</td>
                    <td>C - {{current.c}}A</td>
                    <td>T - {{power.t}}kVa</td>

                </tr>
            </table>
            <l-map
              class="map"
              style="height: 50vh!important"
              :zoom="20"
              :center="center"
              :options="mapOptions"
              id="idDoLeo">
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              />
              <l-circle
                :lat-lng="center"
                :radius="3"
                :fill-opacity="1"
              >
              <l-popup
                :content="'Transdutor'"
              />
              </l-circle>
            </l-map>

            <q-separator spaced inset style="height: 1px;" />

            <p>Outras ocorrências nas últimas 72h:</p>
            <simple-list v-if="today.length > 0" :title="'HOJE'" :items="this.today" :type="'transducer'" />
            <simple-list v-if="yesterday.length > 0" :title="'ONTEM'" :items="this.yesterday" :type="'transducer'" />
            <simple-list v-if="beforeYesterday.length > 0" :title="'ANTEONTEM'" :items="this.beforeYesterday" :type="'transducer'" />
            <p v-if="today.length === 0 && yesterday.length === 0 && beforeYesterday.length === 0">Não houve ocorrências</p>
        </div>
    </div>
</template>
<script>
import pageHeader from '../components/pageHeader.vue'
import simpleList from '../components/simpleList.vue'
import 'leaflet/dist/leaflet.css'
import Vue2Leaflet from '../services/ssr-import/leaflet'
import MASTER from '../services/masterApi/http-common'
import timePassed from '../utils/timePassed'
import separateInDays from '../utils/separateInDays'

export default {
  components: {
    pageHeader: pageHeader,
    simpleList: simpleList,
    'l-map': Vue2Leaflet.LMap,
    'l-tile-layer': Vue2Leaflet.LTileLayer,
    'l-circle': Vue2Leaflet.LCircle,
    'l-popup': Vue2Leaflet.LPopup
  },

  data () {
    return {
      key: 0,
      isLoading: true,
      name: '',
      lastReading: '',
      tension: {},
      current: {},
      power: {},
      today: [],
      yesterday: [],
      beforeYesterday: [],
      occurrences: [],
      hasMeasurements: false,

      // MAP info
      center: [0, 0],

      mapOptions: {
        zoomControl: false,
        maxbounds: this.center
      },

      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:
        '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  },

  async created () {
    let id = this.$router.currentRoute.params.id
    await MASTER.get('/energy-transductors/' + id)
      .then((res) => {
        this.name = res.data.name
        this.name = res.data.name
        this.center[0] = res.data.geolocation_latitude
        this.center[1] = res.data.geolocation_longitude
      })
      .catch((err) => {
        console.log(err)
      })
    await MASTER.get('/realtime-measurements/' + id)
      .then((res) => {
        this.tension = {
          a: this.round(res.data.voltage_a),
          b: this.round(res.data.voltage_b),
          c: this.round(res.data.voltage_c)
        }
        this.current = {
          a: this.round(res.data.current_a),
          b: this.round(res.data.current_b),
          c: this.round(res.data.current_c)
        }
        this.power = {
          a: this.round(res.data.total_active_power),
          r: this.round(res.data.total_reactive_power),
          t: this.round(res.data.total_power_factor)
        }
        this.lastReading = this.getTime(res.data.collection_time)
        this.hasMeasurements = true
      })
      .catch((err) => {
        console.log(err)
      })
    await MASTER.get('/occurences/?type=period&serial_number=' + id)
      .then(async (res) => {
        await separateInDays(res.data.critical_tension, 'critical_tension', this.today, this.yesterday, this.beforeYesterday, this.occurrences)
        await separateInDays(res.data.precarious_tension, 'precarious_tension', this.today, this.yesterday, this.beforeYesterday, this.occurrences)
        await separateInDays(res.data.phase_drop, 'phase_drop', this.today, this.yesterday, this.beforeYesterday, this.occurrences)
        await separateInDays(res.data.transductor_connection_fail, 'conection_fail', this.today, this.yesterday, this.beforeYesterday, this.occurrences)
        await separateInDays(res.data.slave_connection_fail, 'conection_fail', this.today, this.yesterday, this.beforeYesterday, this.occurrences)
      })
      .catch((err) => {
        console.log(err)
      })
    this.isLoading = false
  },
  methods: {
    round (num) {
      return Math.round(num * 100) / 100
    },
    getTime (d) {
      let ans = timePassed(d)
      if (ans !== 'agora') {
        ans = 'há ' + ans
      }
      return ans
    }
  }
}
</script>
<style lang= "scss">
.lastReading{
    text-align: center;
}
.readings{
    width: 100%;
    text-align: center;
}
.map{
  border-radius: 5px;
  margin: 5vh 0 5vh 0;
}
.occurence{
    text-align: center;
}
.occurence-warning{
    background-color: #333333;
    color: white;
    text-align: center;
    margin-top: 10px;
}
.occurence-title{
    font-size: 25px;
    font-weight: 300;
}
.occurence-time{
    font-weight: 100px;
}

</style>
