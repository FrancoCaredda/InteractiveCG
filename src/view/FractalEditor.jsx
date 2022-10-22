import React, { useEffect, useState } from "react";
import { create, all } from "mathjs";
import "./theme/canvas.css";
import "./theme/fractal-editor.css";

function FractalEditor() {
    var math = create(all, { });
    const [iterations, setIterations] = useState(5);
    const [radius, setRadius] = useState(5);
    const [zoom, setZoom] = useState(1.5);
    const [constant, setConstant] = useState(math.complex(0, 0));
    const [pixelSize, setPixelSize] = useState(0.1);

    const magnitude = (a) => {
        return a.re * a.re + a.im * a.im; 
    };

    const onDrawClick = (e) => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < canvas.width; i += pixelSize) {
            for (let j = 0; j < canvas.height; j += pixelSize) {
                let x = 2 * (i / canvas.width) - 1;
                let y = 2 * (j / canvas.height) - 1;
                let func = math.complex(0);

                for (let k = 0; k < iterations; k++) {
                    ctx.fillStyle = "black";

                    func = math.complex(func.re * func.re - func.im * func.im + (zoom * x - constant.re), 
                                        2.0 * func.re * func.im + (zoom * y - constant.im));

                    if (magnitude(func) > radius) {
                        ctx.fillStyle = "green";
                    }
                }

                ctx.fillRect(i,  j, pixelSize, pixelSize);
            }
        }
    };

    return (
        <div id="editor">
            <div id="fractal">
                <canvas id="canvas"></canvas>
            </div>
            <div id="instruments">
                <label htmlFor="iterationsInput">Iterations: </label>
                <input id="iterationsInput" name="iterationsInput" placeholder="Iterations" type="number" min={0} max={40} 
                                                              onChange={ (e) => { setIterations(parseInt(e.target.value)); } }/> <br />
                <label htmlFor="radiusInput">Radius: </label>
                <input id="radiusInput" name="radiusInput" placeholder="Radius" type="number" min={0} max={25} 
                                                              onChange={ (e) => { setRadius(parseInt(e.target.value)); } }/> <br />
                <label htmlFor="pixelInput">Pixel size: </label>
                <input id="pixelInput" name="pixelInput" placeholder="Pixel size" type="number" min={0.1} step={0.01} max={5} 
                                                              onChange={ (e) => { setPixelSize(parseFloat(e.target.value)); } }/> <br />
                <label htmlFor="zoomInput">Zoom: </label>
                <input id="zoomInput" name="zoomInput" placeholder="Zoom" type="number" min={0} step={0.05} max={1}
                                                              onChange={ (e) => { setZoom(1 - parseFloat(e.target.value)); } }/> <br />
                <label>Constant: </label>
                <input placeholder="X" type="number" min={0} step={0.05} max={1} 
                                                     onChange={ (e) => { setConstant( math.complex(parseFloat(e.target.value), constant.im) ); } }/>
                <input placeholder="Y" type="number" min={0} step={0.05} max={1} 
                                                     onChange={ (e) => { setConstant( math.complex(constant.re, parseFloat(e.target.value)) ); } }/> <br />
                <button onClick={onDrawClick}>Draw</button>
            </div>
        </div>
    );
}

export default FractalEditor;