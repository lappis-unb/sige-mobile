<template>
  <div class="container">
    <q-spinner v-if="isLoading" size="3em" class="spinner" />
    <div
      v-else-if="transductor_connection_fail.length === 0 &&
                critical_tension.length === 0 &&
                precarious_tension.length === 0 &&
                phase_drop.length === 0"
    >
      <p >Não há nenhuma ocorrência em andamento</p>
    </div>
    <div v-else>
      <main-list
        v-if="critical_tension.length > 0"
        :title="'Tensão crítica'"
        :items="critical_tension"
        :type="'occurence'"
        :info="'critical_tension'"
        :icon="serious_icon"
        :serious="true"
      />
      <main-list
        v-if="phase_drop.length > 0"
        :title="'Queda de fase'"
        :items="phase_drop"
        :type="'occurence'"
        :info="'phase_drop'"
        :icon="serious_icon"
        :serious="true"
      />
      <main-list
        v-if="transductor_connection_fail.length > 0"
        :title="'Falha de comunicação'"
        :items="transductor_connection_fail"
        :type="'occurence'"
        :info="'conection_fail'"
        :icon="light_icon"
        :serious="false"
      />
      <main-list
        v-if="precarious_tension.length > 0"
        :title="'Tensão precária'"
        :items="precarious_tension"
        :type="'occurence'"
        :info="'precarious_tension'"
        :icon="light_icon"
        :serious="false"
      />
    </div>
  </div>
</template>
<script>
import mainList from '../components/mainList.vue'
import MASTER from '../services/masterApi/http-common'

export default {
  name: 'Occurences',
  components: {
    mainList: mainList
  },
  data () {
    return {
      serious_icon: 'img:statics/header_ocorrencia_critica_horizontal@4x.png',
      light_icon: 'img:statics/header_ocorrencia_precaria_horizontal@4x.png',
      transductor_connection_fail: [],
      critical_tension: [],
      precarious_tension: [],
      phase_drop: [],
      isLoading: true
    }
  },
  created () {
    MASTER.get('occurences/')
      .then(res => {
        this.transductor_connection_fail = res.data.transductor_connection_fail
        this.critical_tension = res.data.critical_tension
        this.precarious_tension = res.data.precarious_tension
        this.phase_drop = res.data.phase_drop
        res.data.slave_connection_fail.forEach((elem) => {
          if (this.transductor_connection_fail.find(x => x.transductor === elem.transductor) === undefined) {
            this.transductor_connection_fail.push(elem)
          }
        })
        this.isLoading = false
      })
      .catch(err => {
        console.log('ERROR: ', err)
      })
  }
}
</script>

<style lang="scss" scoped>
.spinner {
  display: flex;
  flex: center;
  margin: 0 auto;
}
.container {
  height: 80vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
