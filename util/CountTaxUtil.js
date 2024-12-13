const ZERO = 0;
const FIFTY_MILLION = 50000000;
const TWO_HUNDRED_FIFTY_MILLION = 250000000;
const FIVE_HUNDRED_MILLION = 500000000;

const taxRateTier = {
  LOW: {
    taxRate: 0.05,
    tierNumber: 1,
    count: function (input) {
      return _getCountPerTier(this.tierNumber, input, this.taxRate);
    },
  },
  MEDIUM: {
    taxRate: 0.15,
    tierNumber: 2,
    count: function (input) {
      return _getCountPerTier(this.tierNumber, input, this.taxRate);
    },
  },
  HIGH: {
    taxRate: 0.25,
    tierNumber: 3,
    count: function (input) {
      return _getCountPerTier(this.tierNumber, input, this.taxRate);
    },
  },
  OUTLIER: {
    taxRate: 0.3,
    tierNumber: 4,
    count: function (input) {
      return _getCountPerTier(this.tierNumber, input, this.taxRate);
    }
  }
};

export const countAnnualTaxableIncome = (annualIncome) => {
  if (annualIncome > 0 && annualIncome <= FIFTY_MILLION) {
    return taxRateTier['LOW'].count(annualIncome);
  }
  if (annualIncome >= FIFTY_MILLION && annualIncome <= TWO_HUNDRED_FIFTY_MILLION) {
    console.log('assa');
    
    return taxRateTier['MEDIUM'].count(annualIncome);
  }
  if (annualIncome >= TWO_HUNDRED_FIFTY_MILLION && annualIncome < FIVE_HUNDRED_MILLION) {
    return taxRateTier['HIGH'].count(annualIncome);
  }
  return taxRateTier['OUTLIER'].count(annualIncome);;
}

const _getCountPerTier = (tierNumber, input, taxRate) => {
  const divisor = (100 / tierNumber) / 100;
  if (tierNumber === 1) {
    return taxRate * input;
  }

  if (tierNumber === 2) {
    return (divisor * input) * 0.05 + (divisor * input) * taxRate;
  }

  if (tierNumber === 3) {
    return Math.round((0.17 * input) * 0.05  + (0.66 * input) * 0.15 + (0.17 * input) * taxRate);
  }
  
  return (divisor * input) * 0.05 + (divisor * input) * 0.15 + (divisor * input) * 0.25  + (divisor * input) * taxRate;
}
