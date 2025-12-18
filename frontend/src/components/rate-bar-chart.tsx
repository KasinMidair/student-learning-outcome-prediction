"use client";

import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BarChartItem {
  name: string;
  rate: number;
}

interface TopPassRateBarChartProps {
  data: BarChartItem[];
  tittle: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-800 border border-zinc-700 p-2 rounded shadow-md text-xs ">
        <p className="font-semibold mb-1">{label}</p>
        <p style={{ color: payload[0].color }}>
          {payload[0].name}: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

export function RateBarChart({ data, tittle }: TopPassRateBarChartProps) {
  const processedData = useMemo(() => {
    return data.map((item) => ({
      ...item,
      remain: 100 - item.rate,
    }));
  }, [data]);

  return (
    <Card className="bg-[linear-gradient(to_bottom,#2A2C2B_10%,#323734_100%)] border-0 shadow-xl shadow-black/30">
      <CardHeader>
        <CardTitle className="text-xl">{tittle}</CardTitle>
      </CardHeader>
      <CardContent className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={processedData}>
            <defs>
              <linearGradient
                id="colorGradient"
                x1="50%"
                y1="0"
                x2="50%"
                y2="1"
              >
                <stop offset="o%" stopColor="#58D764" />
                <stop offset="100%" stopColor="#FBE947" />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#27272a"
            />
            <XAxis
              dataKey="name"
              stroke="#71717a"
              fontSize={10}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip cursor={{ fill: "#27272a" }} content={<CustomTooltip />} />

            <Bar dataKey="rate" stackId="total" fill="#fbbf24" barSize={30}>
              {processedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill="url(#colorGradient)"
                  fillOpacity={0.8}
                />
              ))}
            </Bar>
            <Bar dataKey="remain" stackId="total" barSize={30}>
              {processedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#ffffff" fillOpacity={0.1} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
