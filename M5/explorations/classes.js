'use strict'

class FinancialInstrument {

    // static properties and methods are accessed by prefizing them with the name of the class ex: FinancialInstruments.DISCOUNT_PCT
    static DISCOUNT_PCT = 20;
    
    static discountedPrice(price) {
        return this.price * (100 - this.DISCOUNT_PCT) / 100;
    }

    constructor(company, symbol, price) {
        this.company = company;
        this.symbol = symbol;
        this.price = price;
    }

    get discountedPrice() {
        return this.price * (100 - this.DISCOUNT_PCT) / 100;
    };
    
}

class Stock extends FinancialInstrument {

    constructor(company, symbol, price, exchange) {
        super(company, symbol, price);
        this.exchange = exchange;
    }
}

// generic object
let s1 = { company: 'Splunk', symbol: 'SPLK', price: 137.55 };

// FinancialInstrument type object
let fininst1 = new FinancialInstrument("Anthill Farm", "AHF", 122200);

// Stock type object
let stock1 = new Stock("Wilder and Co.", "WLDR", 1234, "NYSE");

console.log( + s1);
console.log(fininst1);
console.log(stock1);




