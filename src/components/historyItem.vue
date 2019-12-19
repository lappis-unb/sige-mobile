<template>
  <q-list>
    <div v-for="item in items" v-bind:key="item.id">
      <q-item>
        <q-item-section>
          <q-item-label>{{item.occurence}}</q-item-label>
          <q-item-label caption>{{item.name}} ({{item.sigla}})</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{item.initialHour}} - {{item.finalHour}}</q-item-label>
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
