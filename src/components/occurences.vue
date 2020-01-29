<template>
  <div>
    <main-list
      v-if="transductor_connection_fail.length > 0"
      :title="'Falha de comunicação'"
      :items="transductor_connection_fail"
      :type="'occurence'"
      :info="'conection_fail'"
    />
    <main-list
      v-if="critical_tension.length > 0"
      :title="'Tensão crítica'"
      :items="critical_tension"
      :type="'occurence'"
      :info="'critical_tension'"
    />
    <main-list
      v-if="precarious_tension.length > 0"
      :title="'Tensão precária'"
      :items="precarious_tension"
      :type="'occurence'"
      :info="'precarious_tension'"
    />
    <main-list
      v-if="phase_drop.length > 0"
      :title="'Queda de tensão'"
      :items="phase_drop"
      :type="'occurence'"
      :info="'phase_drop'"
    />

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
    }
  },
  created(){    
    MASTER.get('occurences/')
    .then((res) => {
      this.transductor_connection_fail = res.data.transductor_connection_fail
      this.critical_tension = res.data.critical_tension
      this.precarious_tension = res.data.precarious_tension
      this.phase_drop = res.data.phase_drop
    })  
    .catch((err) => {
      console.log('ERRO: ',err);
    })  
  }
}
</script>
