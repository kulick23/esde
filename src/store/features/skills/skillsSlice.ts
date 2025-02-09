import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  html5Icon,
  css3Icon,
  jsIcon,
  jqueryIcon,
  reactIcon,
  nodejsIcon,
  mongodbIcon,
  postgresqlIcon,
  dockerIcon,
  kubernetesIcon,
  awsIcon,
  jenkinsIcon,
  javaIcon,
  blendeIcon,
  csharpIcon,
  godotIcon,
  mayaIcon,
  substanceIcon,
  unrealIcon,
} from '../../../Assets/Skills/index.ts';

interface Skill {
  id: number;
  name: string;
  icon: string;
}

interface SkillsState {
  skillsFront: Skill[];
  skillsBack: Skill[];
  skillsGame: Skill[];
}

const initialState: SkillsState = {
  skillsFront: [
    { id: 1, name: 'HTML5', icon: html5Icon },
    { id: 2, name: 'CSS3', icon: css3Icon },
    { id: 3, name: 'JavaScript', icon: jsIcon },
    { id: 4, name: 'jQuery', icon: jqueryIcon },
    { id: 5, name: 'React', icon: reactIcon },
    { id: 6, name: 'Node.js', icon: nodejsIcon },
    { id: 7, name: 'PostgreSQL', icon: postgresqlIcon },

  ],
  skillsBack: [
    { id: 1, name: 'Java', icon: javaIcon },
    { id: 2, name: 'MongoDB', icon: mongodbIcon },
    { id: 3, name: 'Docker', icon: dockerIcon },
    { id: 4, name: 'Kubernetes', icon: kubernetesIcon },
    { id: 5, name: 'AWS', icon: awsIcon },
    { id: 6, name: 'Jenkins', icon: jenkinsIcon },
  ],
  skillsGame: [
    { id: 1, name: 'Unreal Engine', icon: unrealIcon },
    { id: 2, name: 'C#', icon: csharpIcon },
    { id: 3, name: 'Blender', icon: blendeIcon },
    { id: 4, name: 'Maya', icon: mayaIcon },
    { id: 5, name: 'Substance Painter', icon: substanceIcon },
    { id: 6, name: 'Godot', icon: godotIcon },
  ],
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkill: (state, action: PayloadAction<{ category: keyof SkillsState; skill: Omit<Skill, 'id'> }>) => {
      const { category, skill } = action.payload;
      const newSkill = {
        id: state[category].length + 1,
        ...skill,
      };
      state[category].push(newSkill);
    },
    removeSkill: (state, action: PayloadAction<{ category: keyof SkillsState; id: number }>) => {
      const { category, id } = action.payload;
      state[category] = state[category].filter(skill => skill.id !== id);
    },
  },
});

export const { addSkill, removeSkill } = skillsSlice.actions;
export default skillsSlice.reducer;