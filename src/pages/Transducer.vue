<template>
    <div class="q-mt-xl q-pt-xs">
        <page-header :backButton="true" :title="name" />
            <div v-if="hasOcurrence()" class="occurence">
                <div class="occurence-warning">
                    <b>Ocorrência em andamento</b>
                </div>
                <div class="q-ma-md">
                    <div class="occurence-title">
                        <q-icon name="warning"/>
                        {{this.occurrence.type}}
                    </div>
                    <div class="occurence-title">
                        {{this.occurrence.info}}
                    </div>
                    <i class="occurence-time">Desde {{this.occurrence.startTime}}</i>
                </div>
                <q-separator spaced inset style="height: 1px;" />
            </div>
        <div class="q-ma-md">
            <p class="lastReading">Última leitura - há {{lastReading}}.</p>
            <table align="center" class="readings">
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
                :lat-lng="markerLatLng"
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
            <simple-list :title="'HOJE'" :items="this.today" :type="'transducer'" />
            <simple-list :title="'ONTEM'" :items="this.yesterday" :type="'transducer'" />
            <simple-list :title="'ANTEONTEM'" :items="this.beforeYesterday" :type="'transducer'" />

        </div>

    </div>
</template>
<script>
import pageHeader from '../components/pageHeader.vue'
import simpleList from '../components/simpleList.vue'
import 'leaflet/dist/leaflet.css'
import Vue2Leaflet from '../services/ssr-import/leaflet'

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
        type: 'Tensão crítica',
        info: 'A - 198 V',
        startTime: '16h47'
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
