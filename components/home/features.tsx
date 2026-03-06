"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Wallet, TrendingUp, Lock } from "lucide-react";
import { motion } from "motion/react";

// Define the type for feature items
interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgClass: string;
  iconTextClass: string;
}

const featuresData: FeatureItem[] = [
  {
    id: "stay-safe",
    title: "Stay Safe",
    description:
      "Your account is protected so only you can see your money details. We keep your information private and secure.",
    icon: <Lock className="w-6 h-6" />,
    iconBgClass: "bg-[var(--finance-blue-50)]",
    iconTextClass: "text-[var(--finance-primary-blue)]", // Primary blue
  },
  {
    id: "see-every-naira",
    title: "See Every Naira",
    description:
      "Write down what you earn and what you spend, and FinAI turns it into clear monthly summaries and simple charts you can understand at a glance.",
    icon: <TrendingUp className="w-6 h-6" />,
    iconBgClass: "bg-[var(--finance-purple-50)]",
    iconTextClass: "text-[var(--finance-purple)]", // Purple
  },
  {
    id: "smart-advice",
    title: "Smart Advice",
    description:
      "Let AI act like a friendly money coach, showing you bad habits, where you can cut costs, and how to move closer to your savings goals.",
    icon: <Wallet className="w-6 h-6" />,
    iconBgClass: "bg-[var(--finance-green-50)]",
    iconTextClass: "text-[var(--finance-green)]", // Green
  },
];

const gridVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto bg-[#ffffff]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6">
          Everything you need to manage your money
        </h2>
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
          Create an account, track your spending and income, and let AI help you
          understand your money so you can make better decisions every month.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={gridVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {featuresData.map((feature, index) => (
          <motion.div
            key={feature.id}
            variants={cardVariant}
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 rounded-2xl flex flex-col items-start p-2 h-full">
              <CardHeader className="pb-4 w-full">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.iconBgClass} ${feature.iconTextClass}`}
                >
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-[#0F172A]">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-500 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
