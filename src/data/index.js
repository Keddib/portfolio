import project_one from "public/images/project_x1.jpg";
import project_test from "public/images/image_x12.jpg";
import work_image from "public/images/image_x12.jpg";
import contact_image from "public/images/image_x13.jpg";

const experiences = [
  {
    number: "01",
    title: "Full Stack Intern",
    company: "ALPHA10X",
    from: "November 2022",
    to: "Present",
    description: "Design and develop UI for an e-commerce platform using HTML5, Tailwindcss and Javascript",
    link: "https://www.alpha10x.com/"
  },
  {
    number: "02",
    title: "UX/UI Web Integrator",
    company: "CATA",
    from: "Freelance",
    to: "",
    description: "Design and develop UI for an e-commerce platform using HTML5, Tailwindcss and Javascript",
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
    id: "01",
    name: "KEDB",
    image: project_one,
    title: 'Personal Portfolio',
    description: "Design and develop UI for an e-commerce platform using HTML5, Tailwindcss and Javascript",
    link: "https://github.com/keddib/portfolio"
  },
  {
    id: "02",
    name: "Pong",
    image: project_test,
    title: "Real Time Multiplayer Game",
    description: "A group project where we built a website for the mighty pong contest.A real- time multiplayer online game where users play pong against each other and create chat rooms.I was responsible of designing and developing the UI interface and configuring the application’s services using docker compose",
    link: "https://github.com/Keddib/Pong"
  },
  {
    id: "03",
    name: "WebServ",
    image: project_test,
    title: "http sever from scratch with C++",
    description: "A team project. We wrote our own Http server form scratch with c++. I was responsible of designing and parsing a configuration file, generating a response based on the configation and making sure our implementation is conditionnal compliant with RFC 7230 to 7235.",
    link: "https://github.com/Keddib/webServer"
  },
  {
    id: "04",
    name: "ft_services",
    image: project_test,
    title: "Kubernetes - Docker",
    description: "Setup of a Kubernetes cluster. Services include nginx, FTPS, Wordpress and PHPMyAdmin working with MySQL database, and Grafana linked to InfluxDB database for monitoring.I built custom Docker images for each of those, before deploying and exposing them all with custom Yaml files.",
    link: "https://github.com/Keddib/Ft_services"
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
