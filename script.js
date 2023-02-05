import { getJokes, toggleButton } from "./events.js";

const button = document.querySelector("#button");
const audio = document.querySelector("#audio");

audio.addEventListener("ended", () => toggleButton(button));

button.addEventListener("click", getJokes);
