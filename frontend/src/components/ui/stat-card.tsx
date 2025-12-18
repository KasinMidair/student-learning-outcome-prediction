"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  subtext: string;
  icon: LucideIcon;
}

export function StatCard({ label, value, subtext, icon: Icon }: StatCardProps) {
  return (
    <Card className="bg-[linear-gradient(to_bottom,#2A2C2B_70%,#303231_100%)] border-0 text-white shadow-xxl shadow-black/30 w-full relative overflow-hidden">
      <CardContent className="relative p-6 pt-5 flex flex-col text-white">
        <div className="absolute top-6 left-7 w-6 h-6 rounded-full bg-[#FFFCE6]/100 blur-[20px]" />

        <div className="relative z-10 w-9 h-9 rounded-lg flex items-center justify-center text-white mb-3">
          <Icon size={24} strokeWidth={1.8} />
        </div>

        <h3 className="text-xl leading-tight font-semibold tracking-tight">
          {value}
        </h3>

        <p className="text-lg text-zinc-300 font-medium">{label}</p>
        <p className="text-sm text-zinc-500 mt-1 tracking-wider">{subtext}</p>
      </CardContent>
    </Card>
  );
}
