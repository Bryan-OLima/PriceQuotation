import LocalStorageService from './services/localStorageService.js';
import PriceQuotation from './dtos/priceQuotation.js';
import LoadModule from './modules/loadModule.js';

const form = document.querySelector("form");
const history = document.querySelector(".history");

const data = LocalStorageService();

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    const filament = parseFloat(formData.get("filament"));
    const hours = parseFloat(formData.get("hours"));
    const workedHours = parseFloat(formData.get("workedHours"));
    const timeStamp = Date.now();
    const isNoProfit = formData.get("isNoProfit") === "on";

    const priceQuotation = new PriceQuotation(filament, hours, workedHours, isNoProfit, timeStamp);

    data.set(priceQuotation);

    const test = await LoadModule("historyModue");
    history.innerHTML = test;
});