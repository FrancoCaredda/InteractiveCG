import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Rotate, Translate, Scale } from "../core/AffineTransformations";
import MovementCanvas from "./MovementCanvas";
import "./theme/movement-editor.css";

let squarePositions = {
    A: [200, 200],
    B: [250, 200],
    C: [250, 250],
    D: [200, 250]
}

let delta = 0;
let rotation = 0;

function MovementEditor() {
    const [pointA, setPointA] = useState([200, 200]);
    const [pointB, setPointB] = useState([250, 200]);
    const [pointC, setPointC] = useState([250, 250]);
    const [pointD, setPointD] = useState([200, 250]);
    const [zoom, setZoom] = useState(1);
    const [scale, setScale] = useState(1);
    const [interval, setInterv] = useState(); 

    useEffect(() => {

    }, [pointA, pointB, pointC, pointD]);

    const rotateSquare = () => {
        delta += 0.5;
        rotation += 0.5;

        const center = [
            (squarePositions.A[0] + squarePositions.C[0]) / 2,
            (squarePositions.A[1] + squarePositions.C[1] + delta * 2) / 2
        ]

        setPointA(Rotate(1.25 * parseFloat(rotation), Translate(squarePositions.A, [0, delta]), center));
        setPointB(Rotate(1.25 * parseFloat(rotation), Translate(squarePositions.B, [0, delta]), center));
        setPointC(Rotate(1.25 * parseFloat(rotation), Translate(squarePositions.C, [0, delta]), center));
        setPointD(Rotate(1.25 * parseFloat(rotation), Translate(squarePositions.D, [0, delta]), center));
    };

    return (
        <div id="movement-editor">
            <div id="layout">
                <div id="canvas">
                    <MovementCanvas A={pointA} B={pointB} C={pointC} D={pointD} Zoom={zoom} />
                </div>
                <div id="movement-instruments">
                    <div id="point-inputs">
                        <div className="labels">
                            <label>Point A: </label>
                            <label>Point B: </label>
                            <label>Point C: </label>
                            <label>Point D: </label>
                        </div>
                        <div className="inputs">
                            <div className="point-input">
                                <input type="number" id="pointA_X" step={0.001} onChange={ (e) => {squarePositions.A = [parseFloat(e.target.value), pointA[1]]; setPointA([parseFloat(e.target.value), pointA[1]]); } } />
                                <input type="number" id="pointA_Y" step={0.001} onChange={ (e) => {squarePositions.A = [pointA[0], parseFloat(e.target.value)]; setPointA([pointA[0], parseFloat(e.target.value)]); } } />
                            </div>
                            <div className="point-input">
                                <input type="number" id="pointB_X" step={0.001} onChange={ (e) => {squarePositions.B = [parseFloat(e.target.value), pointB[1]]; setPointB([parseFloat(e.target.value), pointB[1]]); } } />
                                <input type="number" id="pointB_Y" step={0.001} onChange={ (e) => {squarePositions.B = [pointB[0], parseFloat(e.target.value)]; setPointB([pointB[0], parseFloat(e.target.value)]); } } />
                            </div>
                            <div className="point-input">
                                <input type="number" id="pointC_X" step={0.001} onChange={ (e) => {squarePositions.C = [parseFloat(e.target.value), pointC[1]]; setPointC([parseFloat(e.target.value), pointC[1]]); } } />
                                <input type="number" id="pointC_Y" step={0.001} onChange={ (e) => {squarePositions.C = [pointC[0], parseFloat(e.target.value)]; setPointC([pointC[0], parseFloat(e.target.value)]); } } />
                            </div>
                            <div className="point-input">
                                <input type="number" id="pointD_X" step={0.001} onChange={ (e) => {squarePositions.D = [parseFloat(e.target.value), pointD[1]]; setPointD([parseFloat(e.target.value), pointD[1]]); } } />
                                <input type="number" id="pointD_Y" step={0.001} onChange={ (e) => {squarePositions.D = [pointD[0], parseFloat(e.target.value)]; setPointD([pointD[0], parseFloat(e.target.value)]); } }/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Canvas scale: </label>
                        <input type="number" name="gridScale" id="gridScale" min={1} step={0.5} max={3} onChange={ (e) => { setZoom(parseFloat(e.target.value)); } }/>
                    </div>
                    <button onClick={() => { setInterv(setInterval(rotateSquare, 0.05)); }}>Animate</button>
                    <button onClick={() => { clearInterval(interval); }}>Stop</button>
                </div>
            </div>
        </div>
    );
}

export default MovementEditor;