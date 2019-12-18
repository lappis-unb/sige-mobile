
<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-gutter-y-md q-mt-lg">
      <q-tab-panels v-model="tab">
        <q-tab-panel name="occurences">
          <occurences />
        </q-tab-panel>

        <q-tab-panel name="meters">
          <transducer-list :title="'PERTO DE VOCÊ'" />
        </q-tab-panel>

        <q-tab-panel name="settings">
          <setting />
        </q-tab-panel>
      </q-tab-panels>

      <q-footer class="q-pa-xs toolbar">
        <q-tabs
          v-model="tab"
          indicator-color="transparent"
          active-color="black"
          class="text-teal row"
        >
          <q-tab
            clickable
            name="occurences"
            icon="warning"
            class="text col"
            href="/"
            exact
          >Ocorrências</q-tab>
          <q-tab
            clickable
            name="meters"
            icon="list"
            class="text col"
            href="/medidores"
            exact
          >Medidores</q-tab>
          <q-tab
            clickable
            name="settings"
            icon="settings"
            class="text col"
            href="/configuracoes"
            exact
          >Configurações</q-tab>
        </q-tabs>
      </q-footer>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { colors } from "quasar";
import pageHeader from "../components/header.vue";
import occurences from "../components/occurences.vue";
import transducerList from "../components/transducerList.vue";
import setting from "../components/setting.vue";

colors.setBrand("black", "#000000");
colors.setBrand("red", "#4B4B4B");

export default {
  name: "MyLayout",

  components: {
    pageHeader: pageHeader,
    occurences: occurences,
    transducerList: transducerList,
    setting: setting
  },

  data() {
    return {
      tab: "occurences"
    };
  },
  methods: {}
};
</script>

<style lang = "scss">
.toolbar {
  background: #7f7f7f;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.text {
  width: 30%;
  font-size: 90%;
  color: #4b4b4b;
}
</style>
