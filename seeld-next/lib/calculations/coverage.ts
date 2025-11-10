/**
 * Coverage Gap Analysis Calculations
 * Analyzes insurance coverage adequacy based on Israeli standards
 */

export interface CoverageAnalysis {
  currentCoverage: {
    life: number;
    disability: number;
    health: number;
    total: number;
  };
  recommended: {
    life: number;
    disability: number;
    health: number;
    total: number;
  };
  gaps: {
    life: number;
    disability: number;
    health: number;
    total: number;
  };
  adequacyScore: number; // 0-100
  insights: CoverageInsight[];
}

export interface CoverageInsight {
  type: "critical" | "warning" | "good";
  category: "life" | "disability" | "health" | "overall";
  message: string;
  recommendation?: string;
  estimatedCost?: number;
}

/**
 * Analyze coverage gaps for a client
 */
export function analyzeCoverageGaps(
  client: any
): CoverageAnalysis {
  const monthlyIncome = Number(client.monthlyIncome) || 0;
  const annualIncome = Number(client.annualIncome) || monthlyIncome * 12;
  const dependents = client.dependents || 0;

  // Calculate recommended coverage
  const recommendedLife = calculateRecommendedLifeInsurance(
    annualIncome,
    dependents,
    client.maritalStatus
  );

  const recommendedDisability = calculateRecommendedDisabilityInsurance(
    monthlyIncome
  );

  const recommendedHealth = calculateRecommendedHealthInsurance(
    dependents
  );

  // Get current coverage from policies
  const currentLife = getTotalCoverageByType(
    client.policies,
    "LIFE_INSURANCE"
  );
  const currentDisability = getTotalCoverageByType(
    client.policies,
    "DISABILITY_INSURANCE"
  );
  const currentHealth = getTotalCoverageByType(
    client.policies,
    "HEALTH_INSURANCE"
  );

  // Calculate gaps
  const gaps = {
    life: Math.max(0, recommendedLife - currentLife),
    disability: Math.max(0, recommendedDisability - currentDisability),
    health: Math.max(0, recommendedHealth - currentHealth),
    total: 0,
  };

  gaps.total = gaps.life + gaps.disability + gaps.health;

  // Calculate adequacy score (0-100)
  const lifeScore = calculateAdequacyScore(currentLife, recommendedLife);
  const disabilityScore = calculateAdequacyScore(
    currentDisability,
    recommendedDisability
  );
  const healthScore = calculateAdequacyScore(
    currentHealth,
    recommendedHealth
  );

  const adequacyScore = Math.round(
    (lifeScore + disabilityScore + healthScore) / 3
  );

  // Generate insights
  const insights = generateInsights({
    currentLife,
    currentDisability,
    currentHealth,
    recommendedLife,
    recommendedDisability,
    recommendedHealth,
    gaps,
    monthlyIncome,
  });

  return {
    currentCoverage: {
      life: currentLife,
      disability: currentDisability,
      health: currentHealth,
      total: currentLife + currentDisability + currentHealth,
    },
    recommended: {
      life: recommendedLife,
      disability: recommendedDisability,
      health: recommendedHealth,
      total: recommendedLife + recommendedDisability + recommendedHealth,
    },
    gaps,
    adequacyScore,
    insights,
  };
}

/**
 * Calculate recommended life insurance
 * Israeli standard: 8-10x annual income + debts
 */
function calculateRecommendedLifeInsurance(
  annualIncome: number,
  dependents: number,
  maritalStatus?: string | null
): number {
  let multiplier = 8;

  // Adjust based on dependents
  if (dependents >= 3) {
    multiplier = 10;
  } else if (dependents >= 1) {
    multiplier = 9;
  }

  // Single person with no dependents needs less
  if (maritalStatus === "SINGLE" && dependents === 0) {
    multiplier = 5;
  }

  return annualIncome * multiplier;
}

/**
 * Calculate recommended disability insurance
 * Israeli standard: 60-70% of monthly income
 */
function calculateRecommendedDisabilityInsurance(
  monthlyIncome: number
): number {
  return monthlyIncome * 0.65 * 12; // Annual disability coverage
}

/**
 * Calculate recommended health insurance
 * Basic recommendation based on family size
 */
function calculateRecommendedHealthInsurance(dependents: number): number {
  const baseAmount = 50000; // Base for individual
  const perDependent = 30000; // Additional per dependent

  return baseAmount + dependents * perDependent;
}

/**
 * Get total coverage for a specific policy type
 */
function getTotalCoverageByType(
  policies: any[],
  type: string
): number {
  return policies
    .filter((p: any) => p.type === type && p.status === "ACTIVE")
    .reduce((sum: number, p: any) => sum + Number(p.coverageAmount), 0);
}

/**
 * Calculate adequacy score (0-100)
 */
function calculateAdequacyScore(
  current: number,
  recommended: number
): number {
  if (recommended === 0) return 100;
  const score = (current / recommended) * 100;
  return Math.min(100, Math.round(score));
}

/**
 * Generate coverage insights
 */
function generateInsights(data: {
  currentLife: number;
  currentDisability: number;
  currentHealth: number;
  recommendedLife: number;
  recommendedDisability: number;
  recommendedHealth: number;
  gaps: { life: number; disability: number; health: number };
  monthlyIncome: number;
}): CoverageInsight[] {
  const insights: CoverageInsight[] = [];

  // Life insurance insights
  if (data.gaps.life > 0) {
    const coverage = (data.currentLife / data.recommendedLife) * 100;
    if (coverage < 50) {
      insights.push({
        type: "critical",
        category: "life",
        message: `פער משמעותי בביטוח חיים - כיסוי של ${Math.round(coverage)}% בלבד`,
        recommendation: `מומלץ להוסיף כיסוי של ${formatNumber(data.gaps.life)}₪`,
        estimatedCost: Math.round(data.gaps.life * 0.001), // ~0.1% of coverage annually
      });
    } else if (coverage < 80) {
      insights.push({
        type: "warning",
        category: "life",
        message: `כיסוי ביטוח חיים חסר ${Math.round(100 - coverage)}%`,
        recommendation: `שקול הוספת כיסוי של ${formatNumber(data.gaps.life)}₪`,
      });
    }
  } else {
    insights.push({
      type: "good",
      category: "life",
      message: "כיסוי ביטוח חיים מספק",
    });
  }

  // Disability insurance insights
  if (data.gaps.disability > 0) {
    if (data.currentDisability === 0) {
      insights.push({
        type: "critical",
        category: "disability",
        message: "אין כיסוי ביטוח אובדן כושר עבודה",
        recommendation: `מומלץ לרכוש כיסוי של ${formatNumber(data.recommendedDisability / 12)}₪/חודש`,
        estimatedCost: Math.round(data.monthlyIncome * 0.03), // ~3% of income monthly
      });
    } else {
      insights.push({
        type: "warning",
        category: "disability",
        message: "כיסוי אובדן כושר עבודה לא מספיק",
        recommendation: `מומלץ להעלות ל-${formatNumber(data.recommendedDisability / 12)}₪/חודש`,
      });
    }
  } else {
    insights.push({
      type: "good",
      category: "disability",
      message: "כיסוי אובדן כושר עבודה מספק",
    });
  }

  // Health insurance insights
  if (data.gaps.health > 0) {
    insights.push({
      type: "warning",
      category: "health",
      message: "כיסוי בריאות משלים יכול להשתפר",
      recommendation: `שקול הוספת כיסוי של ${formatNumber(data.gaps.health)}₪`,
    });
  } else {
    insights.push({
      type: "good",
      category: "health",
      message: "כיסוי בריאות מספק",
    });
  }

  return insights;
}

/**
 * Format number with thousand separators
 */
function formatNumber(num: number): string {
  return new Intl.NumberFormat("he-IL").format(Math.round(num));
}

/**
 * Calculate monthly premium estimate
 */
export function estimateMonthlyPremium(
  coverageAmount: number,
  policyType: string,
  age: number
): number {
  let rate = 0;

  switch (policyType) {
    case "LIFE_INSURANCE":
      // Very rough estimate: 0.05-0.15% of coverage monthly
      rate = age < 40 ? 0.0005 : age < 50 ? 0.001 : 0.0015;
      break;
    case "DISABILITY_INSURANCE":
      // ~2-4% of monthly benefit
      rate = 0.03;
      break;
    case "HEALTH_INSURANCE":
      // Fixed rates based on coverage
      return coverageAmount > 50000 ? 300 : 200;
    default:
      rate = 0.001;
  }

  return Math.round(coverageAmount * rate);
}
