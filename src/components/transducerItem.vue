<template>
  <q-list>
    <div v-for="item in items" v-bind:key="item.id">
      <q-item to="/transducer">
        <q-item-section>
          <q-item-label class="text">{{item.type}}</q-item-label>
          <q-item-label class="text">{{item.info}}</q-item-label>
          <q-item-label caption>De {{item.startTime}} às {{item.endTime}}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </q-list>
</template>

<script>
export default {
  name: "HistoryItem",
  props: {
    items: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss">
.text{
    color: black;
}
</style>
