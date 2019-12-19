<template>
  <q-list>
    <div v-for="item in items" v-bind:key="item.id">
      <q-item>
        <q-item-section>
          <q-item-label>{{item.name}} ({{item.sigla}})</q-item-label>
          <q-item-label caption>{{item.obs}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{item.time}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset />
    </div>
  </q-list>
</template>

<script>
export default {
  name: "OccurenceItem",
  props: {
    items: {
      type: Array,
      default: []
    }
  }
};
</script>
