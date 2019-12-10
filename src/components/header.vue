<template>
    <q-header elevated>
      <q-toolbar class="title">
        <q-toolbar-title>
            {{this.title}}
            <q-btn class="float-right" flat v-if="this.last72h" icon="history"/>
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
        }
    },
}
</script>

<style lang="scss">
.title{
    background: white;
    color: #000000;
}
</style>