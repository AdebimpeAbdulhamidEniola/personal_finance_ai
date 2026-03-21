"use client"


//Charts for expenses categories
import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, Pie, PieChart, XAxis } from "recharts"
import { useTransactionsInfo } from "@/hooks/use-dashboard"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"



const chartConfig = {
  amount: {
    label: "Amount",
  },
  housing: {
    label: "Housing",
    color: "var(--chart-1)",
  },
  food: {
    label: "Food",
    color: "var(--chart-2)",
  },
  transport: {
    label: "Transport",
    color: "var(--chart-3)",
  },
  utilities: {
    label: "Utilities",
    color: "var(--chart-4)",
  },
  entertainment: {
    label: "Entertainment",
    color: "var(--chart-5)",
  },
  other: {
    label: "Other",
    color: "hsl(var(--muted-foreground))",
  },
} satisfies ChartConfig

export const ChartPieLabelList = () => {
  //Get and put all expenses in an array
  const { data: Transactions } = useTransactionsInfo();
  const expenses = Transactions?.filter((t: any) => t.type === "EXPENSE");

  //Get all transactions in separate category and format
  const chartData = Object.entries(
    expenses?.reduce((acc: any, t: any) => {
      const category = t.category || "Other";
      acc[category] = (acc[category] || 0) + Number(t.amount);
      return acc;
    }, {} as Record<string, number>) || {}
  ).map(([category, amount]) => ({
    category,
    amount,
    fill: `var(--color-${category.toLowerCase()})`
  }));

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Expenses by Category</CardTitle>
        <CardDescription>Your recent spending breakdown</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="amount" hideLabel />}
            />
            <Pie data={chartData} dataKey="amount" nameKey="category">
              <LabelList
                dataKey="category"
                className="fill-background"
                stroke="none"
                fontSize={12}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}

const lineChartConfig = {
  amount: {
    label: "Expenses",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export const ChartLineLinear = () => {
  const { data: Transactions } = useTransactionsInfo();
  
  const expenses = Transactions?.filter((t: any) => t.type === "EXPENSE") || [];

  const sortedExpenses = [...expenses].sort(
    (a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  const chartData = sortedExpenses.map((t: any) => {
    const date = new Date(t.createdAt);
    return {
      displayDate: date.toLocaleDateString('default', { month: 'short', day: 'numeric' }) + " " + date.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' }),
      amount: Number(t.amount),
      category: t.category || "Other"
    };
  });

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Expense Timeline</CardTitle>
        <CardDescription>Your individual expenses plotted over time</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer config={lineChartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="displayDate"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.split(' ')[0]} // Only show date on axis to avoid crowding
            />
            <ChartTooltip
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="rounded-lg border bg-background p-3 shadow-md">
                      <div className="flex flex-col gap-2">
                        <span className="text-xs uppercase text-muted-foreground font-semibold">
                          {data.displayDate}
                        </span>
                        <div className="flex items-center gap-3 font-medium text-sm text-foreground">
                          <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--chart-1)" }} />
                          <span className="capitalize">{data.category}</span>
                          <span className="ml-auto font-mono">#{data.amount}</span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              dataKey="amount"
              type="monotone"
              stroke="var(--color-amount)"
              strokeWidth={2}
              connectNulls={true}
              dot={{ r: 4, fill: "var(--color-amount)" }}
              activeDot={{ r: 6 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
