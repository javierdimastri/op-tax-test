import { countAnnualTaxableIncome } from './util/CountTaxUtil.js';
import { stdin, stdout } from 'process';

stdout.write('Type Monthly Income: ');

stdin.on("data", data => {
const annualIncome = data * 12;
const annualTaxableIncome = countAnnualTaxableIncome(annualIncome);

console.log(`Annual Taxable Income: ${annualTaxableIncome}`);
process.exit(0);
});
