export default class PriceQuotation {
    constructor(name, phone, filament, hours, workedHours, timeStamp){
        this.id = `priceQuotation_${timeStamp}`;
        this.name = name;
        this.phone = phone;
        this.filament = filament;
        this.hours = hours;
        this.workedHours = workedHours;
        this.timeStamp = timeStamp;

        const results = this._calculate();
        this.value = results.cost;
        this.valueProfit = results.sell;
    }

    _calculate() {
        const base = ((0.3 * this.hours) + (0.15 * this.filament) + (0.33 * this.hours)) * 0.05 + (7 * this.workedHours);

        const total = this.isNoProfit ? base : base * 2;

        return {
            cost: base.toFixed(2),
            sell: total.toFixed(2)
        }
    }

}