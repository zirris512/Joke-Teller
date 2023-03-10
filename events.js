import { textToSpeech } from "./textToSpeech.js";

// Get jokes from joke api
export async function getJokes() {
    toggleButton(this);
    let joke;
    const JokeUrl =
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

    try {
        const response = await fetch(JokeUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ...${data.delivery}`;
        } else {
            joke = data.joke;
        }
        textToSpeech(joke);
    } catch (err) {
        console.error(err);
    }
}

export function toggleButton(button) {
    button.disabled = !button.disabled;
}
