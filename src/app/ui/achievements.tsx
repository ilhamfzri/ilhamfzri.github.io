'use client'

import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import { useState } from "react";
import { poppins } from "../layout";
import { Achievement } from "../lib/definitions";


const achievements: Achievement[] = [
    {
        title: "1st Place at Paragon Corp Hackathon Competition 2022",
        description: "Built an AI-based web app to find skin-tone colors and recommend the best color for makeup, also with a virtual try-on feature. I am Responsible as a Fullstack Developer and successfully built a web app for PoC in 24 hours based on idea creation.",
        date: "Aug 2022",
        heldBy: "PT Paragon Technology and Innovation"
    },
    {
        title: "1st Place at Mobile Robotic Category, Lomba Kompetensi Siswa (LKS) Tingkat Nasional 2017",
        description: "Represent west java in annually national vocational student competition to design and build a robot that has a mission to avoid obstacles and to moving objects based on colors automatically using various sensors planted on the robot. Mostly, using C++ as the main programming language and implemented some popular algorithms for image processing.",
        date: "May 2017",
        heldBy: "The Ministry of Education, Culture, Research, and Technology, Republic of Indonesia"
    },
    {
        title: "Double Gold Medal (Presentation and Poster) at PKM Karsa Cipta, Pekan Ilmiah Nasional (PIMNAS) 33",
        description: "Gold medal in presentation and poster in one of the biggest university competitions in Indonesia. We designed and built a device to help medical personnel detect early peripheral neuropathy symptoms to prevent amputation in diabetics. Implemented computer vision and integrated with the android application.",
        date: "Nov 2022",
        heldBy: "The Ministry of Education, Culture, Research, and Technology, Republic of Indonesia"
    },
    {
        title: "Gold Medal at Technology ISTEC",
        description: "Build a tool that can detect peripheral neuropathy early from people that have diabetes. The tool can be connected to an android application to shows data from sensors and also will give recommendations to patients based on the result. For more information, check this link",
        date: "Jan 2020",
        heldBy: "International Science Technology and Engineering Competition"
    },
    {
        title: "2nd Place at Vertical Takef-off and Landing Division, Kontes Robot Terbang Indonesia (KRTI) 2019",
        description: "Built and design a drone that has a mission to dropping payloads on specifics locations automatically quickly and accurately. Use python for the main controller (we used Robot Operating System)and use C++ to control the payload mechanism.",
        date: "Oct 2019",
        heldBy: "The Ministry of Research and Technology, Republic of Indonesia"
    }
]

export function Achivements() {
    return <div id="achivements" className="w-full space-y-8 scroll-mt-25">
        <div className={`${poppins.className} text-2xl md:text-4xl font-extrabold bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent text-center`}>
            ACHIEVEMENTS
        </div>
        <div className="space-y-3">
            {achievements.map(achievement => <AchivementItem key={achievement.title} achievement={achievement} />)}
        </div>
    </div>

    function AchivementItem({ achievement }: { achievement: Achievement }) {
        const [open, setOpen] = useState(false);

        return <div
            onClick={() => { setOpen(!open) }}
            className="px-5 py-5 rounded-xl border border-solid border-black/[.08] dark:border-white/[.145] transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent cursor-pointer">
            <div className="flex w-full items-center justify-between">
                <div className="flex flex-col">
                    <div className={`${poppins.className} text-sm sm:text-sm md:text-lg text-white font-bold`}>
                        {achievement.title}
                    </div>
                    <div className={`${poppins.className} text-xs sm:text-sm md:text-md text-blue-500 font-semibold`}>
                        {achievement.heldBy}
                    </div>
                </div>
                {!open ? <ArrowDownCircleIcon className='h-8 w-8 shrink-0 ml-2' /> : <ArrowUpCircleIcon className='h-8 w-8 shrink-0 ml-2' />}
            </div>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className={`${poppins.className} text-xs sm:text-sm md:text-base text-gray-400 mt-5 font-normal`}>
                    {achievement.description}
                </div>
            </div>
        </div >
    }
}