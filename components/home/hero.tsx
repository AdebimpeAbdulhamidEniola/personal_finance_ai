import { Button } from "../ui/button";
import { User } from "lucide-react";

const Hero = () => {
  
  return (
    <section className="bg-[#faf8fc] px-4 py-8 md:py-16 lg:py-24 max-w-8xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        {/* Left Side: Copy & Calls to Action */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A]">
            Understand Your <br className="hidden md:block" />
            <span className="text-primary text-[#2563EB]">Money with AI</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
            FinAI helps you see where your money goes, spot bad habits, and plan
            better. Track what you earn and spend, view simple monthly summaries,
            and get clear suggestions on how to save more.
          </p>

          <Button
            size="lg"
            className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/30"
          >
            Get Started Free
          </Button>

          <div className="flex items-center gap-3 mt-4">
            <div className="flex -space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-blue-100 text-blue-600">
                <User size={20} />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-green-100 text-green-600">
                <User size={20} />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-purple-100 text-purple-600">
                <User size={20} />
              </div>
            </div>
            <p className="text-sm text-slate-500">
              Trusted by{" "}
              <span className="font-semibold text-slate-800">50+</span> users
            </p>
          </div>
        </div>

        {/* Right Side: Image / Chart */}
        <div className="flex-1 w-full bg-transparent flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative w-full max-w-2xl">
            {/* The chart image */}
            <img
              src="/hero-chart.png"
              alt="FinTrack Dashboard Preview"
              className="w-full h-auto drop-shadow-2xl object-contain lg:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
