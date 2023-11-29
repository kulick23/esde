import { renderEntireTree } from "../render";
let state = {

  NewsPage: {
    news: [
      { id: 1, name: 'Hackathon', date: "19.10.21", desc: 'Join us at the upcoming hackathon where talented developers, designers, and innovators gather to collaborate, create, and showcase their projects. This exciting event will provide a platform for participants to explore new technologies, develop innovative solutions, and compete for amazing prizes. Dont miss the opportunity to network with industry professionals, learn from experts, and turn your ideas into reality. Get ready to code, innovate, and make a difference at our upcoming hackathon!', img: 'https://ideafoster.com/wp-content/uploads/2023/03/hackaton-concept-works-922.jpeg', text:'Are you ready to unleash your creativity and technical prowess? Our upcoming hackathon promises an exhilarating experience for all tech enthusiasts. Whether youre a seasoned developer, a creative designer, or an aspiring innovator, this event offers a unique platform to collaborate and transform your ideas into reality. Scheduled to take place at [Location] on [Date], our hackathon will bring together diverse talents from around the region. Participants will have the chance to dive into cutting-edge technologies, work on real-world challenges, and craft innovative solutions that could potentially shape the future. In addition to the thrill of coding and problem-solving, attendees will have the opportunity to network with industry professionals, gain insights from tech experts, and compete for coveted prizes. The hackathon is not just about competition; its a celebration of innovation and a chance to be part of a dynamic community dedicated to pushing boundaries and making a positive impact. Whether youre a seasoned hackathon veteran or considering your first foray into this exciting world, mark your calendars and prepare to join us for an unforgettable experience. Stay tuned for more details on registration and event specifics as we gear up to host an event that promises to inspire, challenge, and empower. Get ready to bring your A-game, innovative spirit, and collaborative mindset as we embark on a journey of creativity, technology, and endless possibilities. Lets make this hackathon an event to remember!' },
      { id: 2, name: 'Hackathon', date: "19.10.21", img: 'https://tfwlab.wales/wp-content/uploads/2022/08/HACKATHON-1.png' },
      { id: 3, name: 'Hackathon', date: "19.10.21", img: 'https://ideafoster.com/wp-content/uploads/2023/03/hackaton-concept-works-922.jpeg' },
      { id: 4, name: 'Hackathon', date: "19.10.21", img: 'https://tfwlab.wales/wp-content/uploads/2022/08/HACKATHON-1.png' }
    ]
  },


}
export let addNews = (newname, newdate, newimg, newdesc, newtext) =>{
  let lastId = Math.max(...state.NewsPage.news.map(newsItem => newsItem.id));
  let newNews = {
    id: lastId + 1,
    name: newname,
    date: newdate,
    img: newimg,
    desc: newdesc,
    text: newtext
  }
  state.NewsPage.news.push(newNews);
  renderEntireTree(state);
}
export let removeNews = (newsId) => {
  state.NewsPage.news = state.NewsPage.news.filter(newsItem => newsItem.id !== newsId);
  renderEntireTree(state);
}
export default state;

