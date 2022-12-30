import project_one from "public/images/project_x1.png";
import project_two from "public/images/project_x2.jpg";
import project_three from "public/images/project_x3.jpg";
import project_four from "public/images/project_x4.png";
import work_image from "public/images/image_x12.jpg";
import contact_image from "public/images/image_x13.jpg";

const experiences = [
  {
    number: "01",
    title: "Full Stack Intern",
    company: "ALPHA10X",
    from: "November 2022",
    to: "Present",
    description: "Develop new functionalities both on the front-end and the back-end, collaborate with industry experts to define new features, coordinate code reviews and testing and Develop and implement testing strategies.",
    link: "https://www.alpha10x.com/"
  },
  {
    number: "02",
    title: "UI UX, and Front-end Developer",
    company: "CATA",
    from: "Freelance",
    to: "",
    description: "Design, build, and maintain highly reusable JavaScript, HTML and CSS code. Understand the limitations of the tech stack and business model and provide technical advice.",
    link: "https://www.getcata.com/"
  },
  {
    number: "03",
    title: "Front End Developer",
    company: "JOODEK",
    from: "November 2020",
    to: "May 2021",
    description: "Design and develop UI for an e-commerce platform using HTML5, Tailwindcss and Javascript",
    link: "https://www.joodek.com/ma"
  }
];

const projects = [
  {
    id: "00",
    name: "NOTES",
    image: project_four,
    title: 'Personal Notebook',
    description: "I struggle when it comes to choosing the best app for taking notes. So I created my own. Notes is a simple and elegent web app for quickly writing down notes. I developed it using React js, Redux js and Tailwindcss",
    link: "https://github.com/Keddib/Knotes---app"
  },
  {
    id: "01",
    name: "KEDB",
    image: project_one,
    title: 'Personal Portfolio',
    description: "My personal portfolio www.keddib.tech which features some of my github projects as well as my resume and technical skills. I used Next.js, Tailwindcss and Gsap.js for animations. It's fully interactive",
    link: "https://github.com/keddib/portfolio"
  },
  {
    id: "02",
    name: "Pong",
    image: project_two,
    title: "Real Time Multiplayer Game",
    description: "A group project where we built a website for the mighty pong contest.A real- time multiplayer online game where users play pong against each other and create chat rooms.I was responsible of designing and developing the UI interface and configuring the application’s services using docker compose",
    link: "https://github.com/Keddib/Pong"
  },
  {
    id: "03",
    name: "WebServ",
    image: project_three,
    title: "http sever from scratch with C++",
    description: "A team project. We wrote our own Http server form scratch with c++. I was responsible of designing and parsing a configuration file, generating a response based on the configation and making sure our implementation is conditionnal compliant with RFC 7230 to 7235.",
    link: "https://github.com/Keddib/webServer"
  },
];

const aboutCalls = [
  {
    image: contact_image,
    text: 'contact me',
    link: '/contact'
  },
  {
    image: work_image,
    text: 'check my work',
    link: '/work'
  },
]

const workCalls = [
  {
    image: contact_image,
    text: 'contact me',
    link: '/contact'
  },
  {
    image: work_image,
    text: 'check my github',
    link: 'https://github.com/keddib'
  },
]


export { experiences, projects, aboutCalls, workCalls }
