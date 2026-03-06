import { User } from "lucide-react";
import Image from "next/image";

const SignupSidePanel = () => {
  return (
    <div 
      className="hidden md:flex md:flex-col justify-between md:w-1/2 min-h-screen text-white relative overflow-hidden p-8 lg:p-12"
      style={{
        background: "var(--finance-sidebar-gradient)",
      }}
    >
      {/* Top Section - Logo */}
      <div className="flex items-center mb-20">
        <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
          <Image
            src="/Background.png"
            alt="FinAI logo"
            fill
            className="object-contain p-1"
          />
        </div>
        <span className="ml-4 text-lg font-semibold text-slate-100">
          FinAI
        </span>
      </div>

      {/* Middle Section - Headline */}
      <div className="max-w-md space-y-8 flex-1 flex flex-col justify-center">
        <h1 className="text-2xl lg:text-5xl font-extrabold leading-tight">
          Master your money,
          <br />
          build your future.
        </h1>
        <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
          Join people who are taking control of their income, expenses, and
          savings goals with simple tracking and AI-powered guidance.
        </p>
        
        {/* Social Proof */}
        <div className="flex items-center gap-4 mt-16">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
              <User className="w-5 h-5 text-slate-200" />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
              <User className="w-5 h-5 text-slate-200" />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-sm font-medium text-slate-100 z-10">
              +2k
            </div>
          </div>
          <p className="text-sm lg:text-base text-slate-400">
            Trusted by people improving their finances.
          </p>
        </div>
      </div>

      {/* Bottom Section - Footer */}
      <div className="mt-20">
        <p className="text-xs text-slate-500">
          © 2026 FinAI. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SignupSidePanel;