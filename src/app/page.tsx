import "./globals.css";
import Head from "next/head";
import { HeaderHomeSection } from "@/components/HeaderHomeSection";
import { SummaryHomeSection } from "@/components/SummaryHomeSection";
import { SkillsHomeSection } from "@/components/SkillsHomeSection";
import { SkillItem } from "@/models/SkillItem";
import {
  CodeBracketSquareIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { NavigationItem } from "@/models/NavigationItem";
import { AchievementItem } from "@/models/AchivementItem";
import { AchivementsHomeSection } from "@/components/AchievementsHomeSection";
import { EducationItem } from "@/models/EducationItem";
import { EducationHomeSection } from "@/components/EducationHomeSection";
import { WorkExperienceItem } from "@/models/WorkExpericenceitem";
import { ExperienceHomeSection } from "@/components/ExperienceHomeSection";
import { FooterHomeSection } from "@/components/FooterHomeSection";

export const metadata = {
  title: "Ilham Fazri - Fullstack Engineer",
  description:
    "I’m a full-stack engineer with 4+ years of turning ideas into real, reliable apps — from pixel-perfect frontends to solid backend systems. I love clean code, learning new tech, and building things that actually make life easier.",
  openGraph: {
    title: "Ilham Fazri - Fullstack Engineer",
    description:
      "I’m a full-stack engineer with 4+ years of turning ideas into real, reliable apps — from pixel-perfect frontends to solid backend systems. I love clean code, learning new tech, and building things that actually make life easier.",
    url: "https://example.com/about",
    siteName: "Ilham Fazri - Fullstack Engineer",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

const navigationItems: NavigationItem[] = [
  { name: "Home", href: "#" },
  { name: "Work Experience", href: "#work-experience" },
  { name: "Education", href: "#education" },
  { name: "Achivements", href: "#achivements" },
  { name: "Contact", href: "#contact-me" },
];

const skillItems: SkillItem[] = [
  {
    name: "Languages",
    description:
      "Javascript (React, Next Js), Java (Spring Boot), Dart (Flutter Mobile App), Python (Fast API, Pytorch), Golang (Gin, GORM, gRPC)",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Databases",
    description:
      "NoSQL (MongoDB, Firebase, Redis) and SQL (PostgreeSQL, Oracle)",
    icon: CircleStackIcon,
  },
  {
    name: "Technologies",
    description:
      "Virtualization (Docker), Cloud Platforms (AWS, OpenShift Container Platform - OCP), Message Broker (RabbitMQ, Kafka), Monitoring (Kibana, Grafana, Dynatrace & Instana) and CI/CD (GitHub/GitLab, Jenkins)",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Software Architecture",
    description:
      "Clean Architecture, Event‐Driven Architecture, Microservices Architecture, and Design Pattern(Creational, Structural, etc)",
    icon: SquaresPlusIcon,
  },
];

const achievementItems: AchievementItem[] = [
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

const educationItems: EducationItem[] = [
  {
    title: "B.s. in Electronic and Instrumentation",
    place:
      "Department Computer Science and Electronics, Gadjah Mada University",
    startDate: "Aug 2018",
    endDate: "Aug 2022",
    activities: [
      "Participated in international and national competitions in the fields of electronics and software engineering.",
      "Thesis: Detection and Recognition of Multiple Traffic Violation Types Using Video Processing Based on YOLO — Published in ICIC Express Letters.",
    ],
  },
];

const workExperienceItems: WorkExperienceItem[] = [
  {
    company: "Bank Central Asia",
    position: "Software Engineer",
    startDate: "Feb 2023",
    endDate: "Present",
    responsibilities: [],
    technologies: ["TypeScript", "React", "Node.js"],
    iconSrc: "/logo-bca.svg",
  },
  {
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
    iconSrc: "/logo-widya.svg",
  },
  {
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
    iconSrc: "/logo-ugm.svg",
  },
  {
    company: "Widya Wicara",
    position: "Software Engineer, ML - Intern",
    startDate: "Jun 2021",
    endDate: "Jun 2022",
    responsibilities: [
      "Built a text-to-speech model for the Indonesian language using Deep Convolutional Networks with Guided Attention, implemented in Python and PyTorch.",
      "Developed a wake-word detection system for a smart speaker, utilizing Mel spectrogram features and a Bidirectional Long Short-Term Memory (Bi-LSTM) network as the classification model, implemented in TensorFlow. Achieved 91% accuracy on the validation dataset.",
    ],
    technologies: ["Python"],
    iconSrc: "/logo-widya.svg",
  },
];

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <link rel="icon" href="/image.png" />
      </Head>
      <HeaderHomeSection navigationItems={navigationItems} />
      <main className="flex flex-col items-center w-full max-w-4xl px-3 space-y-10 mx-auto my-10">
        <SummaryHomeSection />
        <SkillsHomeSection skillItems={skillItems} />
        <div className="w-full border border-solid border-black/80 border-white/[.145]"></div>
        <ExperienceHomeSection workExperienceItems={workExperienceItems} />
        <div className="w-full border border-solid border-black/80 border-white/[.145]"></div>
        <EducationHomeSection educationItems={educationItems} />
        <div className="w-full border border-solid border-black/80 border-white/[.145]"></div>
        <AchivementsHomeSection achievementItems={achievementItems} />
      </main>
      <div className="w-full border border-solid border-black/80 border-white/[.145]"></div>
      <div className="bg-black">
        <FooterHomeSection />
      </div>
    </div>
  );
}
