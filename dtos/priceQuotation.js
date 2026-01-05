export default class PriceQuotation {
    constructor(filament, hours, workedHours, isNoProfit, timeStamp){
        this.id = `priceQuotation_${timeStamp}`;
        this.filament = filament;
        this.hours = hours;
        this.workedHours = workedHours;
        this.isNoProfit = isNoProfit;
        this.timeStamp = timeStamp;

        
        this.machineDepreciation = '';
        
        const calculate = () => {
            let res = [];

            res.push({resWithProfit: 1});

            if(isNoProfit){
                res.push({resWithNoProfit: 2});
            }

            return res;
        }
    }
}