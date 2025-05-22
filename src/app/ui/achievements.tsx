"use client";

import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Achievement } from "../lib/definitions";

const achievements: Achievement[] = [
  {
    title: "1st Place at Paragon Corp Hackathon Competition 2022",
    description:
      "Developed an AI-based web application as a Full-Stack Developer to detect skin tone and recommend suitable makeup colors, featuring a virtual try-on functionality. Successfully delivered a fully functional proof of concept within 24 hours, from idea creation to deployment.",
    date: "Aug 2022",
    heldBy: "PT Paragon Technology and Innovation",
  },
  {
    title:
      "1st Place at Mobile Robotic Category, Lomba Kompetensi Siswa (LKS) Tingkat Nasional 2017",
    description:
      "Represented West Java in the annual National Vocational Student Competition to design and build a robot with the mission to automatically avoid obstacles and moving objects based on colors, using various sensors mounted on the robot. Primarily used C++ as the main programming language and implemented several popular image processing algorithms.",
    date: "May 2017",
    heldBy:
      "The Ministry of Education, Culture, Research, and Technology, Republic of Indonesia",
  },
  {
    title:
      "Double Gold Medal (Presentation and Poster) at PKM Karsa Cipta, Pekan Ilmiah Nasional (PIMNAS) 33",
    description:
      "Awarded the gold medal for presentation and poster at one of the largest university competitions in Indonesia. Designed and built a device to assist medical personnel in detecting early symptoms of peripheral neuropathy to help prevent amputations in diabetic patients. Implemented computer vision techniques and integrated the system with an Android application.",
    date: "Nov 2022",
    heldBy:
      "The Ministry of Education, Culture, Research, and Technology, Republic of Indonesia",
  },
  {
    title: "Gold Medal at Technology ISTEC",
    description:
      "Built a tool to detect early signs of peripheral neuropathy in people with diabetes. The tool connects to an Android application that displays sensor data and provides personalized recommendations to patients based on the results.",
    date: "Jan 2020",
    heldBy: "International Science Technology and Engineering Competition",
  },
  {
    title:
      "2nd Place at Vertical Takef-off and Landing Division, Kontes Robot Terbang Indonesia (KRTI) 2019",
    description:
      "Built and designed a drone with the mission to quickly and accurately drop payloads at specific locations automatically. Used Python with the Robot Operating System (ROS) for the main controller and C++ to control the payload mechanism.",
    date: "Oct 2019",
    heldBy: "The Ministry of Research and Technology, Republic of Indonesia",
  },
];

export function Achivements() {
  return (
    <div id="achivements" className="w-full space-y-8 scroll-mt-25">
      <div
        className={`text-2xl md:text-4xl font-extrabold bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent text-center`}
      >
        ACHIEVEMENTS
      </div>
      <div className="space-y-3">
        {achievements.map((achievement) => (
          <AchivementItem key={achievement.title} achievement={achievement} />
        ))}
      </div>
    </div>
  );

  function AchivementItem({ achievement }: { achievement: Achievement }) {
    const [open, setOpen] = useState(false);

    return (
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="py-5 px-5 rounded-xl border border-solid border-black/[.081] dark:border-white/[.145] transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent cursor-pointer"
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <div
              className={`text-sm sm:text-sm md:text-lg text-white font-bold`}
            >
              {achievement.title}
            </div>
            <div
              className={`text-xs sm:text-sm md:text-md text-blue-500 font-semibold`}
            >
              {achievement.heldBy}
            </div>
          </div>
          {!open ? (
            <ArrowDownCircleIcon className="h-8 w-8 shrink-0 ml-2" />
          ) : (
            <ArrowUpCircleIcon className="h-8 w-8 shrink-0 ml-2" />
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`text-xs sm:text-sm md:text-base text-gray-400 mt-5 font-normal`}
          >
            {achievement.description}
          </div>
        </div>
      </div>
    );
  }
}
