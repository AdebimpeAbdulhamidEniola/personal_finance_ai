"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, Wallet, Target, PiggyBank } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface BudgetRecommendation {
  category: string;
  suggestedLimit: number;
  reason: string;
}

interface BudgetData {
  totalBudget: number;
  recommendations: BudgetRecommendation[];
}

interface BudgetSectionProps {
  data?: any;
  isLoading: boolean;
  isError: boolean;
}

export function BudgetSection({ data, isLoading, isError }: BudgetSectionProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-48" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-8 w-32" />
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-2 w-full" />
                <Skeleton className="h-3 w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isError || !data?.data) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            Budget Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500">Unable to load budget recommendations. Please try again later.</p>
        </CardContent>
      </Card>
    );
  }

  const budgetData: BudgetData = data.data;

  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      "Food": <PiggyBank className="h-4 w-4" />,
      "Utilities": <Wallet className="h-4 w-4" />,
      "Entertainment": <Target className="h-4 w-4" />,
      "Housing": <Wallet className="h-4 w-4" />,
      "Rent": <Wallet className="h-4 w-4" />,
      "Emergency Fund": <PiggyBank className="h-4 w-4" />,
    };
    return iconMap[category] || <Wallet className="h-4 w-4" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      "Food": "bg-orange-100 text-orange-800",
      "Utilities": "bg-blue-100 text-blue-800",
      "Entertainment": "bg-purple-100 text-purple-800",
      "Housing": "bg-green-100 text-green-800",
      "Rent": "bg-green-100 text-green-800",
      "Emergency Fund": "bg-yellow-100 text-yellow-800",
    };
    return colorMap[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5" />
          Budget Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Total Budget Overview */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Total Monthly Budget</h3>
              <p className="text-3xl font-bold text-blue-600">
                #{budgetData.totalBudget.toLocaleString()}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Wallet className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </motion.div>

        {/* Budget Recommendations */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Category Breakdown</h3>
          <div className="space-y-3">
            {budgetData.recommendations.map((recommendation, index) => {
              const percentage = (recommendation.suggestedLimit / budgetData.totalBudget) * 100;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-4 bg-white border border-gray-200 rounded-lg space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-100 p-2 rounded-full">
                        {getCategoryIcon(recommendation.category)}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{recommendation.category}</h4>
                        <Badge className={getCategoryColor(recommendation.category)}>
                          #{recommendation.suggestedLimit.toLocaleString()}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        {percentage.toFixed(1)}% of budget
                      </p>
                    </div>
                  </div>
                  
                  <Progress value={percentage} className="h-2" />
                  
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded border-l-4 border-blue-200">
                    {recommendation.reason}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Budget Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-green-50 p-4 rounded-lg border border-green-200"
        >
          <div className="flex items-start gap-3">
            <Target className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Budget Summary</h3>
              <p className="text-green-800 text-sm">
                This budget allocates your #{budgetData.totalBudget.toLocaleString()} monthly income 
                across {budgetData.recommendations.length} categories to help you manage expenses 
                and build savings effectively.
              </p>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
