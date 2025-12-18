"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  Activity,
  Eye,
  MoreHorizontal,
} from "lucide-react";
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
import { Shape } from "@/components/ui/shape";
import { Tab } from "@/components/ui/tab";
import { Button } from "@/components/ui/button";

export default function UserCourse(id) {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;

  const courses = Array.from({ length: 500 }).map((_, i) => ({
    id: `U_32132${i}`,
    name: `Nguyen Van A ${i + 1}`,
    school: "Information Technology",
    totalRegistration: `${Math.floor(Math.random() * 100)}`,
  }));

  const filteredCourses = courses.filter((course) => {
    const query = searchQuery.toLowerCase();
    return (
      course.name.toLowerCase().includes(query) ||
      course.id.toLowerCase().includes(query) ||
      course.school.toLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const safeTotalPages = totalPages > 0 ? totalPages : 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= safeTotalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages = [];
    if (safeTotalPages <= 7) {
      for (let i = 1; i <= safeTotalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", safeTotalPages);
      } else if (currentPage >= safeTotalPages - 3) {
        pages.push(
          1,
          "...",
          safeTotalPages - 4,
          safeTotalPages - 3,
          safeTotalPages - 2,
          safeTotalPages - 1,
          safeTotalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          safeTotalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="  text-white font-sans relative overflow-hidden">
      <Shape />
      <div className="w-full mx-auto">
        <div className="flex items-center w-full pl-0 justify-end relative z-10">
          <div className="relative w-64 md:w-80  ">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Search by ID, Name..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-9 rounded-md bg-zinc-800/50  rounded-2xl focus-visible:ring-zinc-600 border-zinc-300 text-white placeholder:text-zinc-500  h-9"
            />
          </div>
        </div>

        <div className="bg-[linear-gradient(to_bottom,#2A2C2B_70%,#303231_100%)] border-0 text-white shadow-xxl shadow-black/30 rounded-b-xl rounded-tr-xl rounded-tl-none pt-4 md:pt-6 relative z-0">
          <div className="animate-in fade-in zoom-in-95 duration-300 h-full pt-3">
            <Table>
              <TableHeader>
                <TableRow className="border-zinc-800 hover:bg-transparent">
                  <TableHead className="text-center h-8 text-base font-semibold">
                    Course Id
                  </TableHead>
                  <TableHead className="h-8 text-center text-base font-semibold">
                    Course Name
                  </TableHead>
                  <TableHead className="h-8 text-center text-base font-semibold">
                    School
                  </TableHead>
                  <TableHead className="h-8 text-center text-base font-semibold">
                    Registration
                  </TableHead>
                  <TableHead className="h-8 text-base text-center font-semibold pr-4">
                    Detail
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="pt-10">
                {currentCourses.length > 0 ? (
                  currentCourses.map((course, index) => (
                    <TableRow
                      key={course.id}
                      className="border-zinc-800 hover:bg-zinc-800/50 cursor-pointer transition-colors"
                      style={{
                        backgroundColor:
                          index % 2 !== 0 ? "transparent" : "#3f403d",
                      }}
                    >
                      <TableCell className="font-sm text-center ">
                        {course.id}
                      </TableCell>
                      <TableCell className="text-center font-sm ">
                        {course.name}
                      </TableCell>
                      <TableCell className="text-center font-sm ">
                        {course.school}
                      </TableCell>
                      <TableCell className="text-center font-sm ">
                        {course.totalRegistration}
                      </TableCell>
                      <TableCell className="text-center py-2">
                        <Button
                          className="inline-flex items-center justify-center"
                          onClick={() =>
                            router.push(`/dashboard/courses/${course.id}`)
                          }
                        >
                          <Eye />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-24 text-center text-zinc-500"
                    >
                      No results found for &quot;{searchQuery}&quot;
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* --- PAGINATION  --- */}
        {filteredCourses.length > 0 && (
          <div className="flex items-center justify-center p-4 gap-1 text-sm mt-4 select-none">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="text-zinc-400 hover:text-white disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {getPageNumbers().map((page, index) => {
              if (page === "...") {
                return (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-2 text-zinc-500"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </span>
                );
              }
              return (
                <Button
                  key={page}
                  variant="ghost"
                  size="sm"
                  onClick={() => handlePageChange(page as number)}
                  className={`w-8 h-8 p-0 ${
                    currentPage === page
                      ? "text-white font-bold bg-zinc-700/80 hover:bg-zinc-700"
                      : "text-zinc-500 hover:text-white hover:bg-zinc-800/50"
                  }`}
                >
                  {page}
                </Button>
              );
            })}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === safeTotalPages}
              className="text-zinc-400 hover:text-white disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
