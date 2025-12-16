"use client";

import { Bar, BarChart, XAxis, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { name: "Completeness", value: 85 },
  { name: "Consistency", value: 78 },
];

// Gradient mô phỏng theo hình
const gradients = [
  ["#4ade80", "#22c55e"], // Xanh lá sáng -> đậm
  ["#a3e635", "#4ade80"], // Vàng chanh -> Xanh lá
];

export function QualityBarChart() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white shadow-none h-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-zinc-300">
          Completeness & Consistency
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData} barCategoryGap="30%">
            {/* Định nghĩa Gradient trong SVG */}
            <defs>
              {chartData.map((entry, index) => (
                <linearGradient
                  key={index}
                  id={`barGradient${index}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor={gradients[index][0]}
                    stopOpacity={1}
                  />
                  <stop
                    offset="100%"
                    stopColor={gradients[index][1]}
                    stopOpacity={1}
                  />
                </linearGradient>
              ))}
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              className="text-zinc-500 text-xs translate-y-2"
            />
            <ChartTooltip
              cursor={{ fill: "transparent" }}
              content={<ChartTooltipContent />}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`url(#barGradient${index})`}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
