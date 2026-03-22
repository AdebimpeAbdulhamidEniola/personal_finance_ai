"use client";

import { motion } from "framer-motion";
import { useAiInsights, useBudget } from "@/hooks/use-ai";
import { InsightsSection } from "./insights-section";
import { BudgetSection } from "./budget-section";
import { AiInsightsHeader } from "./ai-insights-header";

export function AiInsightsView() {
  const insightsQuery = useAiInsights();
  const budgetQuery = useBudget();

  return (
    <div className="p-6 lg:p-10 space-y-8 animate-in fade-in duration-700">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        <AiInsightsHeader />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <InsightsSection
          data={insightsQuery.data}
          isLoading={insightsQuery.isLoading}
          isError={insightsQuery.isError}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <BudgetSection
          data={budgetQuery.data}
          isLoading={budgetQuery.isLoading}
          isError={budgetQuery.isError}
        />
      </motion.div>
    </div>
  );
}
