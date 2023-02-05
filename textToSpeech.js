import { VoiceRSS } from "./voiceSDK.js";

export function textToSpeech(text) {
    VoiceRSS.speech({
        key: "<API KEY>",
        src: text,
        hl: "en-us",
        v: "Linda",
        r: 0,
        c: "mp3",
        f: "44khz_16bit_stereo",
        ssml: false,
    });
}
