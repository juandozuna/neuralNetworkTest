<template>
    <div>
        <canvas :id="rand" :width="28*FACTOR" :height="28*FACTOR"></canvas>
        <div class="info">
            <label>{{num}} --> {{percentage}}</label>
            <progress :value="percentage" max="100"></progress>
        </div>
    </div>
</template>

<script>

var c;
var ctx;

export default {
  name:'imageCanvas',
  props: ['mnistDigit', 'fact', 'number', 'percent'],
  data(){
      return {
          rand: Math.random()*210000,
          x: 0,
          y: 0,
          iteration: 0,
          FACTOR: this.fact,
          digit: this.mnistDigit,
          num: this.number,
          percentage: this.percent
      };
  },
  watch: {
          mnistDigit: function(newVal, oldVal){
              this.digit = newVal;
              this.runCanvas();
          },
          fact: function(newVal, oldVal){
              this.FACTOR = newVal;
              this.runCanvas();
          }
      },
  methods: {
      fillCanvas(opacity){
          this.interation++;
        const FACTOR = this.FACTOR;
        let i = this.x;
        let k = this.y;
          
        
            //console.log('iteration ' + p);
            ctx.fillStyle=`RGBA(0,0,0,${opacity})`;
            ctx.fillRect(i,k,FACTOR,FACTOR);
            
            this.x += FACTOR;
            if(this.x >= c.width) {
                this.x = 0;
                this.y += FACTOR;
            }
      },
      
      runCanvas(){
          ctx.restore();
          console.log(c.width);
          var digit = this.digit;
          for(var p = 0; p < 28*28; p++){
             this.fillCanvas(digit[p]);
          }
          this.x = 0; 
          this.y = 0;

          
          //mnist.draw(digit, ctx);
          //console.log(digit);
      }
      
  },
  mounted(){
      c = document.getElementById(this.rand);
      ctx = c.getContext('2d');
    //console.log(c);
    this.runCanvas();

    
    



  }
}
</script>


<style scoped>
    canvas{
        border: black solid 1px;
        float: left;
    }

    .info {
        float: right;
    }
</style>
