import React from "react";
import { useState } from "react";
import Sketch from "react-p5";
import { create, all } from "mathjs";
import { useEffect } from "react";

function FractalCanvas(props) {
    var math = create(all, { });

    const magnitude = (a) => {
        return a.re * a.re + a.im * a.im; 
    };
    
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(props.Width, props.Height).parent(canvasParentRef);
        p5.noLoop();
    };
    
    const draw = (p5) => { 
        p5.loadPixels();

        const iterations = (props.iter);
        const radius = (props.rad);
        const zoom = (props.zoom);
        const constant = (props.const);

        for (let i = 0; i < p5.canvas.width; i++) {
            for (let j = 0; j < p5.canvas.height; j++) {
                let x = 2 * (i / p5.canvas.width) - 1;
                let y = 2 * (j / p5.canvas.height) - 1;
                let func = math.complex(0);

                for (let k = 0; k < iterations; k++) {
                    func = math.complex(func.re * func.re - func.im * func.im + (zoom * x - constant.re), 
                                        2.0 * func.re * func.im + (zoom * y - constant.im));

                    const pix = (i+j*p5.canvas.width)*4;
                    if (magnitude(func) > radius) {
                        p5.pixels[pix + 0] = props.color[0];
                        p5.pixels[pix + 1] = props.color[1];
                        p5.pixels[pix + 2] = props.color[2];
                        p5.pixels[pix + 3] = 255;                    
                    } else {
                        p5.pixels[pix + 0] = 53;
                        p5.pixels[pix + 1] = 53;
                        p5.pixels[pix + 2] = 53;
                        p5.pixels[pix + 3] = 255;          
                    }
                }
            }
        }

        p5.updatePixels();
    };

    return (
        <Sketch setup={setup} draw={draw} />
    )
}

export default FractalCanvas;