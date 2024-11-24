export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
    tags: string[];
    link?: string;
  }
  
  export interface SectionProps {
    children: React.ReactNode;
    className?: string;
  }