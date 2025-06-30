
import { useState, useEffect } from 'react';
import { User, Skill, Timeline } from '../models/UserModel';
import { UserController } from '../controllers/UserController';

export const useUserData = () => {
  const [user, setUser] = useState<User | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [timeline, setTimeline] = useState<Timeline[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call delay for better UX
    const loadData = async () => {
      try {
        const controller = UserController.getInstance();
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setUser(controller.getUserData());
        setSkills(controller.getSkills());
        setTimeline(controller.getTimeline());
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { user, skills, timeline, loading };
};
