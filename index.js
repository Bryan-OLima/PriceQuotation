import LocalStorageService from './services/localStorageService.js';

const button = document.querySelector(".button-send");

button.addEventListener("click", () => {
    console.log("clicked")
});

const data = LocalStorageService();

console.log('aaaa',data.getAll());