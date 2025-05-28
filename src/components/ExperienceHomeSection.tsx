"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { WorkExperienceItem } from "@/models/WorkExpericenceitem";

export function ExperienceHomeSection({
  workExperienceItems,
}: {
  workExperienceItems: WorkExperienceItem[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div id="work-experience" className="w-full space-y-8 scroll-mt-25">
      <div
        className={`text-2xl md:text-4xl font-extrabold bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent text-center`}
      >
        WORK EXPERIENCE
      </div>
      <div>
        {workExperienceItems.slice(0, 2).map((workExperienceItem) => (
          <WorkExperienceComponents workExperienceItem={workExperienceItem} />
        ))}
      </div>
      {!open && <ShowMoreLessButton />}
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out space-y-8 ${
          open ? "max-h-300" : "max-h-0"
        }`}
      >
        {workExperienceItems.slice(2).map((workExperienceItem) => (
          <WorkExperienceComponents workExperienceItem={workExperienceItem} />
        ))}
      </div>
      {open && <ShowMoreLessButton />}
    </div>
  );

  function ShowMoreLessButton() {
    function onClick() {
      setOpen(!open);
    }
    return (
      <div className="flex items-center justify-center w-full">
        <button
          onClick={onClick}
          className={`flex items-center gap-2 px-5 py-2 bg-white text-black rounded hover:text-blue-500 rounded-full active:text-blue-500 cursor-pointer text-sm font-semibold`}
        >
          {!open ? "Show More" : "Show Less"}
          {!open ? (
            <ChevronDownIcon className="h-5 w-5 stroke-[2.5]" />
          ) : (
            <ChevronUpIcon className="h-5 w-5 stroke-[2.5]" />
          )}
        </button>
      </div>
    );
  }

  function WorkExperienceComponents({
    workExperienceItem,
  }: {
    workExperienceItem: WorkExperienceItem;
  }) {
    return (
      <>
        <div className="block sm:hidden">
          <MobileView />
        </div>
        <div className="hidden sm:block">
          <NotMobileView />
        </div>
      </>
    );

    function NotMobileView() {
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 overflow-hidden shrink-0">
                <Image
                  src={workExperienceItem.iconSrc}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col ml-3">
                <div className={`text-2xl text-white font-bold`}>
                  {workExperienceItem.position}
                </div>
                <div className={`text-base text-blue-500 font-semibold`}>
                  {workExperienceItem.company}
                </div>
              </div>
            </div>

            <a className={`text-sm text-gray-200`}>
              {`${workExperienceItem.startDate} - ${workExperienceItem.endDate}`}
            </a>
          </div>

          <ul
            className={`list-outside list-disc text-base text-gray-400 ml-4 pl-1`}
          >
            {workExperienceItem.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      );
    }

    function MobileView() {
      return (
        <div className="space-y-2">
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="w-10 h-10 overflow-hidden shrink-0">
                <Image
                  src={workExperienceItem.iconSrc}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col ml-3">
                <div className={`text-base text-white font-bold`}>
                  {workExperienceItem.position}
                </div>
                <div className={`text-sm text-blue-500 font-semibold`}>
                  {workExperienceItem.company}
                </div>
                <div className={`text-xs text-gray-200`}>
                  {`${workExperienceItem.startDate} - ${workExperienceItem.endDate}`}
                </div>
              </div>
            </div>
          </div>

          <ul
            className={`list-outside list-disc text-sm text-gray-400 ml-4 pl-1`}
          >
            {workExperienceItem.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
