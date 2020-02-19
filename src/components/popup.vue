<template>
  <q-dialog v-model="open" >
    <q-card>
      <q-card-section>
        <div class="text-h6">Atenção</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Para utilizar o serviço de notificação é necessário baixar o aplicativo na App Store.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Ir para App Store" color="primary" @click.native="link" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'popup',
  data () {
    return {
      open: this.$q.platform.is.platform === 'iphone' || this.$q.platform.is.platform === 'ipad'
    }
  },
  methods: {
    link () {
      // The link has to be changed when we publish the app on App Store
      openURL('https://apps.apple.com/br/app/instagram/id389801252')
    }
  }
}
</script>
