<template>
    <div class="container">
      <a @click="goBack" class="return"> &larr; Back</a>
      <h1>Contraster</h1>
      <ContrasterContent></ContrasterContent>

    </div>
</template>

<script>
import ContrasterContent from './ContrasterContent.vue'
const brain = require('brain.js');

export default {
  data(){
      return {
          net: [],
          trainingData: [],
          output: 0,
          inputs: [0,0],
          trained: false
      };
  },
  components:{
    ContrasterContent
  },
  created(){
   
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

  h1{
    text-align: center;
    font-family: century-Gothic, sans-serif;
    font-size: 2em;
    color:cornflowerblue;
  }

  .return{
    float: left;
    font-size: 2em;
    text-align: center;
    vertical-align: middle;
    margin: auto 0;
    position: relative;
    top: 0px;
    text-decoration: bold;
    background-color: rgba(162, 255, 162, 0.363);
    border-radius: 5px;
    padding: 4px;
    padding-right: 10px;
   transition: background-color 0.5s, color 0.5s;
   cursor: pointer;

  }

  .return:hover{
    background-color: rgba(162, 255, 162, 0.7);
    transition: background-color 0.5s, color 0.5s;
  }

  div.container{
    margin: 0 10%;
    
  }

</style>

