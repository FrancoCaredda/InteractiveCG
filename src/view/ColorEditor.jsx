import React, { useEffect, useState } from "react";
import "./theme/canvas.css";
import "./theme/color-editor.css";

function ColorEditor() {
    const [cyanValue, setCyanValue] = useState(0);
    const [magentaValue, setMagentaValue] = useState(0);
    const [yellowValue, setYellowValue] = useState(0);
    const [blackValue, setBlackValue] = useState(0);
    const [lightValue, setLightValue] = useState(0);
    const [model, setModel] = useState(true);

    const maxRGB = 255;
    const hue = 0;
    const saturation = 0;

    const GetPercentValue = (percent, value) => {
        return value * percent / 100;
    };

    const CMYKToRGB = (cyan, magenta, yellow, black) => {
        let cyanValue = GetPercentValue(cyan, maxRGB);
        let magentaValue = GetPercentValue(magenta, maxRGB);
        let yellowValue = GetPercentValue(yellow, maxRGB);
        let blackValue = GetPercentValue(black, 1);

        let red = Math.floor((maxRGB - cyanValue) * (1 - blackValue));
        let green = Math.floor((maxRGB - magentaValue) * (1 - blackValue));
        let blue = Math.floor((maxRGB - yellowValue) * (1 - blackValue)); 

        return [red, green, blue];
    };

    const HSLToRGB = (hue, saturation, light) => {
        let l = GetPercentValue(light, 1);

        let c = (1 - Math.abs(2*l - 1)) * saturation;
        let x = c * (1 - Math.abs( (hue / 60) % 2 - 1));
        let m = l - c / 2;

        let tempRGB = [c, x, 0];

        return [ Math.floor( (tempRGB[0] + m) * maxRGB ), 
                 Math.floor( (tempRGB[1] + m) * maxRGB ), 
                 Math.floor( (tempRGB[2] + m) * maxRGB ) ]; 
    };

    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        // let rgbColor = CMYKToRGB(cyanValue, magentaValue, yellowValue, blackValue);
        let rgbColor = HSLToRGB(hue, saturation, lightValue);

        ctx.fillStyle = "rgba(" + rgbColor[0] + ", " + rgbColor[1] + ", " + rgbColor[2] + ", 255)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#000";
        ctx.fillText("RGB: " + rgbColor[0] + ", " + rgbColor[1] + ", " + rgbColor[2], 20, 20);

        const cmykInstrument = document.getElementById("cmyk-model");
        const hslInstrument = document.getElementById("hsl-model");
        
        if (model) {
            cmykInstrument.classList.add("model-visible");
            hslInstrument.classList.add("model-unvisible");
        } else {
            hslInstrument.classList.add("model-visible");
            cmykInstrument.classList.add("model-unvisible");
        }

    }, [cyanValue, magentaValue, yellowValue, blackValue, lightValue, model]);

    return (
        <div id="color-editor">
            <div id="image-presentation">
                <canvas id="canvas"></canvas>
            </div>
            <div id="instruments">
                <div className="model-select">
                    <input type="radio" name="color-model" id="cmyk-model" checked onChange={ (e) => {setModel(true);} } />
                    <label htmlFor="cmyk-model">CMYK</label>
                    <input type="radio" name="color-model" id="hsl-model" onChange={ (e) => {setModel(false);} } />
                    <label htmlFor="hsl-model">HSL</label>
                </div>
                <div id="cmyk-model">
                    <div className="input-field">
                        <label htmlFor="cyan-input">Cyan: </label>
                        <input type="number" name="cyan-input" min={0} max={100} id="cyan-input" 
                                                onChange={  (e) => { setCyanValue(parseFloat(e.target.value)); } } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="magenta-input">Magenta: </label>
                        <input type="number" name="magenta-input" min={0} max={100} id="magenta-input" 
                                                onChange={  (e) => { setMagentaValue(parseFloat(e.target.value)); } }/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="yellow-input">Yellow: </label>
                        <input type="number" name="yellow-input" min={0} max={100} id="yellow-input" 
                                                onChange={  (e) => { setYellowValue(parseFloat(e.target.value)); } }/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="black-input">Black: </label>
                        <input type="number" name="black-input" min={0} max={100} id="black-input" 
                                                onChange={  (e) => { setBlackValue(parseFloat(e.target.value)); } }/>
                    </div>
                </div>
                <div id="hsl-model">
                    <div className="input-field">
                        <label htmlFor="light-input">Light: </label>
                        <input type="number" name="light-input" id="light-input" min={0} max={100} 
                                                                    onChange={  (e) => { setLightValue(parseFloat(e.target.value)); } }/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorEditor;