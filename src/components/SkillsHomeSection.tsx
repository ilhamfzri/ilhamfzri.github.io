import {
  CodeBracketSquareIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/solid";
import { SkillSet } from "@/app/lib/definitions";
import { SkillItem } from "@/models/SkillItem";

export function SkillsHomeSection({ skillItems }: { skillItems: SkillItem[] }) {
  return (
    <div className="w-full">
      <div
        className={`text-xl md:text-2xl font-semibold text-center text-gray-200`}
      >
        EXPERIENCE WITH
      </div>
      <div className="mx-auto mt-5 max-w-2xl sm:mt-5 lg:mt-5 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-5 gap-y-5 lg:max-w-none lg:grid-cols-2 lg:gap-y-5">
          {skillItems.map((skillItem) => (
            <SkillItemSection key={skillItem.name} skillSet={skillItem} />
          ))}
        </dl>
      </div>
    </div>
  );
}

function SkillItemSection({ skillSet }: { skillSet: SkillSet }) {
  return (
    <div
      key={skillSet.name}
      className="relative px-5 py-5 font-semibold rounded-xl border border-solid border-black/[.08] dark:border-white/[.145] transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent cursor-pointer"
    >
      <div className="flex">
        <skillSet.icon
          key={skillSet.name}
          className="w-6 h-6 mt-1 text-blue-500 hover:text-blue-200 shrink-0"
        />
        <div>
          <div className={`ml-5 text-lg text-white font-semibold`}>
            {" "}
            {skillSet.name}
          </div>
          <div className={`ml-5 text-sm text-gray-400 mt-2`}>
            {" "}
            {skillSet.description}
          </div>
        </div>
      </div>
    </div>
  );
}
