export default class PriceQuotation {
    constructor(machineDepreciation, filament, hour){
        this.id = `priceQuotation_${this.timeStamp}`;
        this.machineDepreciation = machineDepreciation;
        this.filament = filament;
        this.hour = hour;
        this.timeStamp = new Date().now;

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