'use client';

import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { AchievementItem } from '@/models/AchivementItem';

export function AchivementsHomeSection({
  achievementItems,
}: {
  achievementItems: AchievementItem[];
}) {
  return (
    <div id="achivements" className="w-full space-y-8 scroll-mt-25">
      <div
        className={`text-2xl md:text-4xl font-extrabold bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent text-center`}
      >
        ACHIEVEMENTS
      </div>
      <div className="space-y-3">
        {achievementItems.map((achievementItem) => (
          <AchivementItem key={achievementItem.title} achievement={achievementItem} />
        ))}
      </div>
    </div>
  );

  function AchivementItem({ achievement }: { achievement: AchievementItem }) {
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
            <div className={`text-sm sm:text-sm md:text-lg text-white font-bold`}>
              {achievement.title}
            </div>
            <div className={`text-xs sm:text-sm md:text-md text-blue-500 font-semibold`}>
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
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`text-xs sm:text-sm md:text-base text-gray-400 mt-5 font-normal`}>
            {achievement.description}
          </div>
        </div>
      </div>
    );
  }
}
