<template>
  <div>
    <page-header :type="tab" />
    <q-tab-panels v-model="tab" class="q-mt-xl">
      <q-tab-panel name="occurences" class="q-pl-none">
        <occurences class="q-mb-xl"/>
      </q-tab-panel>

      <q-tab-panel name="meters">
        <transducer-list />
      </q-tab-panel>

      <q-tab-panel name="settings">
        <setting class="q-mb-xl"/>
      </q-tab-panel>
    </q-tab-panels>

    <q-footer class="q-pa-xs toolbar">
      <q-tabs
        v-model="tab"
        indicator-color="transparent"
        active-color="white"
        class="text-teal row"
      >
        <q-tab
          clickable
          name="occurences"
          icon="img:statics/ic_ocorrencia_critica_mono.svg"
          class="text col"
          :class="{'inactive' : tab != 'occurences'}"
          href="/"
          exact
        >Ocorrências</q-tab>
        <q-tab
          clickable
          name="meters"
          icon="img:statics/ic_medidores.svg"
          class="text col"
          :class="{'inactive' : tab != 'meters'}"
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
</template>

<script>
import pageHeader from '../components/pageHeader.vue'
import occurences from '../components/occurences.vue'
import transducerList from '../components/transducerList.vue'
import setting from '../components/setting.vue'

export default {
  name: 'PageIndex',

  components: {
    pageHeader: pageHeader,
    occurences: occurences,
    transducerList: transducerList,
    setting: setting
  },

  data () {
    return {
      tab: 'occurences'
    }
  }
}
</script>

<style lang = "scss">
.toolbar {
  display: flex;
  background: #00417e;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  justify-content: center;
}

.text {
  width: 30%;
  font-size: 90%;
  color: rgba(255, 255, 255, 0.54);
}

.inactive {
  opacity: 50%;
}

</style>
