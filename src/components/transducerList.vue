<template>
  <div>
    <div class="q-gutter-md">
      <!-- <simple-list :title="'PERTO DE VOCÊ'" :items="nearby" :list="true" />
      <q-separator spaced inset style="height: 2px;" /> -->
      <simple-list :title="'TODOS'" :items="transducers" :list="true" />
    </div>
  </div>
</template>

<script>
import simpleList from '../components/simpleList.vue'
import MASTER from '../services/masterApi/http-common'

export default {
  name: 'TransducerList',
  components: {
    simpleList: simpleList
  },
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      transducers: [
        // {
        //   name: 'ICC Norte m1',
        //   sigla: 'DRA',

        //   icon: 'warning',
        //   id: 1
        // },
        // {
        //   name: 'ICC Norte m2',
        //   sigla: 'DRA',

        //   id: 2
        // }
      ],
      campi: []
    }
  },
  async created () {
    await MASTER.get('/campi/')
      .then((res) => {
        console.log('Campi list:', res.data)
        this.campi = res.data
      })
      .catch((err) => {
        console.log('ERROR: ', err)
      })

    await MASTER.get('/energy-transductors/')
      .then((res) => {
        console.log('Transducer list:', res.data)
        res.data.forEach((i) => {
          this.transducers.push(this.mountTransducer(i))
        })
      })
      .catch((err) => {
        console.log('ERROR: ', err)
      })
  },
  methods: {
    mountTransducer (item) {
      let id = parseInt(item.campus.split('/')[4], 10)
      return {
        ...item,
        campus_id: id,
        campus_acronym: this.campi.find((x) => x.id === id).acronym
      }
    }
  }
}
</script>

<style lang="scss">
.ListTitle {
  color: #777777;
}
</style>
