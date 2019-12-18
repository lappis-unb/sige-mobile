<template>
  <div v-if="items">
    <div class="content q-mb-xs">
      <q-card class="card-title q-mb-sm" v-if="!list">
        <q-icon :name="getIcon()" />
        {{this.title}}
      </q-card>
      <q-list>
        <div v-for="item in items" v-bind:key="item.id">
          <q-item>
            <q-item-section>
              <q-item-label>{{item.name}} ({{item.sigla}})</q-item-label>
              <q-item-label v-if="!list" caption>{{item.obs}}</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label v-if="!list" caption>{{item.time}}</q-item-label>
              <q-icon v-else-if="item.icon" size="xs" :name="item.icon" />
            </q-item-section>
          </q-item>
          <q-separator v-if="!list" spaced inset />
        </div>
        
      </q-list>
    </div>
  </div>
</template>
<script>
export default {
  name: "OccurencesList",
  props: {
    icon: {
      type: String,
      default: "warning"
    },
    title: {
      type: String
    },
    items: {
      type: Array,
      default: []
    },
    list: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getIcon() {
      return this.icon;
    }
  }
};
</script>
<style lang="scss">
.content {
  margin-top: 10%;
}
.card-title {
  font-size: 150%;
  background: #e8e8e8;
  padding: 5%;
}
</style>