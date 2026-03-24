import React from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", income: 5240, expenses: 3200 },
  { month: "February", income: 4800, expenses: 2900 },
  { month: "March", income: 6100, expenses: 3500 },
  { month: "April", income: 5500, expenses: 2800 },
  { month: "May", income: 6200, expenses: 4100 },
  { month: "June", income: 5900, expenses: 3300 },
]

const chartConfig = {
  income: {
    label: "Income",
    color: "#14b8a6",
  },
  expenses: {
    label: "Expenses",
    color: "#fbbf24",
  },
}

const ChartStat = () => {
  return (
    <Card className='mb-6'>  {/* Changed from my-8 to mb-6 */}
      <CardHeader className="pb-4">  {/* Added pb-4 to reduce bottom padding */}
        <CardTitle>Working Capital</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      
     <CardContent className="pb-2">
      <ChartContainer config={chartConfig} className="w-full h-[200px]">
        <LineChart
          data={chartData}
          margin={{ left: 10, right: 30, top: 5, bottom: 5 }}
        >
          <CartesianGrid
            vertical={false}
            stroke="#f0f0f0"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fontSize: 11, fill: '#6b7280' }}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            yAxisId="income"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            domain={[4500, 6500]}
            ticks={[5000, 6000]}
            tick={{ fontSize: 11, fill: '#14b8a6' }}
            tickFormatter={(value) => `$${(value / 1000)}k`}
          />
          <YAxis
            yAxisId="expenses"
            orientation="right"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            domain={[2500, 4500]}
            ticks={[3000, 4000]}
            tick={{ fontSize: 11, fill: '#fbbf24' }}
            tickFormatter={(value) => `$${(value / 1000)}k`}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent />}
          />
          <Line
            yAxisId="income"
            dataKey="income"
            type="natural"
            stroke="#14b8a6"
            strokeWidth={2}
            dot={false}
          />
          <Line
            yAxisId="expenses"
            dataKey="expenses"
            type="natural"
            stroke="#fbbf24"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
</CardContent>
    </Card>
  )
}

export default ChartStat