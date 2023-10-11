// 1 First
const invoice1 = 275;
const invoiceValue1 = invoice1 >= 50 && invoice1 <= 300 ? 0.15 : 0.2;
const tips1 = invoice1 * invoiceValue1;
const totalValue1 = invoice1 + tips1;

// Display
const row1 = `Invoice ${invoice1}, tips ${tips1}, Total sum ${totalValue1}`;
console.log(row1);

// 2 Second
const invoice2 = 40;
const invoiceValue2 = invoice2 >= 50 && invoice2 <= 300 ? 0.15 : 0.2;
const tips2 = invoice2 * invoiceValue2;
const totalValue2 = invoice2 + tips2;

const row2 = `Invoice ${invoice2}, tips ${tips2}, Total sum ${totalValue2}`;
console.log(row2);

// 3 Third
const invoice3 = 430;
const invoiceValue3 = invoice3 >= 50 && invoice3 <= 300 ? 0.15 : 0.2;
const tips3 = invoice3 * invoiceValue3;
const totalValue3 = invoice3 + tips3;

const row3 = `Invoice ${invoice3}, tips ${tips3}, Total sum ${totalValue3}`;
console.log(row3);