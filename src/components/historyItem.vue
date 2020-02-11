<template>
  <q-list>
    <div v-for="item in items" v-bind:key="item.id">
      <q-item to="/transducer">
        <q-item-section>
          <q-item-label>{{item.occurence}}</q-item-label>
          <q-item-label caption>{{item.location}} ({{item.campus}})</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{item.writtenTime}}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </q-list>
</template>

<script>
export default {
  name: 'HistoryItem',
  props: {
    /* eslint-disable */
    items: {
      type: Array,
      default: []
    }
    /* eslint-enable */
  }
}
</script>
