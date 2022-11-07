import React from "react";
import { useState } from "react";
import Sketch from "react-p5";

let x = 50;
let y = 50;

function MovementCanvas(props) {
    const [linesCount, setLinesCount] = useState(10);
    const [width, setWidth] = useState(props.Width);
    const [height, setHeight] = useState(props.Height);

    const setup = (p5, canvasParentRef) => {
		p5.createCanvas(props.Width, props.Height).parent(canvasParentRef);
	};

    const draw = (p5) => {
		p5.background(54, 54, 54);

        p5.scale(props.Zoom);
        
        let incrementX = width / (linesCount * props.Zoom);
        let incrementY = height / (linesCount * props.Zoom);

        let strokeWeight = 1 / props.Zoom;

        for (let i = 0; i <= width; i += incrementX) {
            for (let j = 0; j <= height; j += incrementY) {
                p5.stroke(0);
                p5.strokeWeight(strokeWeight);
                p5.line(i, 0, i, height);
                p5.line(0, j, width, j);
            }
        }

        for (let i = 0; i <= width; i += incrementX) {
            p5.fill(255);
            p5.textSize(8 / props.Zoom);
            p5.text(i.toFixed(2), i - 25 / props.Zoom, 498 / props.Zoom);
        }

        for (let i = 0; i < height; i += incrementY) {
            p5.fill(255);
            p5.textSize(8 / props.Zoom);
            p5.text((height - i).toFixed(2), 2 / props.Zoom, i + 14 / props.Zoom);
        }

		p5.beginShape();
        p5.fill(255, 0, 0);
        p5.vertex(props.A[0], height - props.A[1]);
        p5.vertex(props.B[0], height - props.B[1]);
        p5.vertex(props.C[0], height - props.C[1]);
        p5.vertex(props.D[0], height - props.D[1]);
        p5.endShape(p5.CLOSE);
    };

    return (
        <Sketch setup={setup} draw={draw} />
    )
}

export default MovementCanvas;