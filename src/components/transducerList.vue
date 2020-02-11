<template>
  <div>
    <div class="q-gutter-md" v-if="!loading">
      <!-- <simple-list :title="'PERTO DE VOCÊ'" :items="nearby" :list="true" />
      <q-separator spaced inset style="height: 2px;" /> -->
      <simple-list :title="'TODOS'" :items="filterTransducers()" :list="true" />
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
      transducers: [],
      campi: [],
      loading: true
    }
  },
  async created () {
    await MASTER.get('/campi/')
      .then((res) => {
        this.campi = res.data
      })
      .catch((err) => {
        console.log('ERROR: ', err)
      })

    await MASTER.get('/energy-transductors/')
      .then((res) => {
        console.log('Transducer list:', res.data)
        res.data.forEach((i) => {
          this.transducers.push(this.addCampus(i))
        })
      })
      .catch((err) => {
        console.log('ERROR: ', err)
      })
    this.loading = false
  },
  methods: {
    addCampus (item, campi) {
      let id = parseInt(item.campus.split('/')[4], 10)
      return {
        ...item,
        campus_id: id,
        campus_acronym: this.campi.find((x) => x.id === id).acronym
      }
    },

    filterTransducers () {
      let arr = this.transducers
      let campus = this.$store.state.campus
      let transducers = []
      console.log('AKI ==>', arr)
      arr.forEach((elem) => {
        if (campus.id === null || elem.campus_id === campus.id) {
          transducers.push(elem)
        }
      })
      return transducers
    }
  }
}
</script>

<style lang="scss">
.ListTitle {
  color: #777777;
}
</style>
