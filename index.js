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
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Cotação salva com sucesso!",
        showConfirmButton: false,
        timer: 1500
    });

    form.reset();

    const test = await LoadModule("historyModule");
    history.innerHTML = test;
});