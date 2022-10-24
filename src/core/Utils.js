function Max3(value1, value2, value3) {
    return (value1 > value2) ? ((value1 > value3) ? value1 : value3) : ((value2 > value3) ? value2 : value3);
}

function Min3(value1, value2, value3) {
    return (value1 < value2) ? ((value1 < value3) ? value1 : value3) : ((value2 < value3) ? value2 : value3);
}

function IsZero(value) {
    return Math.abs(value) < 0.000001;
}

function IsEaquale(value1, value2) {
    return Math.abs(value1 - value2) < 0.000001;
}

function GradToRadians(value) {
    return value * Math.PI / 360;
}

export { Max3, Min3, IsZero, IsEaquale, GradToRadians };