<template>
  <q-list>
    <div v-for="item in items" v-bind:key="item.id">
      <q-item to="/transducer">
        <q-item-section side>
          <q-icon size="xs" class="text-grey" :name="getIcon()" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text">{{item.type}}</q-item-label>
          <q-item-label caption class="caption">{{item.info}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption class="caption-top">{{item.startTime}} - {{item.endTime}}</q-item-label>
        </q-item-section>

      </q-item>
    </div>
  </q-list>
</template>

<script>
export default {
  name: "TrasnducerItem",
  props: {
    /* eslint-disable */
    items: {
      type: Array,
      default: []
    },
    icon: {
      type: String,
      default: "warning"
    }
    /* eslint-enable */
  },

  methods: {
    getIcon() {
      return this.icon;
    }
  }
};
</script>

<style lang="scss">
.text {
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
}
.caption {
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
}
.caption-top {
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.4px;
  text-align: right;
  color: rgba(0, 0, 0, 0.87);
}
</style>
