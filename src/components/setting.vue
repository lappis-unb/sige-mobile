<template>
      <q-list class="q-mt-md">
        <q-item tag="label" class="container" v-ripple>
          <q-item-section>
            <q-item-label class="text">Notificações</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle color="positive" v-model="permission" val="Serious occurrences"  size="md"/>
          </q-item-section>
        </q-item>
      <q-separator spaced inset class="bar" />
        <q-item tag="label" class="container" to="/about" v-ripple>
          <q-item-section >
            <q-item-label class="text">Sobre o app</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" class="icon"/>
          </q-item-section>
        </q-item>
      </q-list>
</template>

<script>

export default {
  name: 'Setting',
  components: {
  },
  props: {},
  data () {
    return {
      permission: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ntitle {
  color: #777777;
}
.bar {
  height: 2px;
  margin: 0 0;
  width: 100%;
}
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.icon {
  margin-right: 15%;
  opacity: 50%;
}
</style>
