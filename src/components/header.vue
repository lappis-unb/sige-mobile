<template>
  <q-header class="shadow-3 q-mb-xl">
    <q-toolbar class="title">
      <q-icon v-go-back=" '/' " v-if="lastHours" size="lg" name="keyboard_backspace" />
      <q-toolbar-title>
        {{!this.isDropdown? this.title : null}}
        <q-btn-dropdown class="drop" flat no-caps v-if="this.isDropdown" :label="selected">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>item</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar-title>
      <q-btn to="/lastHours" exact class="float-right" flat v-if="this.last72h" icon="history" />
    </q-toolbar>
  </q-header>
</template>
<script>
export default {
  name: "header",
  props: {
    title: {
      type: String,
      default: ""
    },
    last72h: {
      type: Boolean,
      default: false
    },
    isDropdown: {
      type: Boolean,
      default: false
    },
    lastHours: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selected: "Todos os campi"
    };
  },
  methods: {
    onItemClick() {
      console.log("Clicked on an Item");
    }
  }
};
</script>

<style lang="scss">
.title {
  background: white;
  color: #000000;
}
.drop {
  font-size: 90%;
}
</style>