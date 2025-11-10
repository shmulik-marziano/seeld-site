/**
 * Pension Projection Calculations
 * Based on Israeli market standards
 */

export interface PensionInputs {
  currentAge: number;
  retirementAge: number;
  currentBalance: number;
  monthlyEmployeeDeposit: number;
  monthlyEmployerDeposit: number;
  expectedAnnualReturn: number; // % (e.g., 5)
  inflationRate: number; // % (e.g., 2)
  currentMonthlyIncome?: number; // For replacement rate calculation
}

export interface PensionProjection {
  currentAge: number;
  retirementAge: number;
  currentBalance: number;
  monthlyEmployeeDeposit: number;
  monthlyEmployerDeposit: number;
  expectedAnnualReturn: number;
  inflationRate: number;

  // Calculated values
  yearsToRetirement: number;
  totalAtRetirement: number;
  monthlyPension: number;
  replacementRate: number; // % of current income
  lifeExpectancy: number;
  totalLifetimePayout: number;

  // Additional insights
  totalContributed: number;
  totalGrowth: number;
  growthPercentage: number;
}

/**
 * Calculate pension projection at retirement
 */
export function calculatePensionProjection(
  inputs: PensionInputs
): PensionProjection {
  const yearsToRetirement = inputs.retirementAge - inputs.currentAge;
  const months = yearsToRetirement * 12;
  const monthlyReturn = inputs.expectedAnnualReturn / 100 / 12;
  const totalMonthlyDeposit =
    inputs.monthlyEmployeeDeposit + inputs.monthlyEmployerDeposit;

  // Future value of current balance
  let futureValueOfCurrent =
    inputs.currentBalance * Math.pow(1 + monthlyReturn, months);

  // Future value of monthly deposits (annuity formula)
  let futureValueOfDeposits = 0;
  if (monthlyReturn > 0) {
    futureValueOfDeposits =
      totalMonthlyDeposit *
      ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn);
  } else {
    futureValueOfDeposits = totalMonthlyDeposit * months;
  }

  const totalAtRetirement = futureValueOfCurrent + futureValueOfDeposits;

  // Monthly pension using withdrawal rate
  // Israeli standard: ~4% annual withdrawal (adjusted for longevity)
  const withdrawalRate = 0.04;
  const monthlyPension = (totalAtRetirement * withdrawalRate) / 12;

  // Life expectancy (Israeli average: ~83)
  const lifeExpectancy = 83;
  const pensionYears = lifeExpectancy - inputs.retirementAge;
  const totalLifetimePayout = monthlyPension * 12 * pensionYears;

  // Calculate replacement rate if income provided
  const replacementRate = inputs.currentMonthlyIncome
    ? (monthlyPension / inputs.currentMonthlyIncome) * 100
    : 0;

  // Calculate total contributed and growth
  const totalContributed =
    inputs.currentBalance + totalMonthlyDeposit * months;
  const totalGrowth = totalAtRetirement - totalContributed;
  const growthPercentage =
    totalContributed > 0 ? (totalGrowth / totalContributed) * 100 : 0;

  return {
    ...inputs,
    yearsToRetirement,
    totalAtRetirement: Math.round(totalAtRetirement),
    monthlyPension: Math.round(monthlyPension),
    replacementRate: Math.round(replacementRate * 10) / 10, // 1 decimal
    lifeExpectancy,
    totalLifetimePayout: Math.round(totalLifetimePayout),
    totalContributed: Math.round(totalContributed),
    totalGrowth: Math.round(totalGrowth),
    growthPercentage: Math.round(growthPercentage * 10) / 10, // 1 decimal
  };
}

/**
 * Calculate pension for different retirement ages (scenarios)
 */
export function calculateMultipleScenarios(
  baseInputs: PensionInputs,
  retirementAges: number[]
): PensionProjection[] {
  return retirementAges.map((age) =>
    calculatePensionProjection({
      ...baseInputs,
      retirementAge: age,
    })
  );
}

/**
 * Calculate age from date of birth
 */
export function calculateAge(dateOfBirth: Date): number {
  const today = new Date();
  let age = today.getFullYear() - dateOfBirth.getFullYear();
  const monthDiff = today.getMonth() - dateOfBirth.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())
  ) {
    age--;
  }

  return age;
}

/**
 * Format currency in ILS
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("he-IL", {
    style: "currency",
    currency: "ILS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format percentage
 */
export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}
