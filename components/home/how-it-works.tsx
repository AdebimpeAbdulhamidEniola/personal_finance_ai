"use client";
import React from "react";
import { motion } from "motion/react";
import { CreditCard, Bot, TrendingUp } from "lucide-react";

interface StepItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgClass: string;
  iconTextClass: string;
}

const stepsData: StepItem[] = [
  {
    id: "step-1",
    title: "1. Create your account",
    description:
      "Sign up with your email in a few seconds so you have one simple place to manage your money.",
    icon: <CreditCard className="w-8 h-8" />,
    iconBgClass: "bg-blue-100",
    iconTextClass: "text-[#2563EB]",
  },
  {
    id: "step-2",
    title: "2. Add what you earn and spend",
    description:
      "Write down your income, bills, food, transport, and other expenses. FinAI keeps everything organised for you.",
    icon: <Bot className="w-8 h-8" />,
    iconBgClass: "bg-purple-100",
    iconTextClass: "text-[#9333ea]",
  },
  {
    id: "step-3",
    title: "3. Get simple tips from AI",
    description:
      "See clear summaries and get easy-to-follow advice on how to save more and avoid overspending.",
    icon: <TrendingUp className="w-8 h-8" />,
    iconBgClass: "bg-green-100",
    iconTextClass: "text-[#16a34a]",
  },
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HowItWorks = () => {
  return (
    <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto bg-[#faf8fc] rounded-3xl my-10 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6">
          How FinAI works for you
        </h2>
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
          FinAI turns your day‑to‑day money notes into simple charts and
          friendly guidance, in three easy steps.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Connector Line (Desktop Only) */}
        <div className="hidden md:block absolute top-[45px] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 z-0" />

        {stepsData.map((step) => (
          <motion.div
            key={step.id}
            variants={itemVariant}
            className="flex flex-col items-center text-center relative z-10"
          >
            <div
              className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-8 shadow-lg ${step.iconBgClass} ${step.iconTextClass} transition-transform hover:scale-105 duration-300`}
            >
              {step.icon}
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              {step.title}
            </h3>
            <p className="text-base text-slate-500 leading-relaxed max-w-xs">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HowItWorks;
