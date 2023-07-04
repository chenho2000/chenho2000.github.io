import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  uw,
  ut,
  tc,
  py,
  az,
  Bash,
  c,
  java,
  sql,
  pbi,
  pytc,
  r,
  skl,
  shopify,
  filesys,
  inp,
  time,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Science Engineering",
    icon: web,
  },
  {
    title: "Artificial Intelligence",
    icon: mobile,
  },
  {
    title: "Web Programming",
    icon: backend,
  },
  {
    title: "Software Programming",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: py,
  },
  {
    name: "az",
    icon: az,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "pbi",
    icon: pbi,
  },
  {
    name: "pytc",
    icon: pytc,
  },
  {
    name: "r",
    icon: r,
  },
  {
    name: "skl",
    icon: skl,
  },
];

const experiences = [
  {
    title: "Honours Bachelor of Science",
    company_name: "University of Toronto",
    icon: ut,
    iconBg: "#FFFFFF",
    date: "Sep 2018 - Jun 2023",
    points: [
      "Completed Computer Science Specialist (Science Program) and Mathematics Minor (Science Program).",
      "Dean's List Scholar: 2020,2021,2022,2023",
      "Mathematical and Computational Sciences Honour Roll for 2021-2022",
      "PROGRAMMING SKILL: Python (Numpy, Pandas, SciPy, OpenCV, Matplotlib, Sklearn, PyTorch), C (Linux), Java, JavaScript(React, Node, Express), MySQL, HTML, CSS, Git, Bash, R, Shell script, MongoDB, MIPS, Mininet, Microsoft Azure",
      "SOFTWARE SKILL: Google Collab, Bash (Linux), VS Code, Microsoft Suits, Jupyter Notebook, Microsoft Azure, power apps, PyCharm, WingIDE, Eclipse, RStudio, Anaconda, Homebrew",
      "UPPER YEAR courses taken:",
      "CSC373 : Algorithm Design and AnalysisAlgorithm Design and Analysis",
      "CSC363 : Computational Complexity and Computability",
      "CSC384 : Introduction to Artificial IntelligenceIntroduction to Artificial Intelligence",
      "CSC343 : Introduction to Databases",
      "CSC420 : Introduction to Image Understanding",
      "CSC311 : Introduction to Machine Learning",
      "MAT406 : Mathematical Introduction to Game Theory",
      "CSC413 : Neural Networks and Deep Learning",
      "CSC369 : Operating Systems",
      "CSC358 : Principles of Computer Networks",
      "CSC309 : Programming on the Web",
    ],
  },
  {
    title: "Data Science FSWEP Student",
    company_name: "Transport Canada",
    icon: tc,
    iconBg: "#FFFFFF",
    date: "Sep 2021 - Present",
    points: [
      "Construct Surveillance Analytical Risk Algorithm (SARA) with the team.",
      "Coded and debugged SARA-P (Python) which provides a mathematical calculation and derivation of risk scores using an automated python program in the Databricks Azure platform. This improves planning for the five Transport Canada regions.",
      "Using Power apps and Data verse constructs the data collection tool “SARA-Q” (Questionnaire) which provides the risk scores compiled from questionnaires answered by inspectors. SARA-Q is developed for replacing the current practice of collecting inspectors' heuristic judgments about the risk of specific air operators.",
      "Using Power-bi to construct “SARA-R” (Report). It combines both in the form of visualization and provides an understanding of analyzing trends in the surveillance risk planning or any outliers associated with the risk scores.",
      "Analysis of data using python / R and construction of data visualization dashboard using power bi for ‘rail safety’ inspection plans.",
    ],
  },
  {
    title: "Master of Data Science and Artificial Intelligence",
    company_name: "University of Waterloo",
    icon: uw,
    iconBg: "#FFFFFF",
    date: "Sep 2023 - Present",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "VS (EXT-based) File System",
    description:
      "Designed structure of File system (placement of different block groups, information to be stored in each different block)",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "File System",
        color: "green-text-gradient",
      },
      {
        name: "Operating System",
        color: "pink-text-gradient",
      },
    ],
    image: filesys,
    source_code_link:
      "https://github.com/chenho2000/File-System-Implementation",
  },
  {
    name: "Region Filling and Object Removal",
    description:
      "Developed a program to fill the missing pixels of an image or remove an object from the image.",
    tags: [
      {
        name: "opencv",
        color: "blue-text-gradient",
      },
      {
        name: "Inpainting",
        color: "green-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "pink-text-gradient",
      },
    ],
    image: inp,
    source_code_link:
      "https://github.com/chenho2000/Region-Filling-and-Object-Removal",
  },
  {
    name: "Timer Turner",
    description:
      " A JavaScript library designed to simplify your life by replacing the native JavaScript Date object. With Use Time Object, you can experience enhanced convenience and ease in handling time-related operations.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: time,
    source_code_link:
      "https://github.com/chenho2000/js-library-chenho92/tree/master",
  },
];

export { services, technologies, experiences, testimonials, projects };
