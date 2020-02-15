<template>
  <div>
    <page-header :backButton="true" :title="'Sobre o app'" />
    <div class="container">
      <q-icon class="img-main q-mb-lg" name="img:statics/logo_smi_vertical.svg" />
      <div class="subtitle">Projeto de Eficiência Energética CEB/FUB/FINATEC:</div>
      <div class="caption q-mb-xl">Eficiência energética em prédios públicos da Universidade de Brasília</div>
        <q-icon class="img q-mb-xl" name="img:statics/logo_unb.svg" />
        <q-icon class="img q-mb-xl" name="img:statics/logo_ceb.svg" />
        <q-icon class="img q-mb-xl" name="img:statics/logo_aneel.svg" />
        <q-icon class="img q-mb-xl" name="img:statics/logo_finatec@4x.png" style="width: 65%"/>
        <q-separator inset class="bar q-mb-lg" />
        <div class="version">App v 1.0</div>
        <div class="subtitle-2 q-mb-lg">Criação:</div>
        <q-icon class="img q-mb-xl" name="img:statics/logo_lappis.svg" style="width: 65%"/>
    </div>
  </div>
</template>

<script>
import pageHeader from "../components/pageHeader.vue";

export default {
  components: {
    pageHeader: pageHeader
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.img {
  height: 100%;
  width: 50%;
}
.img-main {
  height: 100%;
  width: 70%;
}
.subtitle {
  width: 248px;
  height: 48px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  text-align: center;
  color: $primary;
}
.caption {
  width: 251px;
  height: 32px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.4px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
}
.bar {
  height: 2px;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
}
.version {
  width: 69px;
  height: 24px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  text-align: center;
  color: $primary;
}
.subtitle-2 {
  width: 48px;
  height: 16px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.4px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
}
</style>