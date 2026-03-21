"use client";

import { motion } from "motion/react";
import { SummaryCards } from "./summary-cards";
import { DashboardHeader } from "./dashboard-header";
import { ChartPieLabelList, ChartLineLinear } from "./charts";
import { RecentTransactions } from "./recent-transactions";

export default function Dashboard() {
  return (
    <div className="p-6 lg:p-10 space-y-8 animate-in fade-in duration-700">
    
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <SummaryCards />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <ChartPieLabelList />
        <ChartLineLinear />
      </motion.div>

        <DashboardHeader />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <RecentTransactions />
      </motion.div>
    </div>
  );
}
