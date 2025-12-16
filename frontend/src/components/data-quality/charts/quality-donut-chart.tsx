"use client";

import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface QualityDonutProps {
  title: string;
  percent: number;
  label: string;
  color: string; // Mã màu hex chủ đạo
  data: { label: string; value: number; fill: string }[];
}

export function QualityDonutChart({
  title,
  percent,
  label,
  color,
  data,
}: QualityDonutProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white shadow-none h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-zinc-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex items-center gap-4">
        {/* Chart Area */}
        <div className="w-1/2 h-[150px] relative">
          <ChartContainer config={{}} className="h-full w-full">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={data}
                dataKey="value"
                nameKey="label"
                innerRadius={45}
                outerRadius={60}
                strokeWidth={0}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-white text-2xl font-bold"
                          >
                            {percent}%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 20}
                            className="fill-zinc-500 text-[10px] uppercase"
                          >
                            {label}
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>

        {/* Legend Area */}
        <div className="w-1/2 flex flex-col gap-3 text-xs text-zinc-400">
          {data.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.fill }}
              ></span>
              <span className="flex-1 truncate">{item.label}</span>
              <span className="text-zinc-300 font-mono">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
