const maxRGB = 255;

const GetPercentValue = (percent, value) => {
    return value * percent / 100;
};

function RGBToCMY(red, green, blue) {
    return [maxRGB - red, maxRGB - green, maxRGB - blue];
}

function CMYKToRGB(cyan, magenta, yellow, black) {
    let cyanValue = GetPercentValue(cyan, maxRGB);
    let magentaValue = GetPercentValue(magenta, maxRGB);
    let yellowValue = GetPercentValue(yellow, maxRGB);
    let blackValue = GetPercentValue(black, 1);

    let R = Math.floor((maxRGB - cyanValue) * (1 - blackValue));
    let G = Math.floor((maxRGB - magentaValue) * (1 - blackValue));
    let B = Math.floor((maxRGB - yellowValue) * (1 - blackValue)); 

    return [R, G, B]
}

function  HSLToRGB(hue, saturation, light) {
    let l = GetPercentValue(light, 1);

    let c = (1 - Math.abs(2*l - 1)) * saturation;
    let x = c * (1 - Math.abs( (hue / 60) % 2 - 1));
    let m = l - c / 2;

    let tempRGB = [c, x, 0];

    let R = Math.floor( (tempRGB[0] + m) * maxRGB);
    let G = Math.floor( (tempRGB[1] + m) * maxRGB);
    let B = Math.floor( (tempRGB[2] + m) * maxRGB);

    return [R, G, B];
}

export { CMYKToRGB, HSLToRGB, RGBToCMY };