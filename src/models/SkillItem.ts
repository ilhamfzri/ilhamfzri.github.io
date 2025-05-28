import { FC, SVGProps } from 'react';

export interface SkillItem {
  name: string;
  description: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}
