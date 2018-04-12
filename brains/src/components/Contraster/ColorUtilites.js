
export default class colorUtils {
    constructor(){
        this.red = 0;
        this.blue = 0;
        this.green = 0;
    }

    randomColor(){
        this.red = Math.floor(Math.random()*255);
        this.blue = Math.floor(Math.random()*255);
        this.green = Math.floor(Math.random()*255);

        return { red: this.red, green: this.green, blue: this.blue};
    }

    normalizeColor(){
        const red = this.red/255;
        const green = this.green/255;
        const blue = this.blue/255;

        return {r: red, g: green, b: blue};
    }

    setRGBColor(R, G, B){
        this.red = R > 255 ? 255 : R;
        this.green = G > 255 ? 255:G;
        this.blue = B > 255 ? 255: B;

        return {
            ColorSet: {
                red: R,
                green: G,
                blue: B
            }
        };
    }

    getColorStyle(){
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }
}