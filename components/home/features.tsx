"use client"
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
    id: "smart-budgeting",
    title: "Smart Budgeting",
    description:
      "Create custom budgets that adjust to your lifestyle. Our AI suggests limits based on your past spending habits automatically.",
    icon: <Wallet className="w-6 h-6" />,
    iconBgClass: "bg-blue-50",
    iconTextClass: "text-[#2563EB]", // Primary blue
  },
  {
    id: "real-time-tracking",
    title: "Real-time Tracking",
    description:
      "Link your accounts to see every transaction as it happens. We categorize everything instantly so you always know where your money goes.",
    icon: <TrendingUp className="w-6 h-6" />,
    iconBgClass: "bg-purple-50",
    iconTextClass: "text-[#9333ea]", // Purple
  },
  {
    id: "secure-reports",
    title: "Secure Reports",
    description:
      "Bank-level security ensures your financial data is encrypted and safe. Generate detailed PDF reports for tax season or loan applications.",
    icon: <Lock className="w-6 h-6" />,
    iconBgClass: "bg-green-50",
    iconTextClass: "text-[#16a34a]", // Green
  },
];

//Parents rules for framer motion
const gridVariants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
}

const cardVariants = {
    hidden: {opacity: 0, y:30},
    show: {
        opacity:1,
        y:0,
        transition: {duration: 0.5, ease:"easeInOut"}
    }
}


const Features = () => {
  return (
    <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto bg-[#ffffff]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6">
          Everything you need to grow your wealth
        </h2>
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
          Powerful tools to help you manage your money with confidence and
          clarity. No more spreadsheets, no more guessing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <motion.div key={feature.id}
          initial={{opacity: 0 , y:50}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.4, ease: "easeInOut"}}

          whileHover={{scale:1.03, y:-3}}
          whileTap={{scale:0.98}}
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
      </div>
    </section>
  );
};

export default Features;
