import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Target, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type CardTrend = {
  value: string;
  label: string;
  isPositive?: boolean;
  isSpecial?: boolean;
};

type SummaryCardProps = {
  title: string;
  value: string;
  trend: CardTrend;
  icon: LucideIcon;
  iconColors: string;
  trendColors: string;
};

export const SummaryCard = ({
  title,
  value,
  trend,
  icon: Icon,
  iconColors,
  trendColors,
}: SummaryCardProps) => {
  return (
    <Card className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden">
        <motion.div
          className="h-full w-[200%]"
          style={{
            background: "linear-gradient(90deg, transparent, #3b82f6, #10b981, #3b82f6, transparent)",
            backgroundSize: "50% 100%"
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <CardHeader className="pt-6 flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {title}
        </CardTitle>
        <div className={cn("p-2 rounded-lg", iconColors)}>
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          {value}
        </div>
        <div className="flex items-center gap-2">
          <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold", trendColors)}>
            {trend.isSpecial
              ? <Target className="h-3 w-3 mr-0.5" />
              : trend.isPositive
                ? <ArrowUpRight className="h-3 w-3" />
                : <ArrowDownRight className="h-3 w-3" />
            }
            {trend.value}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">{trend.label}</span>
        </div>
      </CardContent>
    </Card>
  );
}