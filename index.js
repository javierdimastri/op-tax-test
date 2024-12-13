import { countAnnualTaxableIncome } from './util/CountTaxUtil.js';
import { stdin, stdout } from 'process';

stdout.write('Type Monthly Income: ');

stdin.on("data", data => {
const annualTaxableIncome = data * 12;

console.log(`Annual Taxable Income: ${annualTaxableIncome}`);
console.log(`Annual Tax on this Income: ${countAnnualTaxableIncome(annualTaxableIncome)}`);
process.exit(0);
});
