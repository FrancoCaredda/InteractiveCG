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
                <div className="text-info">
                    <div className="caption">
                        <h3>Загальна інформація</h3>
                    </div>
                    <p>Діапазон ітерацій: [0; 40]</p>
                    <p>Діапазон радіусу: [0; 25]</p>
                    <p>Діапазон приближення: [-1; 1]</p>
                    <p>Координати константи: [0; 1]</p>
                </div>
                <hr />
                <div id="inputs">
                    <div id="label-block">
                        <label htmlFor="iterationsInput">Ітераії: </label> <br />
                        <label htmlFor="radiusInput">Радіус: </label> <br />
                        <label htmlFor="zoomInput">Приближення: </label>
                        <label>Константи: </label>
                    </div>
                    <div id="input-block">
                        <input id="iterationsInput" name="iterationsInput" placeholder="Ітерації" type="number" min={0} max={40} 
                                                                    onChange={ (e) => { setIterations(parseInt(e.target.value)); } }/> <br />
                        <input id="radiusInput" name="radiusInput" placeholder="Радіус" type="number" min={0} max={25} 
                                                                    onChange={ (e) => { setRadius(parseInt(e.target.value)); } }/> <br />
                        <input id="zoomInput" name="zoomInput" placeholder="Приближення" type="number" min={-1} step={0.05} max={1}
                                                                    onChange={ (e) => { setZoom(1 - parseFloat(e.target.value)); } }/> <br />
                        <input placeholder="X" type="number" min={0} step={0.05} max={1} 
                                                            onChange={ (e) => { setConstant( math.complex(parseFloat(e.target.value), constant.im) ); } }/>
                        <input placeholder="Y" type="number" min={0} step={0.05} max={1} 
                                                            onChange={ (e) => { setConstant( math.complex(constant.re, parseFloat(e.target.value)) ); } }/> <br />
                        
                    </div>
                </div>
                <input onClick={onDrawClick} type="button" id="draw-button" value={ (!draw) ? "Малювати" : "Очистити" } className="dark-button" />
            </div>
        </div>
    );
}

export default FractalEditor;