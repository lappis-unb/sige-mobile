<template>
  <div>
    <q-spinner v-if="isLoading" size="3em" class="spinner"/>
    <main-list
      v-if="critical_tension.length > 0"
      :title="'Tensão crítica'"
      :items="critical_tension"
      :type="'occurence'"
      :info="'critical_tension'"
      icon="error"
    />
    <main-list
      v-if="phase_drop.length > 0"
      :title="'Queda de tensão'"
      :items="phase_drop"
      :type="'occurence'"
      :info="'phase_drop'"
      icon="error"
    />
    <main-list
      v-if="transductor_connection_fail.length > 0"
      :title="'Falha de comunicação'"
      :items="transductor_connection_fail"
      :type="'occurence'"
      :info="'conection_fail'"
      icon="warning"
    />
    <main-list
      v-if="precarious_tension.length > 0"
      :title="'Tensão precária'"
      :items="precarious_tension"
      :type="'occurence'"
      :info="'precarious_tension'"
      icon="warning"

    />

    <div v-if="!isLoading &&
                transductor_connection_fail.length === 0 &&
                critical_tension.length === 0 &&
                precarious_tension.length === 0 &&
                phase_drop.length === 0">
      <p>Não há nenhuma ocorrência em andamento</p>
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
      transductor_connection_fail: [],
      critical_tension: [],
      precarious_tension: [],
      phase_drop: [],
      isLoading: true
    }
  },
  created () {
    console.log('fetching data...')
    MASTER.get('occurences/')
      .then((res) => {
        this.transductor_connection_fail = res.data.transductor_connection_fail
        this.critical_tension = res.data.critical_tension
        this.precarious_tension = res.data.precarious_tension
        this.phase_drop = res.data.phase_drop
        this.isLoading = false
      })
      .catch((err) => {
        console.log('ERROR: ', err)
      })
  }
}
</script>

<style lang="scss">
.spinner{
  display: flex;
  flex: center;
  margin: 0 auto;
}

</style>
