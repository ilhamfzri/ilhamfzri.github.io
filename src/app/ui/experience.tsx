"use client";

import { WorkExperience } from "@/app/lib/definitions";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const experience0: WorkExperience = {
  company: "Bank Central Asia",
  position: "Software Engineer",
  startDate: "Feb 2023",
  endDate: "Present",
  responsibilities: [],
  technologies: ["TypeScript", "React", "Node.js"],
};

const experience1: WorkExperience = {
  company: "Widya Wicara",
  position: "Software Engineer, ML",
  startDate: "May 2021",
  endDate: "Sept 2022",
  responsibilities: [
    "Developed and maintained backend API core services: Speech-to-Text (STT) and Text-to-Speech (TTS).",
    "Improved the Speech-to-Text (STT) service for the Indonesian language by reducing the Word Error Rate (WER) from 8% to 4% through the implementation of a state-of-the-art model.",
    "Built a new male voice variant for the Indonesian Text-to-Speech (TTS) service and developed an algorithm to improve the pronunciation of English words.",
    "Built reliable and scalable core services using RabbitMQ and Celery as the message broker, Flask as the web framework, MongoDB for the caching mechanism, Docker for virtualization, and various AWS services (EC2 and S3).",
  ],
  technologies: ["Python", "Golang", "AWS Services [EC2 & S3]"],
};

const experience2: WorkExperience = {
  company:
    "Department Computer Science and Electronics, Gadjah Mada University",
  position: "Research Assistant - Freelance",
  startDate: "Jun 2021",
  endDate: "Jun 2022",
  responsibilities: [
    "Developed a machine learning model to classify people wearing masks and not wearing masks from video footage, with the aim of reducing the spread of the COVID-19 virus. Achieved an accuracy of approximately 95%.",
    "Annotated a high-resolution dataset of reliefs from the Borobudur and Prambanan temples for a semantic segmentation task. The dataset consists of three annotation layers: the first layer includes various objects found in the reliefs such as humans, animals, buildings, and artifacts; the second layer focuses on jewelry worn by human figures; and the third layer captures human poses.",
  ],
  technologies: ["Python"],
};
const experience3: WorkExperience = {
  company: "Widya Wicara",
  position: "Software Engineer, ML - Intern",
  startDate: "Jun 2021",
  endDate: "Jun 2022",
  responsibilities: [
    "Built a text-to-speech model for the Indonesian language using Deep Convolutional Networks with Guided Attention, implemented in Python and PyTorch.",
    "Developed a wake-word detection system for a smart speaker, utilizing Mel spectrogram features and a Bidirectional Long Short-Term Memory (Bi-LSTM) network as the classification model, implemented in TensorFlow. Achieved 91% accuracy on the validation dataset.",
  ],
  technologies: ["Python"],
};

export function Experience() {
  const [open, setOpen] = useState(false);

  return (
    <div id="work-experience" className="w-full space-y-8 scroll-mt-25">
      <div
        className={`text-2xl md:text-4xl font-extrabold bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent text-center`}
      >
        WORK EXPERIENCE
      </div>
      <WorkExperienceItem
        workExperience={experience0}
        iconSrc="/logo-bca.svg"
      />
      <WorkExperienceItem
        workExperience={experience1}
        iconSrc="/logo-widya.svg"
      />
      {!open && <ShowMoreLessButton />}
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out space-y-8 ${
          open ? "max-h-300" : "max-h-0"
        }`}
      >
        <WorkExperienceItem
          workExperience={experience2}
          iconSrc="/logo-ugm.svg"
        />
        <WorkExperienceItem
          workExperience={experience3}
          iconSrc="/logo-widya.svg"
        />
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

  function WorkExperienceItem({
    workExperience,
    iconSrc,
  }: {
    workExperience: WorkExperience;
    iconSrc: string;
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
                  src={iconSrc}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col ml-3">
                <div className={`text-2xl text-white font-bold`}>
                  {workExperience.position}
                </div>
                <div className={`text-base text-blue-500 font-semibold`}>
                  {workExperience.company}
                </div>
              </div>
            </div>

            <a className={`text-sm text-gray-200`}>
              {`${workExperience.startDate} - ${workExperience.endDate}`}
            </a>
          </div>

          <ul
            className={`list-outside list-disc text-base text-gray-400 ml-4 pl-1`}
          >
            {workExperience.responsibilities.map((responsibility) => (
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
                  src={iconSrc}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col ml-3">
                <div className={`text-base text-white font-bold`}>
                  {workExperience.position}
                </div>
                <div className={`text-sm text-blue-500 font-semibold`}>
                  {workExperience.company}
                </div>
                <div className={`text-xs text-gray-200`}>
                  {`${workExperience.startDate} - ${workExperience.endDate}`}
                </div>
              </div>
            </div>
          </div>

          <ul
            className={`list-outside list-disc text-sm text-gray-400 ml-4 pl-1`}
          >
            {workExperience.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
