import { FC, SVGProps } from "react";

export interface WorkExperience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
    technologies: string[];
}

export interface EducationExperience {
    place: string;
    title: string;
    startDate: string;
    endDate: string;
    activities: string[];
}

export interface Achievement {
    title: string;
    description: string;
    date: string;
    heldBy: string;
}

export interface SkillSet {
    name: string;
    description: string;
    icon: FC<SVGProps<SVGSVGElement>>;
}