<template>
  <q-list :class="{ 'q-ml-lg': type == 'occurence'}">
    <div v-for="item in items" v-bind:key="item.id + item.transductor + item.start_time">
      <q-item :to="'/transducer/' + item.transductor" class="q-my-sm">
        <q-item-section>
          <q-item-label class="title-1">{{item.location}} ({{item.campus}})</q-item-label>
          <q-item-label caption class="subtitle-1">{{showInfo(item)}}</q-item-label>
        </q-item-section>
        <q-item-section side top class="label-container">
          <q-item-label caption class="label-1">{{showTime(item)}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset />
    </div>
  </q-list>
</template>

<script>
import getInfo from '../utils/info'
import timePassed from '../utils/timePassed'

export default {
  name: 'OccurenceItem',
  props: {
    /* eslint-disable */
    items: {
      type: Array,
      default: []
    },
    type: {
      type: String,
      default: ""
    },
    /* eslint-enable */
    info: {
      type: String,
      default: ''
    }
  },
  methods: {
    showTime (item) {
      return timePassed(item.start_time)
    },
    showInfo (item) {
      return getInfo(item, this.info)
    }
  }
}
</script>

 <style lang="scss" scoped>
.title-1 {
  font-family: Roboto;
  font-size: 3vh;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: $dark;
  margin-bottom: 5%;
}

.subtitle-1 {
  font-family: Roboto;
  font-size: 2.5vh;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
}

.label-1 {
  font-family: Roboto;
  font-size: 2vh;
  line-height: 1.33;
  letter-spacing: 0.4px;
  text-align: right;
  color: $dark;
}

.label-container {
  padding-left: 0px;
}
</style>
