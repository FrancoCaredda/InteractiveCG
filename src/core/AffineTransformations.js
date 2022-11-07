import math, { cos, create, sin } from "mathjs";

function ConvertToRadians(angle) {
    return angle * Math.PI / 180.0;
}

function Scale(point, value) {
    return [
        point[0] * value,
        point[1] * value
    ];
}

function Rotate(angle, point, origin) {
    let radian = ConvertToRadians(angle);

    const x = point[0] * cos(radian) - point[1] * sin(radian) - origin[0] * cos(radian) + origin[1] * sin(radian) + origin[0];
    const y = point[0] * sin(radian) + point[1] * cos(radian) - origin[0] * sin(radian) - origin[1] * cos(radian) + origin[1];

    return [
        x,
        y
    ];
}

function Translate(point, toPoint) {
    return [
        point[0] + toPoint[0],
        point[1] + toPoint[1]
    ];
}

export { Rotate, Translate, Scale };