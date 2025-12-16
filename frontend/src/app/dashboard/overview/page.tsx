"use client"; // 👈 QUAN TRỌNG: Bắt buộc phải có để chạy Recharts

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

import { StatCard } from "@/components/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// --- DỮ LIỆU GIẢ LẬP (MOCK DATA) ---

const lineData = [
  { name: "Jan", score: 400 },
  { name: "Feb", score: 300 },
  { name: "Mar", score: 550 },
  { name: "Apr", score: 450 },
  { name: "May", score: 600 },
  { name: "Jun", score: 700 },
];

const pieData = [
  { name: "Passed", value: 75, color: "#4ade80" }, // Green-400
  { name: "Failed", value: 25, color: "#f87171" }, // Red-400
];

const barData = [
  { name: "Mon", rate: 40 },
  { name: "Tue", rate: 60 },
  { name: "Wed", rate: 30 },
  { name: "Thu", rate: 80 },
  { name: "Fri", rate: 55 },
  { name: "Sat", rate: 90 },
  { name: "Sun", rate: 70 },
];

// Custom Tooltip cho Dark Mode
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-800 border border-zinc-700 p-2 rounded shadow-md text-xs text-white">
        <p className="font-semibold mb-1">{label}</p>
        <p style={{ color: payload[0].color }}>
          {payload[0].name}: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

export default function OverviewPage() {
  return (
    <div className="space-y-6 pb-10 ">
      <h1 className="text-2xl font-semibold mb-4 text-zinc-400">Overview</h1>

      {/* Row 1: 4 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Students", val: "3,243", sub: "active in system" },
          { label: "Avg Score", val: "8.4", sub: "+2.1% from last month" },
          { label: "Completion", val: "84%", sub: "courses completed" },
          { label: "Active Now", val: "573", sub: "students online" },
        ].map((item, i) => (
          <StatCard
            key={i}
            value={item.val}
            label={item.label}
            subtext={item.sub}
          />
        ))}
      </div>

      {/* Row 2: Charts (Line Chart & Donut Chart) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart Area - Chiếm 2 phần */}
        <Card className="col-span-1 lg:col-span-2 bg-[linear-gradient(to_bottom,#2A2C2B_10%,#303231_100%)] border-0 text-white shadow-xl shadow-black/30 ">
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Learning outcome distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
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
                  stroke="#fbbf24" /* Yellow-400 */
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#fbbf24" }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Donut Chart Area - Chiếm 1 phần */}
        <Card className="bg-[linear-gradient(to_bottom,#2A2C2B_10%,#303231_100%)] border-0 text-white shadow-xl shadow-black/30">
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Outcome distribution
            </CardTitle>
          </CardHeader>
          <CardContent className=" relative bg-[linear-gradient(to_bottom,#2A2C2B_10%,#303231_100%)] border-0 text-white shadow-xl shadow-black/30">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
            {/* Text ở giữa Donut */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-8">
              <div className="text-center">
                <span className="text-3xl font-bold block text-white">75%</span>
                <span className="text-xs text-zinc-500">Passed</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Row 3: Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pass Rate Gauge (Giả lập bằng số cho đơn giản) */}
        <Card className="bg-[linear-gradient(to_bottom,#2A2C2B_10%,#303231_100%)] border-0 text-white shadow-xl shadow-black/30">
          <CardHeader>
            <CardTitle className="text-sm">Pass Rate Summary</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Vòng tròn trang trí */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-zinc-800"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={377}
                  strokeDashoffset={377 - (377 * 25) / 100} // 25%
                  className="text-green-500 transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-3xl font-bold text-white">25%</span>
              </div>
            </div>
            <p className="text-xs text-zinc-500">Total pass rate this month</p>
          </CardContent>
        </Card>

        {/* Pass Rate Bar Chart */}
        <Card className="bg-[linear-gradient(to_bottom,#2A2C2B_10%,#303231_100%)] border-0 text-white shadow-xl shadow-black/30">
          <CardHeader>
            <CardTitle className="text-sm">Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
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
                <Tooltip
                  cursor={{ fill: "#27272a" }}
                  content={<CustomTooltip />}
                />
                <Bar
                  dataKey="rate"
                  fill="#fbbf24"
                  radius={[4, 4, 0, 0]}
                  barSize={20}
                >
                  {barData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill="url(#colorGradient)" // Nếu muốn gradient thì cần định nghĩa defs, ở đây dùng màu trơn
                      fillOpacity={0.8}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Leaderboard Table */}
        <Card className="bg-[linear-gradient(to_bottom,#2A2C2B_10%,#303231_100%)] border-0 text-white shadow-xl shadow-black/30overflow-hidden">
          <CardHeader className="flex flex-row justify-between items-center pb-2">
            <CardTitle className="text-sm">Leaderboard</CardTitle>
            <Button
              variant="link"
              size="sm"
              className="text-xs text-zinc-400 h-auto p-0"
            >
              Show more
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-zinc-800 hover:bg-transparent">
                  <TableHead className="text-zinc-500 h-8 text-xs font-medium">
                    User Name
                  </TableHead>
                  <TableHead className="text-zinc-500 h-8 text-xs text-right font-medium">
                    Courses
                  </TableHead>
                  <TableHead className="text-zinc-500 h-8 text-xs text-right font-medium">
                    Grade
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3, 4, 5].map((row) => (
                  <TableRow
                    key={row}
                    className="border-zinc-800 hover:bg-zinc-800/50 transition-colors"
                  >
                    <TableCell className="py-2 text-xs text-zinc-300">
                      Nguyen Van A
                    </TableCell>
                    <TableCell className="py-2 text-xs text-right text-zinc-400">
                      40
                    </TableCell>
                    <TableCell className="py-2 text-xs text-right font-bold text-green-400">
                      A
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
