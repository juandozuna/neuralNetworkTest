<template>
    <div>
        <div class="wrapper">
            <a href="" @click="goBack()">Back</a>
            <h1>This is where the MNIST magic will happen</h1>
        </div>
        <div class="numbers" v-show="evaluated">
        <imageCanvas v-for="(t,i) in network.evaluated" :key="i"
            :mnistDigit="t.input"
            :fact="factor"
            :number="t.number"
            :percent="t.result"
            
            ></imageCanvas>
        </div>
        <div class="training" v-show="!network.trained">
            <h1>You have to train the network with the shown numbers</h1>
            <button @click="train" v-if="!network.trained">Traine Network</button>
            <button @click="evaluateData" v-else>Evaluate Data</button>

        </div>
    </div>
</template>

<script>
import imageCanvas from './imageCanvas';
import synapticNetwork from './sNetwork.js';
var mnist = require('mnist');

export default {
    name: 'Mnist',
    components: {
        imageCanvas
    },
    data(){
        return {
            rawContent: mnist.set(8000,20),
            m: mnist,
            trainingSet: [],
            testSet: [],
            factor: 10,
            evaluated: false,
            network: new synapticNetwork()
        };
    },
    methods: {
        goBack(){
            this.$router.go('/Synaptics');
        },
        train(){
            this.network.trainNetwork();
        },
        evaluateData(){
            for(let i = 0; i < this.testSet.Length; i++){
                let p = {};
                p.input = this.testSet[i].input;

                p.result = this.network.activate(this.testSet[i].input);
            }
            this.evaluated = true;
        }
    },
    created(){
         this.trainingSet = this.rawContent.training;
        this.testSet = this.rawContent.test;
        console.log(this.testSet);
        this.network.setTrainingSet(this.trainingSet);
        console.log(this.network);
    }
}
</script>


<style>
    div.training{
        width: 80%;
        margin: auto;
        height: 600px;
        background-color: rgba(181, 255, 203, 0.842);
        border: solid 1px black;
        border-radius: 5px;
        padding: 5px 10px;
        box-shadow: -13px -8px 40px #777, inset -10px -5px 9px 2px #555;
        overflow-y: auto;
    }

    div.training button{
        font-family: 'Century Gothic';
        font-weight: 600;
        font-size: 1.5em;
        color: rgb(1, 31, 23);
        border-radius: 6px;
        background-color: aquamarine;
        box-shadow: -5px -4px 15px 0px rgba(0, 0, 0, 0.4);
        cursor: pointer;
        position: relative;
        transition: color 0.5s, background-color 0.5s, position 1.5s;
    }

    div.training button:hover{
        color: white;
        background-color: rgb(7, 63, 51);
        top: -4px;
        transition: color 0.5s, background-color 0.5s, position 0.5s;
    }

    .wrapper{
        margin: 50px;
        width: 90%;
    }

    .wrapper a {
        background-color: dodgerblue;
        color: white;
        font-weight: 800;
        font-size: 1.3em;
        border-radius: 4px;
        float: left;
        text-decoration: none;
        padding: 2px 5px;
    }

    .wrapper h1{
        text-align: center;
        font-weight: 300;
        color: rgb(98, 163, 98);
        
    }
</style>
