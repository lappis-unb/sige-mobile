<template>
  <q-list>
    <div v-for="item in items" v-bind:key="item.key">
      <q-item to="/transducer" class="container">
        <q-item-section>
          <q-item-label>{{item.occurence}}</q-item-label>
          <q-item-label caption>{{item.location}} ({{item.campus}})</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{item.writtenStartTime}} - {{item.writtenEndTime}}</q-item-label>
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

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 0;
  }
</style>