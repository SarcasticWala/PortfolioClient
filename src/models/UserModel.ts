
export interface User {
  name: string;
  title: string;
  bio: string;
  experience: string;
  location: string;
  email: string;
  phone: string;
  socialMedia: SocialMedia[];
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
  handle: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Timeline {
  year: string;
  title: string;
  description: string;
  type: 'achievement' | 'milestone' | 'project';
}
