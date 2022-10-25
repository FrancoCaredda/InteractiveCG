import React, { useEffect, useState } from "react";

import { CMYKToRGB, GetColorIndicesForCoord, HSLToRGB, RGBToCMYK, RGBToHSL } from "../core/Color";

import "./theme/canvas.css";
import "./theme/color-editor.css";
import "./theme/button.css";
import "./theme/input.css";
import { drawImageScaled } from "../core/ImageProcess";

function ColorEditor() {
    const [cyanValue, setCyanValue] = useState(0);
    const [magentaValue, setMagentaValue] = useState(0);
    const [yellowValue, setYellowValue] = useState(0);
    const [blackValue, setBlackValue] = useState(0);
    const [lightValue, setLightValue] = useState(0);
    const [model, setModel] = useState(0);
    const [imageData, setImageData] = useState();

    const hue = 0;
    const saturation = 0;

    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        let rgbColor = (model) ? HSLToRGB(hue, saturation, lightValue) : CMYKToRGB(cyanValue, magentaValue, yellowValue, blackValue);

        if (imageData != null) {
            ctx.putImageData(imageData, 0, 0);
            let image = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let data = image.data;

            ChangeImageColor(data, rgbColor[0], rgbColor[1], rgbColor[2]);
            
            image.data.set(data);

            ctx.putImageData(image, 0, 0);

            UpdateCoordinates(rgbColor);
        }
    }, [cyanValue, magentaValue, yellowValue, blackValue, lightValue, imageData]);

    const SwitchToHSL = (e) => {
        document.getElementById("cmyk-model-inputs").style.display = "none";
        document.getElementById("hsl-model-inputs").style.display = "block";
        setModel(1);
    };

    const SwitchToCMYK = (e) => {
        document.getElementById("cmyk-model-inputs").style.display = "block";
        document.getElementById("hsl-model-inputs").style.display = "none";   
        setModel(0);
    }

    const ImageToCMY = (data) => {
        for (let i = 0; i < data.length; i += 4) {
            let cmy = RGBToCMYK(data[i], data[i + 1], data[i + 2]);
            data[i] = cmy[0];
            data[i+1] = cmy[1];
            data[i+2] = cmy[2];
        }
    }

    const ChangeImageColor = (data, x, y, z) => {
        for (let i = 0; i < data.length; i += 4) {
            data[i] *= x / 255;
            data[i+1] *= y / 255;
            data[i+2] *= z / 255;
        }
    }

    const loadImage = (e) => {
        let img = new Image();
        img.src = e.target.value;
        img.setAttribute('crossOrigin', '');
        
        img.onload = () => {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            drawImageScaled(img, ctx)

            let image = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let data = image.data;

            image.data.set(data);
            setImageData(image);
        }
    }

    const UpdateCoordinates = (color) => {
        let hslLabel = document.getElementById("hsl-coord");
        let rgbLabel = document.getElementById("rgb-coord");
        let cmykLabel = document.getElementById("cmyk-coord");

        let hslColor = RGBToHSL(color[0], color[1], color[2]);
        let cmykColor = RGBToCMYK(color[0], color[1], color[2]);

        rgbLabel.innerHTML = "RGB: " + color[0] + ", " + color[1] + ", " + color[2];
        if (hslColor != null) {
            hslLabel.innerHTML = "HSL: " + hslColor[0] + "&deg;, " + hslColor[1] + "%, " + hslColor[2] + "%";
        } else {
            hslLabel.innerHTML = "HSL: 0&deg;, 0%, " + lightValue + "%";
        }
        cmykLabel.innerHTML = "CMYK: " + cmykColor[0] + "%, " + cmykColor[1] + "%, " + cmykColor[2] + "%, " + cmykColor[3] + "%"; 

        document.getElementById("color").style.backgroundColor = "rgba(" + color[0] + "," + color[1] + "," + color[2] + ", 255)";


    };

    return (
        <div id="color-editor">
            <div id="image-presentation">
                <canvas id="canvas"></canvas>
            </div>
            <div id="instruments">
                <div className="model-select">
                    <input type="button" className="dark-button" name="color-model" id="cmyk-model" value={"CMYK"} onClick={SwitchToCMYK} />
                    <input type="button" className="dark-button" name="color-model" id="hsl-model" value={"HSL"} onClick={SwitchToHSL} />
                </div>
                <div id="file-inputs">
                    <label htmlFor="file-url">Image: </label>
                    <input type="url" name="" id="file-url" placeholder="URL" onChange={loadImage} />
                </div>
                <div id="cmyk-model-inputs">
                    <div className="text">
                        <p>Cyan value is beetween [0, 100%] from 255</p>
                        <p>Magenta value is beetween [0, 100%] from 255</p>
                        <p>Yellow value is beetween [0, 100%] from 255</p>
                        <p>Black value is beetween [0, 100%] from 255</p>
                    </div>
                    <div id="inputs">
                        <div className="label-block">
                            <label htmlFor="cyan-input">Cyan: </label> <br />
                            <label htmlFor="magenta-input">Magenta: </label> <br />
                            <label htmlFor="yellow-input">Yellow: </label> <br />
                            <label htmlFor="black-input">Black: </label> <br />
                        </div>
                        <div className="input-block">
                            <input type="number" placeholder="0%" name="cyan-input" min={0} max={100} id="cyan-input" 
                                                        onChange={  (e) => { setCyanValue(parseFloat(e.target.value)); } } />
                            <input type="number" placeholder="0%" name="magenta-input" min={0} max={100} id="magenta-input" 
                                                        onChange={  (e) => { setMagentaValue(parseFloat(e.target.value)); } }/>
                            <input type="number" placeholder="0%" name="yellow-input" min={0} max={100} id="yellow-input" 
                                                        onChange={  (e) => { setYellowValue(parseFloat(e.target.value)); } }/>
                            <input type="number" placeholder="0%" name="black-input" min={0} max={100} id="black-input" 
                                                        onChange={  (e) => { setBlackValue(parseFloat(e.target.value)); } }/>
                        
                        </div>
                    </div>
                </div>
                <div id="hsl-model-inputs" style={{display: "none"}}>
                    <div className="text">
                        <p>Hue value is beetween [0, 360&deg;]</p>
                        <p>Saturation value is beetween [0, 100%]</p>
                        <p>Light value is beetween [0, 100%]</p>
                    </div>
                    <div className="input-field">
                        <p>Hue: 0</p>
                        <p>Saturation: 0</p>
                        <label htmlFor="light-input">Light: </label>
                        <input type="number" placeholder="0%" name="light-input" id="light-input" min={0} max={100} 
                                                                    onChange={  (e) => { setLightValue(parseFloat(e.target.value)); } }/>
                    </div>
                </div>
                <div id="coordinates">
                    <div id="color">
                    </div>
                    <div id="values">
                        <p id="rgb-coord">RGB: </p>
                        <p id="cmyk-coord">CMYK: </p>
                        <p id="hsl-coord">HSL: </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorEditor;