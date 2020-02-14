<template>
  <q-list :class="{ 'q-ml-lg': type == 'occurence'}">
    <div v-for="item in items" v-bind:key="item.id">
      <q-item to="/transducer" class="q-my-sm">
        <q-item-section>
          <q-item-label class="title-1">{{item.location}} ({{item.campus}})</q-item-label>
          <q-item-label caption class="subtitle-1">{{getInfo(item)}}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption class="label-1">{{writenTime(item.start_time)}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset />
    </div>
  </q-list>
</template>

<script>
export default {
  name: "OccurenceItem",
  props: {
    /* eslint-disable */
    items: {
      type: Array,
      default: []
    },
    type: {
      type: String,
      default: ""
    },
    /* eslint-enable */
    info: {
      type: String,
      default: ""
    },
  },
  methods: {
    writenTime(time) {
      let d = new Date(time);
      let now = new Date();
      let min = Math.floor((now - d) / (1000 * 60));

      if (min < 60) {
        return min + " min";
      } else {
        let h = Math.floor(min / 60);
        let m = min % 60;
        if (m === 0) {
          return h + " horas";
        } else {
          return h + "h " + m + "min";
        }
      }
    },
    getInfo(item) {
      if (this.info === "conection_fail") {
        return "Possível queda de energia";
      } else if (
        this.info === "critical_tension" ||
        this.info === "precarious_tension"
      ) {
        return this.getPhaseVoltage(item);
        console.log("aaaaaa");
        
      } else if (this.info === "phase_drop") {
        return this.getPhase(item);
      }
    },
    getPhaseVoltage(item) {
      let res = "";
      let isFirst = true;

      if (item.data.voltage_a) {
        res += "A - " + Math.round(item.data.voltage_a) + "V ";
        isFirst = false;
      }
      if (item.data.voltage_b) {
        if (!isFirst) {
          res += " / ";
        }
        res += "B - " + Math.round(item.data.voltage_b) + "V ";
        isFirst = false;
      }
      if (item.data.voltage_c) {
        if (!isFirst) {
          res += " / ";
        }
        res += "C - " + Math.round(item.data.voltage_c) + "V ";
        isFirst = false;
      }
      return res;
    },
    getPhase(item) {
      let res = "";
      let isFirst = true;

      if (item.data.voltage_a) {
        res += "Fase A ";
        isFirst = false;
      }
      if (item.data.voltage_b) {
        if (!isFirst) {
          res += " / ";
        }
        res += "Fase B ";
        isFirst = false;
      }
      if (item.data.voltage_c) {
        if (!isFirst) {
          res += " / ";
        }
        res += "Fase C ";
        isFirst = false;
      }
      return res;
    }
  }
};
</script>

 <style lang="scss" scoped>
.title-1 {
  width: 205px;
  height: 24px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 10%;
}

.subtitle-1 {
  width: 290px;
  height: 20px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
}

.label-1 {
  width: 78px;
  height: 16px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.4px;
  text-align: right;
  color: rgba(0, 0, 0, 0.87);
}
</style>