"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomLegend from "@/components/custom-legend";

interface PieChartItem {
  name: string;
  value: number;
  color: string;
}

interface OutcomePieChartProps {
  data: PieChartItem[];
  tittle: string;
}

export function CustomPieChart({ data, tittle }: OutcomePieChartProps) {
  return (
    <Card className="bg-[linear-gradient(to_bottom,#2A2C2B_10%,#323734_100%)] border-0 shadow-xl shadow-black/30">
      <CardHeader>
        <CardTitle className="text-xl font-medium">{tittle}</CardTitle>
      </CardHeader>
      <CardContent className=" h-[210px]  relative border-0 ">
        <div className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                className="outline-none focus:outline-none"
                data={data}
                cx="40%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                content={<CustomLegend />}
                layout="vertical"
                align="right"
                verticalAlign="middle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
