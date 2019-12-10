<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-pa-md toolbar">
        <q-tabs 
          v-model="tab"
          indicator-color="transparent"
          active-color="black"
          class="text-teal"
        >
          <q-tab clickable name="mails" icon="warning" class="text" href="/" exact>Ocorrências</q-tab>
          <q-tab clickable name="alarms" icon="list"  class="text" href="/medidores" exact>Medidores</q-tab>
          <q-tab clickable name="movies" icon="settings" class="text" href="/configuracoes" exact>Configurações</q-tab>
        </q-tabs>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { colors } from 'quasar'

colors.setBrand('black', '#000000')
colors.setBrand('red', '#4B4B4B')

export default {
  
  name: "MyLayout",

  data() {
    return {
      tab: "mails"
    };
  }
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

.text{
  width: 30%;
  font-size: 90%;
  color: #4b4b4b;
}
  
</style>
