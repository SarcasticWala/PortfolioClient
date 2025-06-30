
import { User, Skill, Timeline } from '../models/UserModel';

export class UserController {
  private static instance: UserController;
  
  private constructor() {}
  
  static getInstance(): UserController {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }

  getUserData(): User {
    return {
      name: "Alex Johnson",
      title: "Visual Storyteller & Creative Director",
      bio: "Passionate visual storyteller with over 8 years of experience in photography and videography. I specialize in capturing authentic moments and transforming them into compelling narratives that resonate with audiences.",
      experience: "8+ Years",
      location: "New York, NY",
      email: "alex@visualstoryteller.com",
      phone: "+1 (555) 123-4567",
      socialMedia: [
        {
          platform: "Instagram",
          url: "https://instagram.com/alexvisuals",
          icon: "Instagram",
          handle: "@alexvisuals"
        },
        {
          platform: "YouTube",
          url: "https://youtube.com/alexvisuals",
          icon: "Youtube",
          handle: "Alex Visuals"
        },
        {
          platform: "Twitter",
          url: "https://twitter.com/alexvisuals",
          icon: "Twitter",
          handle: "@alexvisuals"
        },
        {
          platform: "LinkedIn",
          url: "https://linkedin.com/in/alexvisuals",
          icon: "Linkedin",
          handle: "Alex Johnson"
        },
        {
          platform: "Behance",
          url: "https://behance.net/alexvisuals",
          icon: "Globe",
          handle: "alexvisuals"
        }
      ]
    };
  }

  getSkills(): Skill[] {
    return [
      { name: 'Photography', level: 95, category: 'Visual' },
      { name: 'Videography', level: 90, category: 'Visual' },
      { name: 'Post-Production', level: 88, category: 'Technical' },
      { name: 'Color Grading', level: 85, category: 'Technical' },
      { name: 'Drone Operation', level: 80, category: 'Technical' },
      { name: 'Creative Direction', level: 92, category: 'Management' }
    ];
  }

  getTimeline(): Timeline[] {
    return [
      { 
        year: '2024', 
        title: 'International Recognition', 
        description: 'Won Best Wedding Film at International Photography Awards',
        type: 'achievement'
      },
      { 
        year: '2022', 
        title: 'Studio Expansion', 
        description: 'Opened professional studio space in Manhattan',
        type: 'milestone'
      },
      { 
        year: '2020', 
        title: 'Commercial Breakthrough', 
        description: 'Started working with Fortune 500 companies',
        type: 'project'
      },
      { 
        year: '2016', 
        title: 'Professional Journey Begins', 
        description: 'Launched freelance photography and videography business',
        type: 'milestone'
      }
    ];
  }
}
