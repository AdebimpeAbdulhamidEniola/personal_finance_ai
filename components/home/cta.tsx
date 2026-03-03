"use client";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const CTA = () => {
  return (
    <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
      <motion.div
        className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[2rem] p-8 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-[80px]" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-[80px]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Ready to feel in control of your money?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Start tracking your income and expenses in one place and let AI give
            you simple tips to save more and worry less.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-[#2563EB] hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-900/50 w-full sm:w-auto group"
              >
                Get Started for Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/signin">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg rounded-xl w-full sm:w-auto transition-colors"
              >
                Sign In to Dashboard
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            No credit card required. Free forever plan available.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
