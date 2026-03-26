"use client";

import React, { useState } from "react";

export function InvestmentCalculator() {
  const [initialAmount, setInitialAmount] = useState<number>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [years, setYears] = useState<number>(10);
  const [returnRate, setReturnRate] = useState<number>(7);

  const calculateFutureValue = () => {
    const r = returnRate / 100 / 12;
    const n = years * 12;
    const futureValue =
      initialAmount * Math.pow(1 + r, n) +
      monthlyContribution * ((Math.pow(1 + r, n) - 1) / r);
    return futureValue.toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h3 className="mb-4 font-heading text-xl font-bold text-foreground">Dad's Investment Calculator</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-medium text-foreground">
          Initial Investment ($)
          <input
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(Number(e.target.value))}
            className="rounded-md border bg-background px-3 py-2"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-foreground">
          Monthly Contribution ($)
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            className="rounded-md border bg-background px-3 py-2"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-foreground">
          Years to Grow
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="rounded-md border bg-background px-3 py-2"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-foreground">
          Expected Return Rate (%)
          <input
            type="number"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="rounded-md border bg-background px-3 py-2"
          />
        </label>
      </div>
      <div className="mt-6 rounded-lg bg-primary/10 p-4 text-center">
        <p className="text-sm font-medium text-foreground">Estimated Future Value</p>
        <p className="font-heading text-3xl font-bold text-primary">{calculateFutureValue()}</p>
      </div>
    </div>
  );
}
