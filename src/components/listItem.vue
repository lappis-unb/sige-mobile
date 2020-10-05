<template>
  <q-list>
    <div v-for="item in items" v-bind:key="item.id">
      <q-item :to="'/transducer/' + item.id" class="container">
        <q-item-section>
          <q-item-label class="text">{{item.name}} ({{item.campus_acronym}})</q-item-label>
        </q-item-section>

        <q-item-section avatar class="icons">
          <q-icon v-if="item.serious_occurence" size="sm" name="img:statics/ic_ocorrencia_critica_mono_grey.svg" />
          <q-icon v-if="item.light_occurence" size="sm" name="img:statics/ic_ocorrencia_precaria_mono.svg" />
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

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 0;
}

.text {
  width: 288px;
  height: 28px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: 0.5px;
  color: rgba(0, 0, 0, 0.87);
}

.icons {
  flex-direction: row;
}
</style>
