import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react"; // Ví dụ icon

interface StatCardProps {
  label: string;
  value: string;
  subtext: string;
}

export function StatCard({ label, value, subtext }: StatCardProps) {
  return (
    <Card className="bg-[linear-gradient(to_bottom,#2A2C2B_70%,#303231_100%)] border-0 text-white shadow-xl shadow-black/30 ">
      <CardContent className="p-6 py-4 flex flex-col gap-1  ">
        <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 mb-2">
          <Users size={16} />
        </div>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-sm text-zinc-400">{label}</p>
        <p className="text-xs text-zinc-600 mt-1">{subtext}</p>
      </CardContent>
    </Card>
  );
}
