<template>
    <q-header elevated>
      <q-toolbar class="title">
        <q-toolbar-title>
            {{!this.isDropdown? this.title : null}}
            <q-btn class="float-right" flat v-if="this.last72h" icon="history"/>
            <q-btn-dropdown class="drop" flat no-caps v-if="this.isDropdown" :label="selected">
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>item</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
</template>
<script>
export default {
    name: "header",
    props: {
        title:{
            type: String,
            default: "bla"
        },
        last72h: {
            type: Boolean,
            default: false
        },
        isDropdown: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            selected: 'Todos os campi'
        }
    },
      methods: {
    onItemClick () {
      console.log('Clicked on an Item')
    }
  }
}
</script>

<style lang="scss">
.title{
    background: white;
    color: #000000;
}
.drop{
  font-size: 90%;
}
</style>