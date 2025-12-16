import { Database, Table as TableIcon, Columns } from "lucide-react";
import { StatCard } from "@/components/stat-card"; // Component từ bài trước
import { TheorySection } from "@/components/data-quality/theory-section";
import { QualityBarChart } from "@/components/data-quality/charts/quality-bar-chart";
import { QualityDonutChart } from "@/components/data-quality/charts/quality-donut-chart";

export default function DataQualityPage() {
  return (
    <div className="relative pb-10">
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          label="Dataset"
          value="MOOCCubeX"
          subtext="Online learning data"
          // Lưu ý: StatCard bài trước cần update để nhận icon nếu muốn giống hệt hình
        />
        <StatCard
          label="Number of rows"
          value="2,324,524"
          subtext="Total number of records"
        />
        <StatCard
          label="Number of columns"
          value="181"
          subtext="Total number of properties"
        />
      </div>

      {/* Main "Overview" Container */}
      <div className="bg-[#101012] rounded-3xl p-1 border border-zinc-800/50 relative overflow-hidden">
        {/* Tab Header giả lập */}
        <div className="bg-zinc-900/80 w-fit px-8 py-3 rounded-tl-2xl rounded-tr-2xl text-white font-medium text-sm ml-6 mt-[-4px] relative z-10">
          Overview
        </div>

        {/* Nội dung chính màu xám đậm */}
        <div className="bg-[#1c1c1f] rounded-3xl p-8 pt-10 min-h-[600px] grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-0">
          {/* Góc trái dưới: Glow Effect */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-600/20 blur-[100px] rounded-full pointer-events-none" />

          {/* Quadrant 1: Theory (Top Left) */}
          <TheorySection />

          {/* Quadrant 2: Bar Chart (Top Right) */}
          <QualityBarChart />

          {/* Quadrant 3: Completeness Donut (Bottom Left) */}
          <QualityDonutChart
            title="Overall completeness rate"
            percent={4}
            label="Completeness"
            color="#fbbf24"
            data={[
              { label: "Complete data", value: 4, fill: "#4ade80" }, // Green
              { label: "Incomplete data", value: 96, fill: "#fbbf24" }, // Yellow/Orange
            ]}
          />

          {/* Quadrant 4: Consistency Donut (Bottom Right) */}
          <QualityDonutChart
            title="Overall consistency rate"
            percent={4}
            label="Consistency"
            color="#fcd34d"
            data={[
              { label: "Consistency data", value: 4, fill: "#fcd34d" }, // Lighter Yellow
              { label: "Inconsistency data", value: 96, fill: "#fbbf24" }, // Darker Yellow
            ]}
          />
        </div>
      </div>
    </div>
  );
}
