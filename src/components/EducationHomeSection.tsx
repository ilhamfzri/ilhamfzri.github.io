'use client';

import { EducationItem } from '@/models/EducationItem';
import Image from 'next/image';

export function EducationHomeSection({ educationItems }: { educationItems: EducationItem[] }) {
  return (
    <div id="education" className="w-full space-y-8 scroll-mt-25">
      <div
        className={`text-2xl md:text-4xl font-extrabold bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent text-center`}
      >
        EDUCATION
      </div>
      <div className="space-y-3">
        {educationItems.map((educationItem) => (
          <EducationComponent education={educationItem} />
        ))}
      </div>
    </div>
  );
}

function EducationComponent({ education }: { education: EducationItem }) {
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

  function MobileView() {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 overflow-hidden shrink-0">
              <Image
                src="/logo-ugm.svg"
                alt=""
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col ml-3">
              <div className={`text-base text-white font-bold`}>{education.title}</div>
              <div
                className={`text-xs font-bold bg-white max-w-fit text-black p-0.5 radius-full rounded-full`}
              >
                GPA : 3.84/4.00
              </div>
              <div className={`text-sm text-blue-500 font-semibold`}>{education.place}</div>
              <a className={`$text-xs text-gray-200`}>
                {`${education.startDate} - ${education.endDate}`}
              </a>
            </div>
          </div>
        </div>

        <ul className={`list-outside list-disc text-sm text-gray-400 ml-4`}>
          {education.activities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </div>
    );
  }

  function NotMobileView() {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 overflow-hidden shrink-0">
              <Image
                src="/logo-ugm.svg"
                alt=""
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col ml-3">
              <div className={`text-2xl text-white font-bold`}>{education.title}</div>
              <div className={`text-base text-blue-500 font-semibold`}>{education.place}</div>
              <div
                className={`text-xs font-bold bg-white max-w-fit text-black p-0.5 radius-full rounded-full`}
              >
                GPA : 3.84/4.00
              </div>
            </div>
          </div>

          <a className={`text-sm text-gray-200`}>
            {`${education.startDate} - ${education.endDate}`}
          </a>
        </div>

        <ul className={`list-outside list-disc text-base text-gray-400 ml-4`}>
          {education.activities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </div>
    );
  }
}
