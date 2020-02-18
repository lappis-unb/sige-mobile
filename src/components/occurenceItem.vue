<template>
  <q-list>
    <div v-for="item in items" v-bind:key="item.id">
      <q-item :to="'/transducer/' + item.transductor">
        <q-item-section>
          <q-item-label>{{item.location}} ({{item.campus}})</q-item-label>
          <q-item-label caption>{{showInfo(item)}}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>{{showTime(item)}}</q-item-label>
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
