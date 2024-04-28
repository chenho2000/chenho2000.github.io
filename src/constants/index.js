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
      "As a specialist in data science, I contribute to the development and deployment of advanced risk assessment methodologies for Transport Canada's regional operations. Key contributions include:",
      "Architecting and implementing sophisticated risk algorithms using Python on the Databricks Azure platform, automating risk score calculations and enhancing planning efficiency.",
      "Developing intuitive data collection tools utilizing Power Apps and Data Verse, revolutionizing the assessment process by replacing heuristic judgments with questionnaire-based analytics.",
      "Designing insightful reports with Power BI, offering comprehensive visualizations for trend analysis and outlier detection in surveillance risk planning.",
      "Conducting data analysis and crafting dynamic visualization dashboards using Python/R, empowering informed decision-making in safety inspection plans.",
      "Python: Automate tasks with scripts, Analyze data using libraries like Pandas, Build machine learning models",
      "Microsoft Azure:Deploy cloud resources, Use Azure SQL Database, Orchestrate data workflows with Azure Data Factory, Develop machine learning models with Azure ML.",
      "Oracle Database (SQL): Manage and optimize databases, Write SQL queries, Design database schemas.",
      "Power BI: Create interactive dashboards, Clean and transform data with Power Query, Develop data models, Share insights with stakeholders.",
      "Tableau: Develop interactive visualizations, Connect to various data sources. Create calculations and calculated fields, Share insights with colleagues."
    ],
  },
  {
    title: "Master of Data Science and Artificial Intelligence",
    company_name: "University of Waterloo",
    icon: uw,
    iconBg: "#FFFFFF",
    date: "Sep 2023 - Present",
    points: ["STAT 845 Statistical Concepts for Data Science : frequentist and Bayesian inference, EM algorithm, the Gibbs sampler, bootstrap, linear models, survey sampling, experimental design", 
    "STAT 847 Exploratory Data Analysis : File format handling, Data cleaning and organization, Statistical analysis, Missing data management, Regression modeling, Variable selection, Dimensional plotting, Publication-quality visuals, Confidential data handling", 
    "STAT 940 Deep Learning : Feedforward Deep Networks, Optimization and regularization for Training Deep Models, Convolutional Networks, Recurrent Neural Networks, Seq2seq models, Deep Generative Models (Moment Matching Networks), Generative Adversarial Networks (GANs), Attention, Self-attention, Transformers, Performers, BERT, GPT, Auto-Encoders, Variational Autoencoders, Deep Reinforcement Learning, Graph Neural Networks, Diffusion models", 
    "CS 794 Optimization for Data Science: Linear system (linear regression), Gradient Descent (logistic regression), Projected Gradient (white-box adversarial attack), Proximal Gradient (lasso), Conditional Gradient (recommendation system), Subgradient (svm), Mirror Descent (reinforcement learning), Metric Gradient (distributed learning), Coordinate Gradient (graph clustering), Fictitious Play (poker), Acceleration (total variation denoising), Smoothing (robust svm), Alternating (VAE), Minimax (adversarial training), Averaging (GANs), Splitting (federated learning), Extragradient (max entropy), Stochastic Gradient (Boltzmann machine), Variance Reduction (boosting), Derivative-free (black-box adversarial attack), Riemannian Gradient (hyperbolic embedding), Newton (NAS), Extrapolation (PageRank)",
    "CS 631 Data-Intensive Distributed Analytics : Big Data, MapReduce Algorithm Design, Spark, Analyzing Text, Analyzing Graphs, Data Mining and Machine Learning, Analyzing Relational Data, Real-Time Analytics (Streaming), Mutable State (Big Table / HBase), Analyzing Graphs (Giraph, Spark GraphX)", 
    ],
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
      "Structured the file system design based on EXT,",
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
    name: "Live Object Tracking",
    description:
      "Presents a novel algorithm integrating efficient transformer variants like CMT and WaveViT into the Siamese network architecture.",
    tags: [
      {
        name: "Object Tracking",
        color: "blue-text-gradient",
      },
      {
        name: "Vision Transformer",
        color: "green-text-gradient",
      },
      {
        name: "CV",
        color: "pink-text-gradient",
      },
    ],
    image: inp,
    source_code_link:
      "https://github.com/chenho2000/Live-Object-Tracking-using-Efficient-Vision-Transformers",
  },
  {
    name: "Timer Turner",
    description:
      " Experience enhanced convenience with Use Time Object, a JavaScript library designed to streamline time-related operations by replacing the native Date object.",
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
