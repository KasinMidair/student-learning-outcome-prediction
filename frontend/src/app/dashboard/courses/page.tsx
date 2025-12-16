"use client";

import React from "react";
import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

export default function CoursesPage() {
  const router = useRouter();

  // Mock data
  const courses = Array.from({ length: 10 }).map((_, i) => ({
    id: `U_32132${i}`,
    about: "Nguyen Van A",
    school: "40",
  }));

  return (
    <div className="p-8 min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Background Snowflake Decoration (Optional) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 bg-[url('/snowflake-bg.svg')] bg-no-repeat bg-center"></div>

      <div className="flex justify-between items-center mb-8 relative z-10">
        <h1 className="text-2xl font-bold text-zinc-100">Courses</h1>
        <div className="relative w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
          <Input
            placeholder="Search"
            className="pl-9 bg-zinc-900 border-zinc-700 text-zinc-300 focus:ring-orange-500 rounded-full"
          />
        </div>
      </div>

      <div className="bg-[#18181b]/80 backdrop-blur-md border border-zinc-800 rounded-xl overflow-hidden relative z-10">
        {/* Tab-like header */}
        <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
          <span className="font-semibold text-zinc-200">Courses List</span>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="border-zinc-800 hover:bg-transparent">
              <TableHead className="text-zinc-400 font-medium">
                Course Id
              </TableHead>
              <TableHead className="text-zinc-400 font-medium">About</TableHead>
              <TableHead className="text-zinc-400 font-medium">
                School
              </TableHead>
              <TableHead className="text-zinc-400 font-medium">...</TableHead>
              <TableHead className="text-zinc-400 font-medium text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course, index) => (
              <TableRow
                key={index}
                className="border-zinc-800 hover:bg-zinc-800/50 cursor-pointer transition-colors"
                onClick={() => router.push(`/dashboard/courses/${course.id}`)} // Chuyển trang khi click
              >
                <TableCell className="text-zinc-300 font-medium py-4">
                  {course.id}
                </TableCell>
                <TableCell className="text-zinc-400 py-4">
                  {course.about}
                </TableCell>
                <TableCell className="text-zinc-400 py-4">
                  {course.school}
                </TableCell>
                <TableCell className="text-zinc-500 py-4">---</TableCell>
                <TableCell className="text-right py-4 text-zinc-500">
                  ---
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination Mockup */}
        <div className="flex justify-center p-4 text-zinc-500 text-xs gap-4">
          <span>1</span>
          <span className="text-white font-bold">2</span>
          <span>3</span>
          <span>...</span>
          <span>50</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
