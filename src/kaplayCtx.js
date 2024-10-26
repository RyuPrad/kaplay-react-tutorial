import kaplay from "kaplay";

export default function initKaplay() {
    return kaplay({
        width: 1920,
        height: 1080,
        letterbox: true,
        global: false,
        debug: true, // ! Put back to false in PROD
        debugKey: 'f2',
        canvas: document.getElementById("game"),
        pixelDensity: devicePixelRatio
    });
}