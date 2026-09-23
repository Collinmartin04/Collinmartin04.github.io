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
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 'er-admissions-forecasting',
    title: 'ER Admissions Forecasting',
    category: 'Demand Forecasting',
    description:
      'Emergency rooms struggle to staff for unpredictable patient volumes. I analyzed 10+ years of NHS England A&E data and compared SARIMAX, Prophet, and XGBoost models, cutting forecast error by 42%. The results are delivered through an interactive Streamlit dashboard.',
    tags: ['Python', 'Pandas', 'Excel', 'Streamlit', 'NumPy', 'SARIMAX', 'Prophet', 'XGBoost'],
    metrics: [
      { label: 'Model MAPE', value: '1.8%' },
      { label: 'Baseline MAPE', value: '3.1%' },
      { label: 'Forecast error', value: '−42%' },
    ],
    accent: 'accent',
    githubUrl: 'https://github.com/Collinmartin04/ER-Admissions-Forecast',
  },
  {
    id: 'or-check-in',
    title: 'QR Check-In System',
    category: 'Full-Stack Application',
    description:
      'Wofford College needed a faster way to track attendance for classes and campus events. With a four-person Agile team, I built API routes, database models, SSO authentication, and automated tests for a full-stack platform with QR check-ins, attendance analytics, and CSV exports. Wofford plans to adopt it campus-wide.',
    tags: ['Python', 'PostgreSQL', 'React', 'TypeScript', 'FastAPI', 'Docker', 'Auth0'],
    metrics: [],
    accent: 'gold',
    githubUrl: 'https://github.com/joelgammah/Attendance-Checkin',
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
