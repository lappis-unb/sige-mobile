<template>
  <q-list>
    <div v-for="item in items" v-bind:key="item.id">
      <q-item to="/transducer">
        <q-item-section>
          <q-item-label>{{item.location}} ({{item.campus}})</q-item-label>
          <q-item-label caption>{{getInfo(item)}}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>{{writenTime(item.time)}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset />
    </div>
  </q-list>
</template>

<script>
export default {
  name: 'OccurenceItem',
  props: {
    /* eslint-disable */
    items: {
      type: Array,
      default: []
    },
    /* eslint-enable */
    info: {
      type: String,
      default: ""
    },
  },
  methods: {
    writenTime(min){
      if(min < 60){
        return min + " min";
      }else{
        let h = Math.floor(min / 60);
        let m = min % 60;
        if(m == 0){
          return h + " horas";
        }else{
          return h + "h " + m + "min";
        }
      }
    },
    getInfo(item){
      if(this.info == 'conection_fail'){
        return 'Possível queda de energia'
      }else if (this.info == 'critical_tension' || 
                this.info == 'precarious_tension'){
        return this.getPhaseVoltage(item);
      }else if(this.info == 'phase_drop'){
        return this.getPhase(item);
      }
    },
    getPhaseVoltage(item){
      let res = "";
      let isFirst = true;

      if(item.data.voltage_a){
        res += 'A - ' +  Math.round(item.data.voltage_a) + 'V ';
        isFirst = false;
      }
      if(item.data.voltage_b){
        if(!isFirst){
          res += ' / '
        }
        res += 'B - ' + Math.round(item.data.voltage_b) + 'V ';
        isFirst = false;
      }
      if(item.data.voltage_c){
        if(!isFirst){
          res += ' / '
        }
        res += 'C - ' + Math.round(item.data.voltage_c) + 'V ';
        isFirst = false;
      }
      return res
    },
    getPhase(item){
      let res = "";
      let isFirst = true;

      if(item.data.voltage_a){
        res += 'Fase A ';
        isFirst = false;
      }
      if(item.data.voltage_b){
        if(!isFirst){
          res += ' / '
        }
        res += 'Fase B ';
        isFirst = false;
      }
      if(item.data.voltage_c){
        if(!isFirst){
          res += ' / '
        }
        res += 'Fase C ';
        isFirst = false;
      }
      return res
    }
  }
}
</script>
