<template>
  <div>
    <div v-if="!loading">
      <simple-list :title="'TODOS'" :items="filterTransducers()" :list="true" />
    </div>
  </div>
</template>

<script>
import simpleList from '../components/simpleList.vue'
import MASTER from '../services/masterApi/http-common'
import { mapGetters } from 'vuex'

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
      occurences: [],
      loading: true
    }
  },
  async created () {
    await MASTER.get('/occurences/')
      .then((res) => {
        this.occurences = res.data
      })
      .catch((err) => {
        console.log('ERROR: ', err)
      })

    await MASTER.get('/campi/')
      .then((res) => {
        this.campi = res.data
      })
      .catch((err) => {
        console.log('ERROR: ', err)
      })

    await MASTER.get('/energy-transductors/')
      .then((res) => {
        res.data.forEach(async (i) => {
          this.transducers.push(this.addInfos(i))
        })
      })
      .catch((err) => {
        console.log('ERROR: ', err)
      })
    this.loading = false
  },
  computed: {
    ...mapGetters('campusData', ['campus'])
  },
  methods: {
    addInfos (item) {
      let id = parseInt(item.campus.split('/')[4], 10)
      let occ = this.verfyOccurences(item)

      return {
        ...item,
        campus_id: id,
        campus_acronym: this.campi.find((x) => x.id === id).acronym,
        light_occurence: occ.light,
        serious_occurence: occ.serious
      }
    },

    verfyOccurences (transducer) {
      let id = transducer.id
      let occ = {
        serious: false,
        light: false
      }
      if (this.checkArr(this.occurences.transductor_connection_fail, id, occ.light) ||
          this.checkArr(this.occurences.slave_connection_fail, id, occ.light) ||
          this.checkArr(this.occurences.precarious_tension, id, occ.light)) {
        occ.light = true
      }

      if (this.checkArr(this.occurences.critical_tension, id, occ.serious) ||
          this.checkArr(this.occurences.phase_drop, id, occ.serious)) {
        occ.serious = true
      }

      return occ
    },

    checkArr (arr, id, occ) {
      let ans = false
      arr.forEach((elem) => {
        if (elem.transductor === id) {
          ans = true
        }
      })
      return ans
    },

    filterTransducers () {
      let arr = this.transducers
      let campus = this.campus
      let transducers = []
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

<style lang="scss" scoped>
.ListTitle {
  color: $grey;
}
.bar {
  height: 2px;
  margin: 0 0;
  width: 100%;
}
</style>
