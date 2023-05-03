'use strict';

const v1 = 42;

const v2 = 42.19;

const v3 = true;

const v4 = 'Hello';

const v5 = null;

const v6 = undefined;

const v7 = { company: 'Microsoft', symbol: 'MSFT', price: 232.04 };

const v8 = ['MSFT', 'ORCL', 'TDC', 'SPLK', 'SNOW'];

const v9 = [232.04, 67.08, 44.98, 137.55, 235.8];

const v10 = JSON.stringify(v9);

const v11 = JSON.parse(v10);

for (let i=1; i < 12; i++) {
    let v = 'v' + i;
    console.log(`v${i}:` + typeof v);
}

