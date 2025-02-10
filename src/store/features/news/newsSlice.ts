import { createSlice } from '@reduxjs/toolkit';
import Hackathon from '../../../Assets/News/hackaton.webp';
import Epam from '../../../Assets/News/EPAM.webp';
import Lab from '../../../Assets/News/lab.webp';
import ny from '../../../Assets/News/newY.webp';
import open from '../../../Assets/News/welcom.webp';

import { newsContent } from './newsContent.tsx';


const initialState = {
  news: [
    { 
      id: 1, 
      name: 'Welcome', 
      type: "University", 
      date: "15.10.22", 
      desc: 'Academic degree: Bachelor of Computer Science', 
      img: open, 
      text: newsContent.open 
    },
    { 
      id: 2, 
      name: 'Hackathon', 
      type: "Event", 
      date: "19.10.23", 
      desc: 'Join our 48-hour coding marathon! Build innovative solutions, win prizes, and network with industry professionals. Open for all skill levels.', 
      img: Hackathon, 
      text: newsContent.hackathon 
    },
    { 
      id: 3, 
      name: 'New semestr', 
      type: "University", 
      date: "01.10.23", 
      desc: 'Welcome to the Fall 2023 semester! Get ready for new challenges, exciting projects, and enhanced learning opportunities in computer science.', 
      img: Epam, 
      text: newsContent.newSemester 
    },
    { 
      id: 4, 
      name: 'Student Lab', 
      type: "Project", 
      date: "10.11.23", 
      desc: 'Our university launches a state-of-the-art student laboratory equipped with cutting-edge technology for research and development projects.', 
      img: Lab, 
      text: newsContent.studentLab 
    },
    { 
      id: 5, 
      name: 'Secret Santa', 
      type: "University", 
      date: "24.12.23", 
      desc: 'Join our festive Secret Santa event! Spread joy and create memorable moments with your fellow students during this holiday season.', 
      img: ny, 
      text: newsContent.secretSanta 
    }
  ]
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNews: (state, action) => {
      const newNews = {
        id: state.news.length + 1,
        ...action.payload
      };
      state.news.push(newNews);
    },
    removeNews: (state, action) => {
      state.news = state.news.filter(newsItem => newsItem.id !== action.payload);
    }
  }
});

export const { addNews, removeNews } = newsSlice.actions;
export default newsSlice.reducer;