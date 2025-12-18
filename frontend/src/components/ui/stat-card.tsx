"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  icon: LucideIcon;
}

export function StatCard({ label, value, subtext, icon: Icon }: StatCardProps) {
  return (
    <Card className="relative overflow-hidden border border-zinc-700/30 rounded-2xl bg-[linear-gradient(to_bottom,#2A2C2B_70%,#303231_100%)] shadow-[0_12px_32px_-14px_rgba(0,0,0,0.75)]">
      <CardContent className="relative p-6 pt-5 flex flex-col gap-1 text-white">
        <div className="absolute top-6 left-7 w-6 h-6 rounded-full bg-[#FFFCE6]/100 blur-[20px]" />

        <div className="relative z-10 w-9 h-9 rounded-lg flex items-center justify-center text-white mb-3">
          <Icon size={24} strokeWidth={1.8} />
        </div>

        <h3 className="text-[22px] leading-tight font-semibold tracking-tight">
          {value}
        </h3>

        <p className="text-md text-zinc-300 font-medium">{label}</p>
        {subtext && (
          <p className="text-[13px] text-zinc-500 mt-1 tracking-wider">{subtext}</p>
        )}
      </CardContent>
    </Card>
  );
}
