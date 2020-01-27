<template>
  <q-list>
    <div v-for="item in items" v-bind:key="item.id">
      <q-item to="/transducer">
        <q-item-section>
          <q-item-label>{{item.location}} ({{item.campus}})</q-item-label>
          <q-item-label caption>{{item.obs}}</q-item-label>
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
    }
    /* eslint-enable */
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
    }
  }
}
</script>
