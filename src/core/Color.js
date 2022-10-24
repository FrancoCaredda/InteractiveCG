import { IsEaquale, IsZero, Max3, Min3 } from "./Utils";

const maxRGB = 255;

const GetPercentValue = (percent, value) => {
    return value * percent / 100;
};

const GetPercent = (value, maxValue) => {
    return value * 100 / maxValue;
}

function RGBToCMYK(red, green, blue) {
    let c = 1 - red / maxRGB;
    let m = 1 - green / maxRGB;
    let y = 1 - blue / maxRGB;
    let k = Min3(c, m, y);
    console.log(k);

    if (IsEaquale(k, 1)) {
        return [0, 0, 0, 100];
    } 

    return [Math.round(GetPercent((c - k) / (1 - k) , 1)), 
            Math.round(GetPercent((m - k) / (1 - k), 1)), 
            Math.round(GetPercent((y - k) / (1 - k), 1)), 
            Math.round(GetPercent(k, 1))];
}

function CMYKToRGB(cyan, magenta, yellow, black) {
    let cyanValue = GetPercentValue(cyan, maxRGB);
    let magentaValue = GetPercentValue(magenta, maxRGB);
    let yellowValue = GetPercentValue(yellow, maxRGB);
    let blackValue = GetPercentValue(black, 1);

    let R = Math.round((maxRGB - cyanValue) * (1 - blackValue));
    let G = Math.round((maxRGB - magentaValue) * (1 - blackValue));
    let B = Math.round((maxRGB - yellowValue) * (1 - blackValue)); 

    return [R, G, B]
}

function RGBToHSL(red, green, blue) {
    const redNorm = red / 255;
    const greenNorm = green / 255;
    const blueNorm = blue / 255;

    let max = Max3(redNorm, greenNorm, blueNorm);
    let min = Min3(redNorm, greenNorm, blueNorm);

    let diff = max - min;

    if (IsZero(diff)) {
        return null;
    }

    let hue = 0;
    let saturation = 0;
    let light = 0.5 * (max + min);

    if (IsEaquale(max, redNorm)) {
        if ((greenNorm >= blueNorm)) {
            hue = 60 * ( (greenNorm - blueNorm) / diff );
        } else {
            hue = 60 * ( (greenNorm - blueNorm) / diff ) + 360;
        }
    } else if (IsEaquale(max, greenNorm)) {
        hue = 60 * ( (blueNorm - redNorm) / diff ) + 120;
    } else {
        hue = 60 * ( (redNorm - greenNorm) / diff ) + 240;
    }

    if (IsZero(light) || IsEaquale(max, min)) {
        saturation = 0;
    } else if (light > 0 && light < 0.5) {
        saturation = (max - min) / (max + min);
    } else {
        saturation = (max - min) / (2 - (max + min));
    }

    return [Math.round(hue), Math.round(GetPercent(saturation, 1)), Math.round(GetPercent(light, 1))];
}

function  HSLToRGB(hue, saturation, light) {
    let l = GetPercentValue(light, 1);

    let c = (1 - Math.abs(2*l - 1)) * saturation;
    let x = c * (1 - Math.abs( (hue / 60) % 2 - 1));
    let m = l - c / 2;

    let tempRGB = [c, x, 0];

    let R = Math.round( (tempRGB[0] + m) * maxRGB);
    let G = Math.round( (tempRGB[1] + m) * maxRGB);
    let B = Math.round( (tempRGB[2] + m) * maxRGB);

    return [R, G, B];
}

export { CMYKToRGB, HSLToRGB, RGBToCMYK, RGBToHSL };