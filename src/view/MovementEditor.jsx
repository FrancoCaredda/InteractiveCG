import { size } from "mathjs";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Rotate, Translate, Scale } from "../core/AffineTransformations";
import MovementCanvas from "./MovementCanvas";
import "./theme/movement-editor.css";
import "./theme/button.css";

let squarePositions = {
    A: [200, 200],
    B: [250, 200],
    C: [250, 250],
    D: [200, 250]
}

let delta = 0;
let rotation = 0;
let increment = 0.5;

let side = 50;

function MovementEditor() {
    /** SQUARE **/
    const [pointA, setPointA] = useState([200, 200]);
    const [pointB, setPointB] = useState([250, 200]);
    const [pointC, setPointC] = useState([250, 250]);
    const [pointD, setPointD] = useState([200, 250]);
    /** CANVAS **/
    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(500);

    const [zoom, setZoom] = useState(1);
    const [scale, setScale] = useState(1);
    const [interval, setInterv] = useState(); 

    useEffect(() => {
    }, [pointA, pointB, pointC, pointD]);

    const drawSquare = (value) => {
        const b = [pointA[0], pointA[1] + value];
        const c = [pointA[0] + value, pointA[1] + value];
        const d = [pointA[0] + value, pointA[1]];

        squarePositions.A = pointA;
        squarePositions.B = b;
        squarePositions.C = c;
        squarePositions.D = d;

        setPointB(b);
        setPointC(c);
        setPointD(d);
    };

    const rotateSquare = () => {
        delta += increment;
        rotation += 0.5;
        console.log(delta);

        const center = [
            (squarePositions.A[0] + squarePositions.C[0]) / 2,
            (squarePositions.A[1] + squarePositions.C[1] + delta * 2) / 2
        ]

        if (center[1] >= 500 || center[1] <= 0) {
            increment *= -1;
        }

        setPointA(Rotate(1.25 * parseFloat(rotation), Translate(squarePositions.A, [0, delta]), center));
        setPointB(Rotate(1.25 * parseFloat(rotation), Translate(squarePositions.B, [0, delta]), center));
        setPointC(Rotate(1.25 * parseFloat(rotation), Translate(squarePositions.C, [0, delta]), center));
        setPointD(Rotate(1.25 * parseFloat(rotation), Translate(squarePositions.D, [0, delta]), center));
    };

    return (
        <div id="movement-editor">
            <div id="layout">
                <div id="canvas">
                    <MovementCanvas A={pointA} B={pointB} C={pointC} D={pointD} Zoom={zoom} Height={height} Width={width} />
                </div>
                <div id="movement-instruments">
                    <div className="text-info">
                        <div className="caption">
                            <h3>Загальна інформація</h3>
                        </div>
                        <p>Діапазон координат: [0; 500]</p>
                        <p>Діапазон розміру: [0; 100]</p>
                        <p>Діапазон приближення: [1; 3]</p>
                    </div>
                    <hr />
                    <div id="point-inputs">
                        <div className="labels" style={{width: 250}}>
                            <label>Точка: </label>
                            <label>Розмір: </label>
                            <label>Зум: </label>
                        </div>
                        <div className="inputs">
                            <div className="point-input">
                                <input type="number" id="pointA_X" min={0} step={0.001} placeholder={200} max={500} onChange={ (e) => {setPointA([parseFloat(e.target.value), pointA[1]]); drawSquare(side); } } />
                                <input type="number" id="pointA_Y" min={0} step={0.001} placeholder={200} max={500} onChange={ (e) => {setPointA([pointA[0], parseFloat(e.target.value)]); drawSquare(side); } } />
                            </div>
                            <div className="point-input">
                                <input type="number" name="" step={1} min={10} max={100} placeholder={50} onChange={ (e) => { side = parseFloat(e.target.value); drawSquare(side); } } id="square-size" />
                            </div>
                            <div className="point-input">
                                <input type="number" name="gridScale" id="gridScale" placeholder={1} min={1} step={0.5} max={3} onChange={ (e) => { setZoom(parseFloat(e.target.value)); } }/>
                            </div>
                        </div>
                    </div>
                    <center>
                        <button className="dark-button" onClick={() => { setInterv(setInterval(rotateSquare, 0.05)); }}>Анімувати</button>
                        <button className="dark-button" onClick={() => { clearInterval(interval); }}>Зупинити</button>
                    </center>    
                </div>
            </div>
        </div>
    );
}

export default MovementEditor;