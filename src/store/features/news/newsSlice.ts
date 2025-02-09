import { createSlice } from '@reduxjs/toolkit';
import Hackathon from '../../../Assets/News/hackaton.jpeg';
import Epam from '../../../Assets/News/EPAM.jpeg';
import Lab from '../../../Assets/News/lab.jpg';
import ny from '../../../Assets/News/ny.jpg';


const initialState = {
  news: [
    { id: 1, name: 'Hackathon', type: "Event", date: "19.10.23", desc: 'Join us at the upcoming hackathon...', img: Hackathon, text: 'Are you ready to unleash your creativity and technical prowess? Our upcoming hackathon promises an exhilarating experience for all tech enthusiasts. Whether youre a seasoned developer, a creative designer, or an aspiring innovator, this event offers a unique platform to collaborate and transform your ideas into reality. Scheduled to take place at [Location] on [Date], our hackathon will bring together diverse talents from around the region. Participants will have the chance to dive into cutting-edge technologies, work on real-world challenges, and craft innovative solutions that could potentially shape the future. In addition to the thrill of coding and problem-solving, attendees will have the opportunity to network with industry professionals, gain insights from tech experts, and compete for coveted prizes. The hackathon is not just about competition; its a celebration of innovation and a chance to be part of a dynamic community dedicated to pushing boundaries and making a positive impact. Whether youre a seasoned hackathon veteran or considering your first foray into this exciting world, mark your calendars and prepare to join us for an unforgettable experience. Stay tuned for more details on registration and event specifics as we gear up to host an event that promises to inspire, challenge, and empower. Get ready to bring your A-game, innovative spirit, and collaborative mindset as we embark on a journey of creativity, technology, and endless possibilities. Lets make this hackathon an event to remember!' },
    { id: 2, name: 'New semestr', type: "University", date: "01.10.23", img: Epam, text: 'Hello everyone,As we embark on a new semester, I want to extend my warmest congratulations to all the students at our esteemed IT university. This is a time for fresh beginnings, new challenges, and exciting opportunities. May this semester be filled with discovery, growth, and success as we delve into the ever-evolving world of technology.Lets embrace the chance to expand our knowledge, collaborate with peers, and push the boundaries of what we can achieve. Together, lets make this semester a rewarding journey of learning and innovation.Wishing you all the best for the new semester ahead!Warm regards' },
    { id: 3, name: 'Student Lab', type: "Project", date: "10.11.23", img: Lab, text: 'A student laboratory is a space where undergraduates can conduct experiments, carry out research, and work on practical projects related to their field of study. These labs provide hands-on learning experiences and opportunities for students to apply theoretical knowledge in a real-world setting. They are equipped with various tools, equipment, and resources to support students in their academic pursuits, fostering a collaborative and innovative environment for exploration and discovery', text: 'The students laboratory at the university introduced new equipment for research in various fields of science. This initiative aims to provide students with advanced tools to enhance their academic experience. The laboratory team believes that this upgrade will significantly contribute to the quality of research projects and will further students understanding of complex scientific concepts. The university plans to organize workshops and training sessions to familiarize students with the operation of the new equipment. Additionally, the laboratory management encourages students to propose innovative projects that can benefit from the newly available technologies.' },
    { id: 4, name: 'Secret Santa', type: "University", date: "24.12.23", img: ny, text:'Students at XYZ University are gearing up for an exciting event as they prepare for a secret Santa gift exchange. The university has organized this festive tradition to bring a sense of joy and camaraderie among the students during the holiday season. Participants are eagerly looking forward to randomly selecting their secret gift recipients and surprising them with carefully chosen presents. The event is set to take place next week, and it promises to be a delightful and heartwarming experience for all involved' }
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