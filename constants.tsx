
import { Project, Education, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Analyse de Données E-commerce',
    description: 'Dashboard interactif utilisant Python et PowerBI pour visualiser les tendances de ventes et le comportement client.',
    tags: ['Python', 'PowerBI', 'SQL', 'Data Analysis'],
    imageUrl: 'https://picsum.photos/seed/data1/800/450',
    githubUrl: 'https://github.com'
  },
  {
    id: '2',
    title: 'Application de Gestion de Parc IT',
    description: 'Une application fullstack pour suivre l\'inventaire matériel et les tickets de support technique.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/it1/800/450',
    githubUrl: 'https://github.com'
  },
  {
    id: '3',
    title: 'Automatisation Reporting RH',
    description: 'Scripts d\'automatisation pour le traitement des données de paie et génération de rapports mensuels.',
    tags: ['Python', 'Pandas', 'Excel Automation'],
    imageUrl: 'https://picsum.photos/seed/hr1/800/450'
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'e1',
    degree: 'Master en Informatique et Data Science',
    institution: 'Université de Technologie',
    period: '2021 - 2023',
    description: 'Spécialisation en Intelligence Artificielle et analyse prédictive.'
  },
  {
    id: 'e2',
    degree: 'Licence Informatique de Gestion',
    institution: 'Institut Supérieur des Sciences',
    period: '2018 - 2021',
    description: 'Bases solides en programmation, réseaux et bases de données.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera / Google',
    date: '2023',
    icon: 'fa-chart-line',
    credentialUrl: '#'
  },
  {
    id: 'c2',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2022',
    icon: 'fa-cloud',
    credentialUrl: '#'
  },
  {
    id: 'c3',
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2022',
    icon: 'fa-microchip',
    credentialUrl: '#'
  }
];
