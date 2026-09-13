import {
  FaAws,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLayerGroup,
  FaLinkedin,
  FaMobileAlt,
  FaProjectDiagram,
  FaUsers,
} from 'react-icons/fa'
import {
  SiAngular,
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPytorch,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import { FaNodeJs, FaPython, FaReact } from 'react-icons/fa'

export const profile = {
  name: 'Jesther Jordan Minor',
  initials: 'JM',
  avatar: '/assets/images/profile/jesther-jordan-minor.jpg',
  role: 'AI Fullstack Software Engineer',
  intro: "Hi, I'm",
  summary:
    'I build exceptional digital experiences that live on the web. Specializing in creating responsive, performant applications with modern technologies.',
  email: 'rejesthm@gmail.com',
  github: 'https://github.com/rejesthm',
  linkedin: 'https://www.linkedin.com/in/jesther-jordan-minor-73234813a/',
}

export const tabs = [
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'contact', label: 'Contact' },
]

export const contacts = [
  {
    icon: FaEnvelope,
    label: 'Email',
    href: `mailto:${profile.email}`,
    value: profile.email,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: profile.github,
    value: 'github.com/rejesthm',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: profile.linkedin,
    value: 'linkedin.com/in/jesther-jordan-minor',
  },
]

export const stats = [
  { value: 7, suffix: '+', label: 'Years Experience', icon: FaBriefcase },
  { value: 30, suffix: '+', label: 'Projects Built', icon: FaProjectDiagram },
  { value: 20, suffix: '+', label: 'Technologies Used', icon: FaLayerGroup },
  { value: 15, suffix: '+', label: 'Clients & Users', icon: FaUsers },
]

export const services = [
  {
    icon: FaCode,
    title: 'Fullstack Development',
    text: 'Responsive, performant web platforms with production-minded frontend and backend architecture.',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile Applications',
    text: 'Cross-platform app experiences with clear flows, stable integrations, and careful interface polish.',
  },
  {
    icon: SiOpenai,
    title: 'AI Product Engineering',
    text: 'Applied AI features, workflow automation, and intelligent product surfaces built into real applications.',
  },
  {
    icon: FaLayerGroup,
    title: 'Systems Integration',
    text: 'APIs, databases, cloud services, and third-party tools connected into maintainable product systems.',
  },
]

export const experiences = [
  { date: '2025', role: 'Freelance Software Engineer', company: 'Cardan Marketing', sortEnd: 2025 },
  { date: '2024 - 2025', role: 'Software Engineer', company: 'Dorset Tech', sortEnd: 2025 },
  { date: '2024', role: 'Fullstack Software Engineer', company: 'SignTracker', sortEnd: 2024 },
  { date: '2023 - 2024', role: 'Fullstack Software Engineer', company: 'Articulacy', sortEnd: 2024 },
  { date: '2021 - 2022', role: 'Fullstack Software Engineer', company: 'LVNDR - Healthcare', sortEnd: 2022 },
  { date: '2021 - 2022', role: 'Mobile Software Engineer', company: 'Milkomeda', sortEnd: 2022 },
  { date: '2021 - 2022', role: 'MERN Stack Developer', company: 'Creative Interlace', sortEnd: 2022 },
  { date: '2020 - 2021', role: 'Fullstack Developer', company: 'Travelpud', sortEnd: 2021 },
  { date: '2018 - 2019', role: 'Fullstack Developer', company: 'Segworks', sortEnd: 2019 },
].sort((a, b) => b.sortEnd - a.sortEnd)

export const technologies = [
  { name: 'React', icon: FaReact, color: 'text-cyan-300', category: 'Frontend', level: 92 },
  { name: 'Flutter', icon: SiFlutter, color: 'text-sky-300', category: 'Frontend', level: 92 },
  { name: 'Vue.js', icon: SiVuedotjs, color: 'text-emerald-300', category: 'Frontend', level: 84 },
  { name: 'Angular', icon: SiAngular, color: 'text-red-400', category: 'Frontend', level: 78 },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-neutral-100', category: 'Frontend', level: 84 },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-300', category: 'Frontend', level: 86 },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300', category: 'Frontend', level: 92 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300', category: 'Frontend', level: 88 },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400', category: 'Backend', level: 90 },
  { name: 'Python', icon: FaPython, color: 'text-yellow-300', category: 'Backend', level: 82 },
  { name: 'Laravel', icon: SiLaravel, color: 'text-red-400', category: 'Backend', level: 80 },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', category: 'Database', level: 84 },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300', category: 'Database', level: 82 },
  { name: 'MySQL', icon: SiMysql, color: 'text-orange-300', category: 'Database', level: 84 },
  { name: 'Firebase', icon: SiFirebase, color: 'text-amber-300', category: 'Database', level: 86 },
  { name: 'AWS', icon: FaAws, color: 'text-orange-300', category: 'Cloud', level: 78 },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-300', category: 'Cloud', level: 76 },
  { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-300', category: 'AI/ML', level: 76 },
  { name: 'PyTorch', icon: SiPytorch, color: 'text-red-400', category: 'AI/ML', level: 72 },
  { name: 'scikit-learn', icon: SiScikitlearn, color: 'text-amber-300', category: 'AI/ML', level: 74 },
  { name: 'OpenAI', icon: SiOpenai, color: 'text-emerald-300', category: 'AI/ML', level: 86 },
]

export const techCategories = ['Frontend', 'Backend', 'Database', 'Cloud', 'AI/ML']
