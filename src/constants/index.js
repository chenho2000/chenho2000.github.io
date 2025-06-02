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
  timmies
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
    title: "Data Scientist",
    company_name: "Transport Canada",
    icon: tc,
    iconBg: "#FFFFFF",
    date: "Sep 2021 - Aug 2024",
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
    "CS 680 Introduction to Machine Learning :  Linear models, Neural networks, Decision trees, Generative models, and Sequence models, applied to areas such as Natural Language Processing, Computer Vision, and Robotics. ",
    "STAT 844 Statistical Learning - Advanced Regression : Robust Regression, Nonparametric Regression such as Smoothing Splines, Kernels, Additivemodels, Tree Based Methods, Boosting and Bagging, and Penalized Linear Regression methods such as the Ridge Rregression, Lasso, and their variants.",
    "CS 679 Nerual Network : Simpleneuron models and networks of neurons. Training feedforward networks for classification or regression.Learning using the backpropagation of errors. Unsupervised learning methods. Optimal linear decoding.Recurrent neural networks. Convolutional neural networks. Advanced topics, including adversarial inputs andbiologically plausible learning methods.",
    "SYDE 770 Deployment of Deep Learning Models : Gain practical knowledge on various computer vision tasks such as semantic segmentation, object detection, optical flow, and depth estimation. Selecting appropriate network architectures, data preparation and handling, to deployment on edge devices. Infrastructure setup, training, and model compression techniques to ensure efficient deployment." 
    ],
  },
   {
    title: "AI Developer",
    company_name: "Employment and Social Development Canada",
    icon: tc,
    iconBg: "#FFFFFF",
    date: "Sep 2024 - Present",
    points: [
      "Developed, deployed, and maintained a domain-specific Agent chatbot application using React.js and Agentic RAG",
      "Leveraged Azure Functions (Timer, Queue, Event Grid triggers) for automated file handling",
      "Integrated Azure Blob Storage and Cosmos DB for scalable data storage",
      "Implemented CI/CD pipelines using Azure DevOps for seamless build, testing, and deployment",
      "Enforced Role-Based Access Control (RBAC) with Azure Active Directory",
      "Managed user groups and permissions for secure access to storage, vector indexes, and user roles.",
      "Fine-tuned Llama 3 using Azure Machine Learning Studio and Azure AI Foundry to improve domain-specific accuracy.",
      "Conducted adversarial testing using PyRIT and Promptfoo, identifying and mitigating 85%+ of compliance risks."
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
    name: "Paper Cup Classification",
    description:
      " A computer vision system for detecting Tim Hortons cups (Timmies) and generic paper cups in images using YOLOv11. Covers the full ML lifecycle.",
    tags: [
      {
        name: "CV",
        color: "blue-text-gradient",
      },
      {
        name: "Deployment",
        color: "green-text-gradient",
      },
      {
        name: "YOLO",
        color: "pink-text-gradient",
      },
    ],
    image: timmies,
    source_code_link:
      "https://github.com/chenho2000/Paper-Cup-Brand-Classification",
  },
];

export { services, technologies, experiences, testimonials, projects };
