<template>
    <div class="q-mt-xl q-pt-xs">
        <page-header :backButton="true" :title="name" />
            <div v-if="hasOcurrence()">
              <transducer-alert :occurrence="occurrence" :serious="true"/>
              <transducer-alert :occurrence="occurrence" :serious="false"/>
            </div>
        <div class="q-ma-md">
            <p class="lastReading">Última leitura: há {{lastReading}}.</p>
            <table align="center" class="readings">
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
              id="idDoLeo">
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              />
              <l-circle
                :lat-lng="markerLatLng"
                :radius="3"
                :fill-opacity="1"
              >
              <l-popup
                :content="'Transdutor'"
              />
              </l-circle>
            </l-map>

            <p class="history">Outras ocorrências nas últimas 72h:</p>
            <simple-list :title="'HOJE'" :items="this.today" :type="'transducer'" />
            <q-separator spaced inset class="bar" />
            <simple-list :title="'ONTEM'" :items="this.yesterday" :type="'transducer'" />
            <q-separator spaced inset class="bar" />
            <simple-list :title="'ANTEONTEM'" :items="this.beforeYesterday" :type="'transducer'" />

        </div>

    </div>
</template>
<script>
import pageHeader from '../components/pageHeader.vue'
import simpleList from '../components/simpleList.vue'
import 'leaflet/dist/leaflet.css'
import Vue2Leaflet from '../services/ssr-import/leaflet'
import transducerAlert from '../components/transducerAlert'

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
      name: 'Transdutor',
      lastReading: '2 min',
      tension: {
        a: 128,
        b: 220,
        c: 219
      },
      current: {
        a: 77,
        b: 78,
        c: 76
      },
      power: {
        a: 180,
        r: 36,
        t: 36
      },
      today: [
        {
          id: 1,
          type: 'Queda de fase',
          info: 'Fase A',
          startTime: '9h35',
          endTime: '9h47'
        }
      ],
      yesterday: [
        {
          id: 1,
          type: 'Queda de fase',
          info: 'Fase A',
          startTime: '17h03',
          endTime: '17h10'
        },
        {
          id: 2,
          type: 'Queda de fase',
          info: 'Fase A',
          startTime: '10h22',
          endTime: '10h28'
        }
      ],
      beforeYesterday: [
        {
          id: 1,
          type: 'Tensão crítica',
          info: 'A - 115V',
          startTime: '10h51',
          endTime: '10h55'
        }
      ],
      occurrence: {
        type: 'Queda de fase',
        info: 'A - 198 V',
        startTime: '16h47',
        endTime: '19h00'
      },

      // MAP info
      markerLatLng: [-15.9897, -48.0454],

      center: [-15.9897, -48.0454],
      // center: [-15.7650, -47.8665],

      mapOptions: {
        zoomControl: false,
        maxbounds: this.center
      },

      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:
        '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  },
  methods: {
    hasOcurrence () {
      return true
    }
  }
}
</script>
<style lang= "scss" scoped>
.lastReading{
    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.15px;
    text-align: center;
    color: rgba(0, 0, 0, 0.87);
}
.readings{
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
.map{
  border-radius: 5px;
  margin: 5vh 0 5vh 0;
}
.occurence-time{
    font-weight: 100px;
}
.history {
  margin-top: 3%;
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
}
.bar {
  height: 2px;
  margin: 0 0;
  width: 100%;
}
</style>
