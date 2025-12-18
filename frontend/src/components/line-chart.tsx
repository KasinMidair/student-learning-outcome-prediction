"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EnrollmentData {
  name: string;
  score: number;
}

interface EnrollmentLineChartProps {
  title: string;
  data: EnrollmentData[];
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

export function CustomLineChart({ title, data }: EnrollmentLineChartProps) {
  return (
    <Card className="col-span-1 lg:col-span-2 bg-[linear-gradient(to_bottom,#2A2C2B_10%,#323734_100%)] border-0 shadow-xl shadow-black/30 ">
      <CardHeader>
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-[80%] w-full pl-0 pr-10 ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#636864ff" />
            <XAxis
              dataKey="name"
              stroke="#fefeffff"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#f6f6ffff"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#fbbf24"
              strokeWidth={2}
              dot={{ r: 4, fill: "#fbbf24" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
