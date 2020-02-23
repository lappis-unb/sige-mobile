<template>
  <q-list>
    <div v-for="item in items" v-bind:key="item.id + item.transductor + item.start_time">
      <q-item :to="'/transducer/' + item.transductor">
        <q-item-section side>
          <q-icon size="sm" class="text-grey" :name="getIcon(item.originalType)" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text">{{item.type}}</q-item-label>
          <q-item-label caption class="caption">{{item.info}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption class="caption-top">{{item.writtenStartTime}} - {{item.writtenEndTime}}</q-item-label>
        </q-item-section>

      </q-item>
    </div>
  </q-list>
</template>

<script>
export default {
  name: 'TrasnducerItem',
  data () {
    return {
      seriousOccurrences: ["phase_drop",  "critical_tension"],
      seriousIcon: 'img:statics/ic_ocorrencia_critica_color.svg',
      lightIcon: 'img:statics/ic_ocorrencia_precaria_mono.svg'
    }
  },
  props: {
    /* eslint-disable */
    items: {
      type: Array,
      default: []
    },
    icon: {
      type: String,
      default: "warning"
    }
    /* eslint-enable */
  },

  methods: {
    getIcon (type) {
      if(this.seriousOccurrences.includes(type)) {
        return this.seriousIcon
      } else {
        return this.lightIcon
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  width: 100%;
  font-family: Roboto;
  font-size: 2.7vh;
  line-height: 3.5vh !important;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
}
.caption {
  font-family: Roboto;
  font-size: 2.1vh;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
}
.caption-top {
  font-family: Roboto;
  font-size: 1.8vh;
  line-height: 1.33;
  letter-spacing: 0.4px;
  text-align: right;
  color: rgba(0, 0, 0, 0.87);
}
</style>
