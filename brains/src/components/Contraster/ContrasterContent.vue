<template>
  <div class="container">
      <div class="coloredContainer" id="one" :style="colorStyle" @click="selected(1)" v-if="training"> <p>{{divText}}</p> </div>
      <div class="coloredContainer" id="two" :style="colorStyle" @click="selected(2)" v-if="training"> <p>{{divText}}</p> </div>
      <div class="coloredContainer" id="demo" v-show="!training" :style="demonstration"> <p>{{divText}}</p></div>
      <button v-on:click="stopTraining" v-show="training && n.data.length > 5">Stop Training</button>
      <button v-on:click="train" v-show="!training">Train</button>
      <button v-on:click="next" v-show="!training">Next</button>
  </div>
</template>



<script>
import colorUtils from './ColorUtilites.js'
import network from './network.js'

export default {
  name: "ContrasterContent",
  data(){
      return {
          divText: 'Is it easier to read here, the text within the box.',
          cu: new colorUtils(),
          n: new network(),
          training: true,
          color: 'white'
      };
  },
  computed:{
      colorStyle(){
          return {
              backgroundColor: this.cu.getColorStyle()
            };
      },
      demonstration(){
          return {
              backgroundColor: this.cu.getColorStyle(),
              color: this.color
            };
      
      }
  },
  created(){
      console.log(this.cu.randomColor());
  },
  methods: {
      next(){
          console.log(this.cu.randomColor());
         // console.log(this.cu.normalizeColor());
          let result = this.n.run(this.cu.normalizeColor());
          console.log(result.black);
          if(Math.round(result.black) == 1) this.color = "black";
          else this.color = "white";

      },
      selected(id){
          
          if(id === 1){ //Chosen contrast was black
            this.n.addData(this.cu.normalizeColor(), 1)
          }else if(id === 2)
            this.n.addData(this.cu.normalizeColor(), 0);
        
        this.cu.randomColor();

      },
      stopTraining(){
          this.training = false;
          this.n.trainNetwork();
          console.log(this.n.data);

      },
      train(){
          this.training = true;
      }
  }
}
</script>


<style scoped>

    button{
        float: left;
        font-size: 1.2em;
        margin: 6px;
    }

    .container{
        display: flex;
        flex-wrap: wrap;
        width: 450px;
        margin:0 auto;
        position: relative;
        left: 20%;
        
    }

    .coloredContainer{
        width: 200px;
        height: 200px;
        border-radius: 10px;
        background-color: lightgrey;
        margin: 0 auto;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
         transition: font-size 0.5s, width 0.5s, height 0.5s;
    }
    .coloredContainer#one{
        color: black;
        transition: background-color  ease 0.9s;
    }
    .coloredContainer#two{
        color: white;
        transition: background-color ease 0.9s;

    }
    .coloredContainer:hover{
        width: 210px;
        height: 210px;
        font-size: 1.2em;
        transition: font-size 0.5s, width 0.5s, height 0.5s;
    }
    .coloredContainer p {
        margin: 40% 14px;
    }
</style>
