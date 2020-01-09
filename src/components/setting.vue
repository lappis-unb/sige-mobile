<template>
  <div>
    <page-header :title="'Configurações'" />
    <div class="ntitle q-mt-xs h1">NOTIFICAÇÔES</div>
    <div class="q-gutter-sm">
      <q-list>
        <q-item tag="label" class="q-gutter-x-xs" v-ripple>
          <q-item-section>
            <q-item-label class="text-subtitle1">Ocorrências graves</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle color="secondary" v-model="permissions" val="Serious occurrences" />
          </q-item-section>
        </q-item>
        <q-item tag="label" class="q-gutter-x-xs" v-ripple>
          <q-item-section>
            <q-item-label class="text-subtitle1">Ocorrências leves</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle color="secondary" v-model="permissions" val="Mild Occurrences" />
          </q-item-section>
        </q-item>
      </q-list>

      <q-separator spaced inset style="height: 2px;" />

      <q-list>
        <q-item tag="label" class="q-gutter-x-xs" v-ripple>
          <q-item-section>
            <q-item-label class="text-subtitle1">Ceilândia</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle color="secondary" v-model="campus" val="Ceilândia" />
          </q-item-section>
        </q-item>
        <q-item tag="label" class="q-gutter-x-xs" v-ripple>
          <q-item-section>
            <q-item-label class="text-subtitle1">Darcy Ribeiro A</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle color="secondary" v-model="campus" val="Darcy Ribeiro A" />
          </q-item-section>
        </q-item>
        <q-item tag="label" class="q-gutter-x-xs" v-ripple>
          <q-item-section>
            <q-item-label class="text-subtitle1">Darcy Ribeiro B</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle color="secondary" v-model="campus" val="Darcy Ribeiro B" />
          </q-item-section>
        </q-item>
        <q-item tag="label" class="q-gutter-x-xs" v-ripple>
          <q-item-section>
            <q-item-label class="text-subtitle1">Darcy Ribeiro C</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle color="secondary" v-model="campus" val="Darcy Ribeiro C" />
          </q-item-section>
        </q-item>
        <q-item tag="label" class="q-gutter-x-xs" v-ripple>
          <q-item-section>
            <q-item-label class="text-subtitle1">Darcy Ribeiro D</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle color="secondary" v-model="campus" val="Darcy Ribeiro D" />
          </q-item-section>
        </q-item>
        <q-item tag="label" class="q-gutter-x-xs" v-ripple>
          <q-item-section>
            <q-item-label class="text-subtitle1">Gama</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle color="secondary" v-model="campus" val="Gama" />
          </q-item-section>
        </q-item>

        <q-item tag="label" class="q-gutter-x-xs" v-ripple>
          <q-item-section>
            <q-item-label class="text-subtitle1">Planaltina</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle color="secondary" v-model="campus" val="Planaltina" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import pageHeader from '../components/pageHeader.vue'

export default {
  name: 'Setting',
  components: {
    pageHeader: pageHeader
  },
  props: {},
  data () {
    return {
      permissions: [],
      campus: []
    }
  }
}
</script>

<style lang="scss">
.ntitle {
  color: #777777;
}
</style>
