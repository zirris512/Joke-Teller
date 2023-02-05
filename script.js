import { getJokes } from "./getJokes.js";

const button = document.querySelector("#button");

button.addEventListener("click", getJokes);
