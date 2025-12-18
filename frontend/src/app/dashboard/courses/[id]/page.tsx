"use client";

import React, { useState } from "react";
import { BarChart3, Activity } from "lucide-react";

import { EXPERIMENT_DATA, VERSIONS } from "../../../../../../data/experiment";
import { Selector } from "@/components/ui/selector";
import { Tab } from "@/components/ui/tab";
import { Shape } from "@/components/ui/shape";
import { Overview } from "@/components/experiment/overview";
import { Phase } from "@/components/experiment/phase";
import CourseDashboard from "@/components/course-detail/basic-info";
import { useParams } from "next/navigation";
import UserCourse from "@/components/course-detail/user-course";

export default function ExperimentPage() {
  const params = useParams();
  const courseId = params.courseId as string;

  const [activeTab, setActiveTab] = useState<
    "Course Infomation" | "User Infomation"
  >("Course Infomation");
  const [selectedVersion, setSelectedVersion] = useState<string>("V0");

  const currentData = EXPERIMENT_DATA[selectedVersion] || EXPERIMENT_DATA["V0"];

  return (
    <div
      className="w-full font-sans relative text-white"
      style={{
        background: "bg-[#292B2A]/50",
      }}
    >
      <Shape />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
            Experiment Results
          </h1>
          <p className="text-zinc-400 text-sm">
            Comprehensive analysis of model performance metrics.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex items-end w-full pl-0 relative z-10">
          <Tab
            variant="start"
            active={activeTab === "Course Infomation"}
            onClick={() => setActiveTab("Course Infomation")}
            label="Course Infomation"
          />
          <Tab
            variant="middle"
            active={activeTab === "User Infomation"}
            onClick={() => setActiveTab("User Infomation")}
            label="User Infomation"
          />
        </div>

        <div
          className={`
            bg-[linear-gradient(to_bottom,#2A2C2B_70%,#303231_100%)] border-0 text-white shadow-xxl shadow-black/30
            rounded-b-xl rounded-tr-xl rounded-tl-none 
            p-4 md:p-6 
            min-h-[400px] 
            relative z-0

          `}
        >
          <div className="animate-in fade-in zoom-in-95 duration-300 h-full pt-2">
            {activeTab === "Course Infomation" && <CourseDashboard />}
            {activeTab === "User Infomation" && <UserCourse id={courseId} />}
          </div>
        </div>
      </div>
    </div>
  );
}
