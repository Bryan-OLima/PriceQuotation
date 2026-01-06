import LocalStorageService from './services/localStorageService.js';
import PriceQuotation from './dtos/priceQuotation.js';
import Modules from './modules/modules.js';


const form = document.querySelector("form");
const history = document.querySelector(".history");
const historyButton = document.querySelector(".button-history");

const data = LocalStorageService();
const modules = await Modules();


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    const name = formData.get("name");
    const phone = formData.get("phone");
    const filament = parseFloat(formData.get("filament"));
    const hours = parseFloat(formData.get("hours"));
    const workedHours = parseFloat(formData.get("workedHours"));
    const timeStamp = Date.now();

    const priceQuotation = new PriceQuotation(name, phone, filament, hours, workedHours, timeStamp);

    console.log(name);
    data.set(priceQuotation);
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Cotação salva com sucesso!",
        showConfirmButton: false,
        timer: 1500
    });
    
    form.reset();
});

console.log(data.getAll());

history.addEventListener('click', async(e) => {
    if (e.target.classList.contains('button-history-close')){
        e.preventDefault();
        history.innerHTML = `<button type="button" class="button-history" style="width: 400px;">Abrir histórico</button>`;
    } 
    else if (e.target.classList.contains('button-history')){
        history.innerHTML = await modules.load('./modules/historyModule.html');

        const quotationList = history.querySelector(".quotation-list");
        if(data.getAll().length === 0) {
            quotationList.innerHTML = `<p>Nenhuma cotação salva ainda.</p>`;
        } else {
            quotationList.innerHTML = data.getAll().map(item => `
               <div class="item-quotation">
                    <div class="item-info">
                        <span class="item-name">${item.name || 'Cliente Sem Nome'}</span>
                        <span class="item-details">
                            item place holder • ${item.filament}g • ${item.value}
                        </span>
                        <span class="item-details">
                            ${item.phone} - ${new Date(item.timeStamp).toLocaleTimeString()}
                        </span>      
                        <span class="item-details">
                            ${new Date(item.timeStamp).toLocaleDateString()} • ${new Date(item.timeStamp).toLocaleTimeString()}
                        </span>      
                    </div>
                    <div class="item-price">
                        R$ ${item.valueProfit || '0.00'}
                    </div>
                </div>
            `).join('');
        }
    }
});