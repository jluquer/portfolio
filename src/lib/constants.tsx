import { Github, LinkedIn } from '@/components/Icons';
import { ReactNode, SVGProps } from 'react';

export const commandMenuKey = 'j';

export const SOCIAL_ICONS: Record<string, (props: SVGProps<SVGSVGElement>) => ReactNode> = {
  GitHub: Github,
  LinkedIn: LinkedIn,
};
