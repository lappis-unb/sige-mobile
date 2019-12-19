<template>
  <q-list>
    <div v-for="item in items" v-bind:key="item.id">
      <q-item>
        <q-item-section>
          <q-item-label>{{item.name}} ({{item.sigla}})</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-icon v-if="item.icon" size="xs" :name="item.icon" />
        </q-item-section>
      </q-item>
    </div>
  </q-list>
</template>

<script>
export default {
  name: "ItemList",
  props: {
    items: {
      type: Array,
      default: []
    }
  }
};
</script>