export type PageId = 'home' | 'skills' | 'projects' | 'experience';

export const navItems: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
];

export const profile = {
  name: 'Collin Martin',
  role: 'Data Science & Analytics',
  tagline: 'Building useful software with data',
  intro:
    "I'm a computer science graduate from Wofford College, starting a Master's in Analytics at Georgia Tech in 2027. I have hands-on experience across data science, analytics, and software development, building machine learning models, data pipelines, and dashboards that solve real-world problems.",
  intro2:
    "My experience spans data analysis, forecasting, data pipelines, and full-stack development. I'm most interested in work where thoughtful analysis and strong engineering come together, where the insight doesn't stop at a notebook but becomes something people actually use.",
  location: 'Charlotte, NC',
  email: 'collin.martinn04@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Collinmartin04', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/collin-martin-6461482b5/', icon: 'linkedin' },
  ],
};

export type SkillCategory = {
  title: string;
  icon: string;
  skills: { name: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'code',
    skills: [
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'R' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'C#' },
      { name: 'HTML/CSS' },
    ],
  },
  {
    title: 'Data Analysis & Visualization',
    icon: 'chart',
    skills: [
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Excel' },
      { name: 'Matplotlib' },
      { name: 'Plotly' },
      { name: 'Tableau' },
      { name: 'Power BI' },
      { name: 'DAX' },
      { name: 'Streamlit' },
      { name: 'Seaborn' },
      { name: 'Datawrapper' },
      { name: 'PolicyMap' },
    ],
  },
  {
    title: 'Machine Learning & Forecasting',
    icon: 'brain',
    skills: [
      { name: 'scikit-learn' },
      { name: 'statsmodels' },
      { name: 'SARIMAX' },
      { name: 'Prophet' },
      { name: 'XGBoost' },
      { name: 'Time-Series Forecasting' },
      { name: 'OpenCV' },
      { name: 'Tesseract OCR' },
    ],
  },
  {
    title: 'Engineering & Tools',
    icon: 'database',
    skills: [
      { name: 'Git/GitHub' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Docker' },
      { name: 'Azure DevOps' },
      { name: 'FastAPI' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Jupyter' },
      { name: 'VS Code' },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  filterGroup: 'Data Science' | 'Data Analytics' | 'Software';
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accent: 'accent' | 'gold' | 'blue' | 'purple';
  githubUrl: string;
  videoUrl?: string;
  images?: { src: string; alt: string }[];
  keyFindings?: string[];
};

export const projects: Project[] = [
  {
    id: 'er-admissions-forecasting',
    title: 'ER Admissions Forecasting',
    category: 'Demand Forecasting',
    filterGroup: 'Data Science',
    description:
      'Emergency rooms struggle to staff for unpredictable patient volumes. I analyzed 10+ years of NHS England A&E data and compared SARIMAX, Prophet, and XGBoost models, cutting forecast error by 42%. The results are delivered through an interactive Streamlit dashboard.',
    tags: ['Python', 'Pandas', 'Streamlit', 'NumPy', 'SARIMAX', 'Prophet', 'XGBoost'],
    metrics: [
      { label: 'Model MAPE', value: '1.8%' },
      { label: 'Baseline MAPE', value: '3.1%' },
      { label: 'Forecast error', value: '−42%' },
    ],
    accent: 'accent',
    githubUrl: 'https://github.com/Collinmartin04/ER-Admissions-Forecast',
  },
  {
    id: 'airbnb-roi-optimizer',
    title: 'Airbnb ROI Optimizer',
    category: 'Business Analytics',
    filterGroup: 'Data Analytics',
    description:
      "Prospective Airbnb hosts often don't know where or how to invest for the best return. Using 9,698 real Nashville listings from Inside Airbnb, I built a Streamlit dashboard that compares estimated revenue across 35 districts and room types, with an interactive ROI calculator for testing pricing and availability scenarios.",
    tags: ['Python', 'Pandas', 'Streamlit', 'Matplotlib', 'Seaborn', 'Jupyter'],
    metrics: [
      { label: 'Listings analyzed', value: '9,698' },
      { label: 'Districts compared', value: '35' },
      { label: 'Reviews in dataset', value: '774K' },
    ],
    accent: 'blue',
    githubUrl: 'https://github.com/Collinmartin04/AirBnB-ROI-Optimizer-Project',
  },
  {
    id: 'or-check-in',
    title: 'QR Check-In System',
    category: 'Full-Stack Application',
    filterGroup: 'Software',
    description:
      'Wofford College needed a faster way to track attendance for classes and campus events. With a four-person Scrum team, I built API routes, database models, SSO authentication, and automated tests for a full-stack platform with QR check-ins, attendance analytics, and CSV exports. Wofford plans to adopt it campus-wide.',
    tags: ['Python', 'PostgreSQL', 'React', 'TypeScript', 'FastAPI', 'Docker', 'Auth0'],
    metrics: [],
    accent: 'gold',
    githubUrl: 'https://github.com/joelgammah/Attendance-Checkin',
    videoUrl: '/videos/qr-checkin-demo.mp4',
  },
  {
    id: 'bank-churn-profitability',
    title: 'Bank Customer Churn & Profitability',
    category: 'Business Intelligence',
    filterGroup: 'Data Analytics',
    description:
      'Banks lose revenue when valuable customers leave unnoticed. Using 10,000 retail banking records, I built a MySQL data model with SQL views for profitability and rule-based churn risk scoring, then built Power BI dashboards that flag high-value customers at risk of leaving. Customers the model flagged churned at 36%, nearly double the 20% overall rate.',
    tags: ['MySQL', 'SQL', 'Excel', 'Power BI', 'DAX', 'Data Modeling'],
    metrics: [
      { label: 'Customers analyzed', value: '10,000' },
      { label: 'High-value at-risk', value: '2,745' },
      { label: 'Est. profit at risk', value: '$569K' },
    ],
    accent: 'purple',
    githubUrl: 'https://github.com/Collinmartin04/Bank_Customer_Profitability_And_Churn_Risk_Analysis',
    images: [
      { src: '/images/bank-churn/executive-overview.png', alt: 'Executive Overview dashboard' },
      { src: '/images/bank-churn/profitability-segmentation.png', alt: 'Profitability and Segmentation dashboard' },
      { src: '/images/bank-churn/churn-risk-retention.png', alt: 'Churn Risk and Retention Actions dashboard' },
    ],
    keyFindings: [
      'Single-product customers churned at 28%, compared with 8% for customers with two products.',
      'Inactive members churned at nearly twice the rate of active members (27% vs. 14%).',
      'About 27% of customers are loss-making under the profitability model, even with account fees included.',
    ],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineering Intern',
    company: 'World Finance',
    period: 'May 2026 — Aug. 2026',
    location: 'Greenville, SC',
    description:
      'Contributed to production web applications serving more than 1 million users while collaborating with a cross-functional team of over 20 engineers.',
    highlights: [
      'Wrote SQL queries to create, validate, and profile test datasets, ensuring data quality and consistency across development and testing.',
      'Developed and tested new features and bug fixes using React, TypeScript, C#, and SQL.',
      'Used Azure DevOps to manage sprint work, track tickets, and coordinate code reviews and deployments.',
    ],
    tags: ['SQL', 'React', 'TypeScript', 'C#', 'Next.js', 'Git', 'Azure DevOps'],
  },
  {
    role: 'Undergraduate Research — Data Science & Analytics',
    company: 'Wofford College',
    period: 'Jun. 2025 — Aug. 2025',
    location: 'Spartanburg, SC',
    description:
      'Turned 65 years of scanned stock exchange records into clean, research-ready data for a study on pre-Depression financial markets.',
    highlights: [
      'Built an ETL pipeline (Python, Tesseract, OpenCV) to extract tabular data from scanned NYSE directories (1868–1933) into structured CSV datasets covering 10,000+ firms.',
      'Cleaned and standardized firm name and location data using Python, resolving inconsistencies from OCR errors to ensure accurate downstream analysis.',
      'Performed exploratory data analysis and built visualizations (PolicyMap, Datawrapper) to support economic research on U.S. financial market access prior to the Great Depression.',
    ],
    tags: ['Python', 'Pandas', 'Excel', 'OpenCV', 'Tesseract OCR', 'Data Cleaning'],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    degree: 'M.S. in Analytics',
    school: 'Georgia Institute of Technology',
    period: 'Starting Jan. 2027',
    detail:
      "Incoming graduate student in Georgia Tech's online analytics program, focusing on statistics, machine learning, and data-driven decision-making.",
  },
  {
    degree: 'B.S. in Computer Science',
    school: 'Wofford College',
    period: 'Aug. 2022 — May 2026',
    detail:
      "Concentration in Data Science, Minor in Business. GPA: 3.43. Dean's List, merit-based S.C. LIFE Scholarship. Studied abroad in Vienna, Austria (Fall 2024).",
  },
];
