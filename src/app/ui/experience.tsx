'use client'

import { WorkExperience } from "@/app/lib/definitions";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const experience0: WorkExperience = {
    company: 'Bank Central Asia',
    position: 'Software Engineer',
    startDate: 'Feb 2023',
    endDate: 'Present',
    responsibilities: [
    ],
    technologies: ['TypeScript', 'React', 'Node.js'],
};


const experience1: WorkExperience = {
    company: 'Widya Wicara',
    position: 'Software Engineer, ML',
    startDate: 'May 2021',
    endDate: 'Sept 2022',
    responsibilities: [
        'Developed and mantained backend API core services: speech-to-text(STT) and text-to-speech(TTS).',
        'Improved the speech-to-text(STT) service for Indonesia language by reducing the WER (Word Error Rate) from 8% to 4% by implementing the newest state-of-the-art model.',
        'Built a new variant (male) voice for Indonesia text-to-speech (TTS) service and developed an algorithm to improve TTS pronunciation in English words.',
        'Built reliability and scalability core services using (RabbitMQ + Celery) as message broker, Flask as web framework, MongoDB for caching mechanism, Docker for virtualization, and several AWS Stack (EC2 \& S3).',
    ],
    technologies: ['TypeScript', 'React', 'Node.js'],
};

const experience2: WorkExperience = {
    company: 'Department Computer Science and Electronics, Gadjah Mada University',
    position: 'Research Assistant - Freelance',
    startDate: 'Jun 2021',
    endDate: 'Jun 2022',
    responsibilities: [
        'Built a machine learning model to classifying people wearning mask and not from video in the purpose of reduce spreading of COVID-19 virus with the accuracy ~95%.',
        'Annotate high-resolution dataset from Borobudur and Prambanan temple relief for semantic segmentation task. The dataset has three layers, the first layer for the various object found in relief such as a human, animal, building, artifact, etc. the second layer for jewelry found in the human object, and the third layer for the human pose.',
    ],
    technologies: ['TypeScript', 'React', 'Node.js'],
};
const experience3: WorkExperience = {
    company: 'Widya Wicara',
    position: 'Software Engineer, ML - Intern',
    startDate: 'Jun 2021',
    endDate: 'Jun 2022',
    responsibilities: [
        'Build a text to speech model for Indonesia language based on Deep Convolutional Networks with Guided Attention using Python and Pytorch.',
        'Develop a wake-up word system for the smart speaker, uses audio Mel spectrogram as feature and uses bidirectional long short-term memory (Bi-LSTM) as classification model using TensorFlow. The model has 91% accuracy on validation data.',
    ],
    technologies: ['TypeScript', 'React', 'Node.js'],
};

export function Experience() {
    const [open, setOpen] = useState(false);

    return <div id="work-experience" className="w-full space-y-8 scroll-mt-25">
        <div className={`text-2xl md:text-4xl font-extrabold bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent text-center`}>
            WORK EXPERIENCE
        </div>
        <WorkExperienceItem workExperience={experience0} iconSrc="/logo-bca.svg" />
        <WorkExperienceItem workExperience={experience1} iconSrc="/logo-widya.svg" />
        {!open && <ShowMoreLessButton />}
        <div className={`overflow-hidden transition-max-height duration-300 ease-in-out space-y-8 ${open ? 'max-h-300' : 'max-h-0'
            }`}>
            <WorkExperienceItem workExperience={experience2} iconSrc="/logo-ugm.svg" />
            <WorkExperienceItem workExperience={experience3} iconSrc="/logo-widya.svg" />
        </div>
        {open && <ShowMoreLessButton />}
    </div>

    function ShowMoreLessButton() {
        function onClick() {
            setOpen(!open);
        }
        return <div className="flex items-center justify-center w-full">
            <button
                onClick={onClick}
                className={`flex items-center gap-2 px-5 py-2 bg-white text-black rounded hover:text-blue-500 rounded-full active:text-blue-500 cursor-pointer text-sm font-semibold`}>
                {!open ? 'Show More' : 'Show Less'}
                {!open ? <ChevronDownIcon className="h-5 w-5 stroke-[2.5]" /> : <ChevronUpIcon className="h-5 w-5 stroke-[2.5]" />}
            </button >
        </div >
    }

    function WorkExperienceItem({ workExperience, iconSrc }: { workExperience: WorkExperience, iconSrc: string }) {
        return <>
            <div className="block sm:hidden">
                <MobileView />
            </div>
            <div className="hidden sm:block">
                <NotMobileView />
            </div></>


        function NotMobileView() {
            return <div className="space-y-2">
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

                <ul className={`list-outside list-disc text-base text-gray-400 ml-4 pl-1`}>
                    {workExperience.responsibilities.map(responsibility => <li key={responsibility}>
                        {responsibility}
                    </li>)}
                </ul>
            </div >
        }

        function MobileView() {
            return <div className="space-y-2">
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

                <ul className={`list-outside list-disc text-sm text-gray-400 ml-4 pl-1`}>
                    {workExperience.responsibilities.map(responsibility => <li key={responsibility}>
                        {responsibility}
                    </li>)}
                </ul>
            </div >
        }
    }
}

