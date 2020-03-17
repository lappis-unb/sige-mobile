<template>
  <div v-if="!isLoading" class="q-mt-xl q-pt-xs">
    <page-header :backButton="true" :title="name" />
    <div v-for="occ in occurrences" v-bind:key="occ.id + occ.transductor + occ.start_time" class="occurence">
      <transducer-alert :occurrence="occ" :serious="seriousOccurrences.includes(occ.originalType)" />
    </div>
    <q-separator spaced inset class="bar" />
    <div class="q-ma-md">
      <p v-if="hasMeasurements" class="lastReading">Última leitura - {{lastReading}}.</p>
      <p v-if="!hasMeasurements" class="lastReading">Não há leituras salvas</p>
      <table v-if="hasMeasurements" align="center" class="readings">
        <tr>
          <th>TENSÃO</th>
          <th>CORRENTE</th>
          <th>POTÊNCIA</th>
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
        id="idDoLeo"
      >
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-circle :lat-lng="center" :radius="3" :fill-opacity="1">
          <l-popup :content="'Transdutor'" />
        </l-circle>
      </l-map>

      <p class="history">Outras ocorrências nas últimas 72h:</p>
      <simple-list
        v-if="today.length > 0"
        :title="'HOJE'"
        :items="this.today"
        :type="'transducer'"
      />
      <q-separator spaced inset class="bar"  v-if="yesterday.length > 0"/>
      <simple-list
        v-if="yesterday.length > 0"
        :title="'ONTEM'"
        :items="this.yesterday"
        :type="'transducer'"
      />
      <q-separator spaced inset class="bar" v-if="beforeYesterday.length > 0"/>
      <simple-list
        v-if="beforeYesterday.length > 0"
        :title="'ANTEONTEM'"
        :items="this.beforeYesterday"
        :type="'transducer'"
      />
      <p
        v-if="today.length === 0 && yesterday.length === 0 && beforeYesterday.length === 0"
      >Não houve ocorrências</p>
    </div>
  </div>
</template>
<script>
import pageHeader from '../components/pageHeader.vue'
import simpleList from '../components/simpleList.vue'
import 'leaflet/dist/leaflet.css'
import Vue2Leaflet from '../services/ssr-import/leaflet'
import transducerAlert from '../components/transducerAlert'
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
    'l-popup': Vue2Leaflet.LPopup,
    transducerAlert: transducerAlert
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
      seriousOccurrences: ['phase_drop', 'critical_tension'],
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
      .then(res => {
        // console.log(res.data)
        this.name = res.data.name
        this.name = res.data.name
        this.center[0] = res.data.geolocation_latitude ? res.data.geolocation_latitude : '1'
        this.center[1] = res.data.geolocation_longitude ? res.data.geolocation_longitude : '1'
      })
      .catch(err => {
        console.log(err)
      })
    await MASTER.get('/realtime-measurements/?serial_number=' + id)
      .then(res => {
        this.tension = {
          a: Math.round(res.data[0].voltage_a),
          b: Math.round(res.data[0].voltage_b),
          c: Math.round(res.data[0].voltage_c)
        }
        this.current = {
          a: Math.round(res.data[0].current_a),
          b: Math.round(res.data[0].current_b),
          c: Math.round(res.data[0].current_c)
        }
        this.power = {
          a: Math.round(res.data[0].total_active_power),
          r: Math.round(res.data[0].total_reactive_power),
          t: Math.round(res.data[0].total_power_factor)
        }
        this.lastReading = this.getTime(res.data.collection_time)
        this.hasMeasurements = true
      })
      .catch(err => {
        console.log(err)
      })
    await MASTER.get('/occurences/?type=period&serial_number=' + id)
      .then(async res => {
        await separateInDays(
          res.data.critical_tension,
          'critical_tension',
          this.today,
          this.yesterday,
          this.beforeYesterday,
          this.occurrences
        )
        await separateInDays(
          res.data.precarious_tension,
          'precarious_tension',
          this.today,
          this.yesterday,
          this.beforeYesterday,
          this.occurrences
        )
        await separateInDays(
          res.data.phase_drop,
          'phase_drop',
          this.today,
          this.yesterday,
          this.beforeYesterday,
          this.occurrences
        )
        await separateInDays(
          res.data.transductor_connection_fail,
          'conection_fail',
          this.today,
          this.yesterday,
          this.beforeYesterday,
          this.occurrences
        )
        await separateInDays(
          res.data.slave_connection_fail,
          'conection_fail',
          this.today,
          this.yesterday,
          this.beforeYesterday,
          this.occurrences
        )
      })
      .catch(err => {
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
<style lang= "scss" scoped>
.lastReading {
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
}
.readings {
  width: 100%;
  text-align: start;
}
.readings th {
  text-align: start;
  height: 16px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 2px;
  color: $primary;
}
.readings td {
  padding-left: 3%;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.87);
}
.map {
  border-radius: 5px;
  margin: 5vh 0 5vh 0;
}
.occurence-time {
  font-weight: 100px;
}
.history {
  margin-top: 3%;
  font-family: Roboto;
  font-size: 2.7vh;
  line-height: 1.5;
  letter-spacing: 0.15px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
}
.bar {
  height: 1px;
  margin: 0 0;
  width: 100%;
}
</style>
