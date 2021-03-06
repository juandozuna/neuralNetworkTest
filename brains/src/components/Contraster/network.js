import Brain from 'brain.js'

export default class network {

    constructor(){
        this.stringifydata = '[{"input":{"r":0.615686274509804,"g":0.6352941176470588,"b":0.19215686274509805},"output":{"black":1}},{"input":{"r":0.7490196078431373,"g":0.5450980392156862,"b":0.5019607843137255},"output":{"black":1}},{"input":{"r":0.4,"g":0.9411764705882353,"b":0.9294117647058824},"output":{"black":1}},{"input":{"r":0.16470588235294117,"g":0.41568627450980394,"b":0.403921568627451},"output":{"black":0}},{"input":{"r":0.1843137254901961,"g":0.792156862745098,"b":0.7137254901960784},"output":{"black":1}},{"input":{"r":0.40784313725490196,"g":0.5803921568627451,"b":0.9647058823529412},"output":{"black":0}},{"input":{"r":0.596078431372549,"g":0.6941176470588235,"b":0.5490196078431373},"output":{"black":1}},{"input":{"r":0.4980392156862745,"g":0.8901960784313725,"b":0.6352941176470588},"output":{"black":1}},{"input":{"r":0.5803921568627451,"g":0.7137254901960784,"b":0.36470588235294116},"output":{"black":1}},{"input":{"r":0.2823529411764706,"g":0.9529411764705882,"b":0.5019607843137255},"output":{"black":1}},{"input":{"r":0.22745098039215686,"g":0.9921568627450981,"b":0.19215686274509805},"output":{"black":1}},{"input":{"r":0.25882352941176473,"g":0.7294117647058823,"b":0.5529411764705883},"output":{"black":1}},{"input":{"r":0.8352941176470589,"g":0.8509803921568627,"b":0.2901960784313726},"output":{"black":1}},{"input":{"r":0.043137254901960784,"g":0.5686274509803921,"b":0.17254901960784313},"output":{"black":1}},{"input":{"r":0.12941176470588237,"g":0.25098039215686274,"b":0.6941176470588235},"output":{"black":0}},{"input":{"r":0.7450980392156863,"g":0.5647058823529412,"b":0.21176470588235294},"output":{"black":1}},{"input":{"r":0.12549019607843137,"g":0.5019607843137255,"b":0.9764705882352941},"output":{"black":0}},{"input":{"r":0.9764705882352941,"g":0.34509803921568627,"b":0.6980392156862745},"output":{"black":1}},{"input":{"r":0.8313725490196079,"g":0.18823529411764706,"b":0.7254901960784313},"output":{"black":0}},{"input":{"r":0.21176470588235294,"g":0.2549019607843137,"b":0.9294117647058824},"output":{"black":0}},{"input":{"r":0.792156862745098,"g":0.6509803921568628,"b":0.7372549019607844},"output":{"black":1}},{"input":{"r":0.06666666666666667,"g":0.6862745098039216,"b":0.1411764705882353},"output":{"black":1}},{"input":{"r":0.1450980392156863,"g":0.3843137254901961,"b":0.403921568627451},"output":{"black":0}},{"input":{"r":0.3568627450980392,"g":0.5137254901960784,"b":0.5529411764705883},"output":{"black":1}},{"input":{"r":0.803921568627451,"g":0.3764705882352941,"b":0.043137254901960784},"output":{"black":0}},{"input":{"r":0.47843137254901963,"g":0.4588235294117647,"b":0.3686274509803922},"output":{"black":1}},{"input":{"r":0.803921568627451,"g":0.6274509803921569,"b":0.8549019607843137},"output":{"black":1}},{"input":{"r":0.12156862745098039,"g":0.9882352941176471,"b":0.4745098039215686},"output":{"black":1}},{"input":{"r":0.7254901960784313,"g":0.25882352941176473,"b":0.4},"output":{"black":0}},{"input":{"r":0.7686274509803922,"g":0.09019607843137255,"b":0.7137254901960784},"output":{"black":0}},{"input":{"r":0.807843137254902,"g":0.8235294117647058,"b":0.5176470588235295},"output":{"black":1}},{"input":{"r":0.403921568627451,"g":0.8392156862745098,"b":0.4392156862745098},"output":{"black":1}},{"input":{"r":0.596078431372549,"g":0.21568627450980393,"b":0.0392156862745098},"output":{"black":0}},{"input":{"r":0.6941176470588235,"g":0.0784313725490196,"b":0.5411764705882353},"output":{"black":0}},{"input":{"r":0.8431372549019608,"g":0.7450980392156863,"b":0.06274509803921569},"output":{"black":1}},{"input":{"r":0.09411764705882353,"g":0.6039215686274509,"b":0.8470588235294118},"output":{"black":0}}]';
        this.data = JSON.parse(this.stringifydata);
        this.net = new Brain.NeuralNetwork();
        this.runnable = false;
    }

    addData(ins, out){
        this.data.push({input: ins, output:{ black: out}});

        if(!this.runnable)
            if(this.data.length >= 15) 
                this.runnable = true;
    }

    trainNetwork(){
        console.log(JSON.stringify(this.data));
       // if(this.runnable)
            this.net.train(this.data, {
                log: true,
                iterations: 9000,
                keepNetworkIntact: true
            });
       // else{
        //    alert("There's not enough data to learn");
        //}
    }

    run(colorRGB){
        const result = this.net.run(colorRGB);
        
        return result; //Return 1(black) or 0(white) 
        
    }


}