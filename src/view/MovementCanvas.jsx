import React from "react";
import Sketch from "react-p5";

let x = 50;
let y = 50;

function MovementCanvas(props) {
    const setup = (p5, canvasParentRef) => {
		p5.createCanvas(500, 500).parent(canvasParentRef);
	};

    const draw = (p5) => {
		p5.background(54, 54, 54);

        p5.scale(props.Zoom);
        for (let i = 0; i <= 500; i += 500 / (10 * props.Zoom)) {
            for (let j = 0; j <= 500; j += 500 / (10 * props.Zoom)) {
                p5.stroke(0);
                p5.strokeWeight(1 / props.Zoom);
                p5.line(i, 0, i, 500);
                p5.line(0, j, 500, j);
            }
        }

        for (let i = 0; i <= 500; i += 500 / (10 * props.Zoom)) {
            p5.fill(255);
            p5.textSize(8 / props.Zoom);
            p5.text(i.toFixed(2), i - 25 / props.Zoom, 498 / props.Zoom);
        }

        for (let i = 0; i < 500; i += 500 / (10 * props.Zoom)) {
            p5.fill(255);
            p5.textSize(8 / props.Zoom);
            p5.text((500 - i).toFixed(2), 2 / props.Zoom, i + 14 / props.Zoom);
        }

		p5.beginShape();
        p5.fill(255, 0, 0);
        p5.vertex(props.A[0], 500 - props.A[1]);
        p5.vertex(props.B[0], 500 - props.B[1]);
        p5.vertex(props.C[0], 500 - props.C[1]);
        p5.vertex(props.D[0], 500 - props.D[1]);
        p5.endShape(p5.CLOSE);
    };

    return (
        <Sketch setup={setup} draw={draw} />
    )
}

export default MovementCanvas;