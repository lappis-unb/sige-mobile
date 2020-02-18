<template>
  <q-list>
    <div v-for="item in items" v-bind:key="item.id">
      <q-item :to="'/transducer/' + item.transductor">
        <q-item-section>
          <q-item-label>{{item.name}} ({{item.campus_acronym}})</q-item-label>
        </q-item-section>

        <q-item-section side top class="icons">
          <q-icon v-if="item.serious_occurence" size="xs" name="error" />
          <q-icon v-if="item.light_occurence" size="xs" name="warning" />
        </q-item-section>
      </q-item>
    </div>
  </q-list>
</template>

<script>
export default {
  name: 'ItemList',
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
<style lang="scss">
.icons{
    display: flex;
    flex-direction: row;
}

</style>
