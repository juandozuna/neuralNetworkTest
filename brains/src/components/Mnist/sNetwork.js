var synaptic = require('synaptic')
var Neuron = synaptic.Neuron,
	Layer = synaptic.Layer,
	Network = synaptic.Network,
	Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;
    
const MIN_TRAINING_SET_SIZE = 1000;

export default class synapticNetwork{
    constructor(inputLayers){
        this.netowrk = new Architect.Perceptron(784,20,10);
        this.trainingSet = [];
        this.trained = false;
        this.evaluated = [];
        
    }


    addToTrainingSet(item){
        this.trainingSet.push(item);
    }

    setTrainingSet(array){
        this.trainingSet = array;
    }

    trainNetwork(){
        const trainer = new Trainer(this.netowrk);
        if(this.trainingSet.Length < MIN_TRAINING_SET_SIZE){
            alert("There is not enough data to train the network");
        }else{
            console.log('trainer Started')
            trainer.trainAsync(this.trainingSet, {
                rate: 0.1,
                log: 500,
                iterations: 40000
            }).then(results => {
                this.trained = true;
                console.log('done!');
                console.log(results);
            });
        }
    }

    activate(array){
        let result = [];
            result = this.netowrk.activate(array);
        
        let p = {number: 0, result: result[0]};
        for(let t = 0; t < result.Length; t++){
            if(p.result < result[t]){
                p.number = t;
                p.result = result[t];
            }
        }

        let answer = {
            number: p.number,
            result: p.result*100
        };
        this.evaluated.push({
            input: array,
            number: answer.number,
            result: answer.result
        });
        console.log(answer);
    }



}