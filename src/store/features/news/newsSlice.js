import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: [
    { id: 1, name: 'Hackathon', type: "Event", date: "19.10.23", desc: 'Join us at the upcoming hackathon...', img: 'https://ideafoster.com/wp-content/uploads/2023/03/hackaton-concept-works-922.jpeg', text: 'Are you ready to unleash your creativity...' },
    { id: 2, name: 'New semestr', type: "University", date: "01.10.23", img: 'https://ubn.news/wp-content/uploads/2023/08/hq_EPAM.jpeg', text: 'Hello everyone,As we embark on a new semester...' },
    { id: 3, name: 'Student Lab', type: "Project", date: "10.11.23", img: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/7696542/619842_603570.png', desc: 'A student laboratory is a space where undergraduates...', text: 'The students laboratory at the university introduced new equipment...' },
    { id: 4, name: 'Secret Santa', type: "University", date: "24.12.23", img: 'https://99px.ru/sstorage/56/2012/12/image_56201212054554187250.jpg', text:'Students at XYZ University are gearing up for an exciting event...' }
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