"use client";

import { motion } from "framer-motion";
import { Brain, RefreshCw, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AiInsightsHeader() {
  return (
    <div className="space-y-6">
      {/* Header Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <Brain className="h-8 w-8 text-blue-600" />
          AI Financial Insights
        </h1>
        <p className="text-gray-600 text-lg">
          Get personalized financial advice and budget recommendations powered by AI
        </p>
      </motion.div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Smart Analysis</p>
                  <p className="text-blue-900 font-semibold">AI-Powered</p>
                </div>
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium">Budget Planning</p>
                  <p className="text-green-900 font-semibold">Optimized</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Real-time</p>
                  <p className="text-purple-900 font-semibold">Updated</p>
                </div>
                <RefreshCw className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gray-50 p-6 rounded-lg border border-gray-200"
      >
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Brain className="h-6 w-6 text-blue-600" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">How AI Insights Work</h3>
            <div className="text-gray-600 space-y-1">
              <p>• Analyzes your spending patterns and income trends</p>
              <p>• Provides personalized financial recommendations</p>
              <p>• Creates optimized budget allocations based on your habits</p>
              <p>• Offers actionable tips to improve your financial health</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
