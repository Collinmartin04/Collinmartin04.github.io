export type PageId = 'home' | 'skills' | 'projects' | 'experience';

export const navItems: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
];

export const profile = {
  name: 'Collin Martin',
  role: 'Computer Science Student & Data Analyst',
  tagline: 'Building useful software with data',
  intro:
    'I am a computer science student at Wofford College with a concentration in data science. I enjoy building practical software, analyzing complex datasets, and turning technical ideas into tools that people can use.',
  intro2:
    'My experience spans software engineering, data pipelines, exploratory analysis, machine learning, and full-stack application development. I am especially interested in work where strong engineering and thoughtful analysis come together.',
  location: 'Charlotte, NC',
  email: 'collin.martinn04@gmail.com',
  phone: '803-317-5969',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Collinmartin04', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/collin-martin-6461482b5/', icon: 'linkedin' },
  ],
};

export type SkillCategory = {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'code',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'SQL', level: 88 },
      { name: 'JavaScript', level: 86 },
      { name: 'TypeScript', level: 82 },
      { name: 'HTML / CSS', level: 84 },
    ],
  },
  {
    title: 'Libraries & Frameworks',
    icon: 'chart',
    skills: [
      { name: 'Pandas / NumPy', level: 90 },
      { name: 'React', level: 84 },
      { name: 'Matplotlib', level: 82 },
      { name: 'Tableau / Power BI', level: 78 },
      { name: 'React', level: 84 },
    ],
  },
  {
    title: 'Data & Machine Learning',
    icon: 'brain',
    skills: [
      { name: 'Data Cleaning & ETL', level: 92 },
      { name: 'Exploratory Data Analysis', level: 90 },
      { name: 'Time Series Forecasting', level: 82 },
      { name: 'SARIMAX / Prophet / XGBoost', level: 78 },
      { name: 'OCR with OpenCV / Tesseract', level: 76 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: 'database',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 82 },
      { name: 'PostgreSQL / MySQL', level: 84 },
      { name: 'Azure', level: 76 },
      { name: 'Jupyter / VSCode', level: 92 },
    ],
  },
];

export const tools = [
  'Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Pandas',
  'NumPy', 'Matplotlib', 'Tableau', 'Power BI', 'React', 'Git', 'Docker',
  'Jupyter', 'Azure', 'PostgreSQL', 'MySQL', 'VSCode', 'GitHub', 'Tesseract',
  'OpenCV', 'Streamlit', 'Tailwind CSS',
];

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accent: 'accent' | 'gold' | 'blue';
};

export const projects: Project[] = [
  {
    id: 'er-admissions-forecasting',
    title: 'ER Admissions Forecasting',
    category: 'Time Series',
    description:
      'Analyzed more than ten years of NHS England A&E time-series data to identify demand patterns and forecast patient volumes. Built a data pipeline feeding SARIMAX, Prophet, and XGBoost models to improve staffing decisions.',
    tags: ['Python', 'Pandas', 'Excel', 'Streamlit', 'NumPy', 'Prophet'],
    metrics: [
      { label: 'Model MAPE', value: '1.8%' },
      { label: 'Baseline MAPE', value: '3.1%' },
      { label: 'Accuracy gain', value: '+43%' },
    ],
    accent: 'accent',
  },
  {
    id: 'or-check-in',
    title: 'OR Check In',
    category: 'Full-Stack Application',
    description:
      'Developed a full-stack event management platform for student organizations. The application includes event scheduling, RSVP tracking, PostgreSQL storage, Auth0-based SSO, role-based access control, QR check-in, recurring events, CSV exports, and audit logging.',
    tags: ['Python', 'PostgreSQL', 'React', 'TypeScript', 'FastAPI', 'Docker', 'Auth0'],
    metrics: [
      { label: 'Access control', value: 'RBAC' },
      { label: 'Authentication', value: 'SSO' },
      { label: 'Deployment', value: 'Docker' },
    ],
    accent: 'gold',
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
    location: 'Remote',
    description:
      'Contributed to production web applications serving more than 1 million users while collaborating with a cross-functional team of over 20 engineers.',
    highlights: [
      'Developed and tested new features and bug fixes using React, TypeScript, Git, SQL, and C# in an agile workflow.',
      'Used Azure DevOps to manage sprint work, track tickets, and coordinate code reviews and deployments as part of a 20+ person agile team.',
      'Wrote SQL queries to create, validate, and profile test datasets, ensuring data quality and consistency across the development and testing workflow.',
    ],
    tags: ['React', 'TypeScript', 'C#', 'SQL', 'Git', 'Azure DevOps'],
  },
  {
    role: 'Undergraduate Research — Data Science & Analytics',
    company: 'Wofford College',
    period: 'June 2025 — Aug. 2025',
    location: 'Charlotte, NC',
    description:
      'Applied data engineering, OCR, and exploratory analysis to historical economic research datasets.',
    highlights: [
      'Built an ETL pipeline using Python, Tesseract, and OpenCV to extract tabular data from scanned New York Stock Exchange directories from 1868–1933 into structured CSV datasets.',
      'Cleaned and standardized firm name and location data using Python, resolving OCR inconsistencies to ensure accurate downstream analysis.',
      'Performed exploratory data analysis and built visualizations with Polars and Datawrapper to support economic research on U.S. financial market access prior to the Great Depression.',
    ],
    tags: ['Python', 'Tesseract', 'OpenCV', 'Polars', 'Datawrapper', 'ETL'],
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
    period: 'Jan. 2027 — Dec. 2028',
    detail: 'Online graduate program based in Atlanta, GA.',
  },
  {
    degree: 'B.S. in Computer Science',
    school: 'Wofford College',
    period: 'Aug. 2022 — May 2026',
    detail: 'Minor in Business; concentration in Data Science. GPA: 3.43. Dean’s List and S.C. LIFE Scholarship recipient. Study Abroad: Vienna, Austria, Fall 2024.',
  },
];

export const certifications = [
  'Concentration in Data Science',
  'Minor in Business',
  'S.C. LIFE Scholarship Recipient',
  'Study Abroad — Vienna, Austria, Fall 2024',
];
