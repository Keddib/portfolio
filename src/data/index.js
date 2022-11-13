import project_one from "public/images/image_x12.jpg";
import about_call_one from "public/images/image_x12.jpg";
import about_call_two from "public/images/image_x13.png";

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
    image: project_one,
    title: 'Personal Portfolio 2022',
    description: "Design and develop UI for an e-commerce platform using HTML5, Tailwindcss and Javascript",
    link: "https://github.com/keddib/portfolio"
  },
];

const aboutCalls = [
  {
    image: project_one,
    text: 'check my work',
    link: '/work'
  },
  {
    image: project_one,
    text: 'contact me',
    link: '/contact'
  }
]

const workCalls = [
  {
    image: about_call_one,
    text: 'check my work',
    link: '/work'
  },
  {
    image: about_call_two,
    text: 'contact me',
    link: '/contact'
  },
]


export { experiences, projects, aboutCalls, workCalls }
