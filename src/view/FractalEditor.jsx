import React, { useEffect, useState } from "react";
import { create, all } from "mathjs";
import "./theme/canvas.css";
import "./theme/fractal-editor.css";
import "./theme/input.css";
import "./theme/button.css";
import FractalCanvas from "./FractalCanvas";

function FractalEditor() {
    var math = create(all, { });
    const [iterations, setIterations] = useState(15);
    const [radius, setRadius] = useState(5);
    const [zoom, setZoom] = useState(1);
    const [constant, setConstant] = useState(math.complex(0.5, 0));

    const [draw, setDraw] = useState(false);

    const onDrawClick = (e) => {
        setDraw(!draw);
    };

    return (
        <div id="editor">
            <div id="fractal">
                <div id="fractal-canvas">
                    {(draw) ? <FractalCanvas Width={500} Height={500} iter={iterations} rad={radius} zoom={zoom} const={constant} color={[255, 255, 255]} /> : <span></span>}
               </div>
            </div>
            <div id="instruments">
                <div id="inputs">
                    <div id="label-block">
                        <label htmlFor="iterationsInput">Iterations: </label>
                        <label htmlFor="radiusInput">Radius: </label>
                        <label htmlFor="zoomInput">Zoom: </label>
                        <label>Constant: </label>
                    </div>
                    <div id="input-block">
                        <input id="iterationsInput" name="iterationsInput" placeholder="Iterations" type="number" min={0} max={40} 
                                                                    onChange={ (e) => { setIterations(parseInt(e.target.value)); } }/> <br />
                        <input id="radiusInput" name="radiusInput" placeholder="Radius" type="number" min={0} max={25} 
                                                                    onChange={ (e) => { setRadius(parseInt(e.target.value)); } }/> <br />
                        <input id="zoomInput" name="zoomInput" placeholder="Zoom" type="number" min={-1} step={0.05} max={1}
                                                                    onChange={ (e) => { setZoom(1 - parseFloat(e.target.value)); } }/> <br />
                        <input placeholder="X" type="number" min={0} step={0.05} max={1} 
                                                            onChange={ (e) => { setConstant( math.complex(parseFloat(e.target.value), constant.im) ); } }/>
                        <input placeholder="Y" type="number" min={0} step={0.05} max={1} 
                                                            onChange={ (e) => { setConstant( math.complex(constant.re, parseFloat(e.target.value)) ); } }/> <br />
                        
                    </div>
                </div>
                <input onClick={onDrawClick} type="button" id="draw-button" value={ (!draw) ? "Draw" : "Clear" } className="dark-button" />
               <span id="test"></span>
            </div>
        </div>
    );
}

export default FractalEditor;