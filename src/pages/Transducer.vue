<template>
    <div>
        <page-header :backButton="true" :title="name" />
        <div class="q-ma-md">
            <p class="lastReading">Última leitura - há {{lastReading}}.</p>
            <!-- <div class="row table">

                <div class="col">
                    <b clas="row">Corrente</b>
                </div>

                <div class="col">
                    <b clas="row">Potência</b>
                </div>
            </div>  -->
            <table align="center" class="table">
                <tr>
                    <th>Tensão</th>
                    <th>Corrente</th>
                    <th>Potência</th>
                </tr>
                <tr>
                    <td>A - {{tension.a}}V</td>
                    <td>A - {{current.a}}A</td>
                    <td>A - {{power.a}}W</td>

                </tr>
                <tr>
                    <td>B - {{tension.b}}V</td>
                    <td>B - {{current.b}}A</td>
                    <td>R - {{power.r}}kVAr</td>

                </tr>
                <tr>
                    <td>C - {{tension.c}}V</td>
                    <td>C - {{current.c}}A</td>
                    <td>T - {{power.t}}kVa</td>

                </tr>
            </table>
           

        </div>

    </div>
</template>
<script>
import pageHeader from '../components/pageHeader.vue';
export default {
    components:{
        pageHeader: pageHeader
    },
    props:{
        name: {
            type: String,
            default: 'Meu transdutor s2'
        },
        lastReading: {
            type: String,
            default: '2 min'
        }
    },
    data(){
        return{
            tension: {
                a: 128,
                b: 220,
                c: 219
            },
            current:{
                a: 77,
                b: 78,
                c: 76
            },
            power:{
                a: 180,
                r: 36,
                t:36
            }
        }
    }
}
</script>
<style lang= "scss">
.lastReading{
    text-align: center;
}
table{
    width: 100%;
    text-align: center;
}



</style>