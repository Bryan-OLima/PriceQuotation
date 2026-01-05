import LocalStorageService from './services/localStorageService.js';
import PriceQuotation from './dtos/priceQuotation.js';

const form = document.querySelector("form");

const data = LocalStorageService();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    const filament = parseFloat(formData.get("filament"));
    const hours = parseFloat(formData.get("hours"));
    const workedHours = parseFloat(formData.get("workedHours"));
    const timeStamp = Date.now();
    const isNoProfit = formData.get("isNoProfit") === "on";

    const priceQuotation = new PriceQuotation(filament, hours, workedHours, isNoProfit, timeStamp);

    console.log(isNoProfit);
    console.log(Object.fromEntries(formData), ",", priceQuotation)
});

console.log('aaaa',data.getAll());