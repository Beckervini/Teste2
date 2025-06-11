
import { Code, Database, Server, Cloud } from "lucide-react";

export const skills = [
  { name: 'Java', category: 'Backend', level: 'Avançado', icon: Code },
  { name: 'Spring Boot', category: 'Framework', level: 'Avançado', icon: Server },
  { name: '.NET Core', category: 'Backend', level: 'Intermediário', icon: Code },
  { name: 'Python', category: 'Backend', level: 'Intermediário', icon: Code },
  { name: 'SQL Server', category: 'Database', level: 'Avançado', icon: Database },
  { name: 'PostgreSQL', category: 'Database', level: 'Intermediário', icon: Database },
  { name: 'Microsoft Azure', category: 'Cloud', level: 'Intermediário', icon: Cloud },
  { name: 'TypeScript', category: 'Frontend', level: 'Avançado', icon: Server },
  { name: 'JWT', category: 'Security', level: 'Avançado', icon: Code },
  { name: 'HTML/CSS', category: 'Frontend', level: 'Intermediário', icon: Code },
  { name: 'Git', category: 'Tools', level: 'Avançado', icon: Code },
  { name: 'Entity Framework', category: 'ORM', level: 'Avançado', icon: Database }
];

export const experiences = [
  {
    title: "Desenvolvedor Full Stack",
    company: "Projetos Pessoais",
    period: "2024",
    description: "Desenvolvimento de APIs REST com Java/Spring Boot, sistemas MVC com .NET, implementação de autenticação JWT e integração com mensageria RabbitMQ.",
    technologies: ["Java", "Spring Boot", ".NET", "SQL Server", "JWT", "RabbitMQ"]
  },
  {
    title: "Desenvolvedor Backend",
    company: "Projetos Acadêmicos",
    period: "2023",
    description: "Criação de sistemas acadêmicos completos, CRUDs avançados, portais de doação e sistemas de gerenciamento de tarefas com arquitetura em camadas.",
    technologies: ["Java", "Spring Boot", "Entity Framework", "SQL", "Azure"]
  }
];

export const education = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Instituição de Ensino",
    period: "2022 - 2024",
    status: "Concluído",
    description: "Formação focada em desenvolvimento de software, metodologias ágeis, banco de dados e arquitetura de sistemas."
  }
];

export const certifications = [
  {
    name: "Java Programming",
    issuer: "Plataforma Online",
    date: "2023",
    description: "Certificação em programação Java avançada"
  },
  {
    name: "Spring Boot Development",
    issuer: "Plataforma Online", 
    date: "2023",
    description: "Desenvolvimento de aplicações com Spring Boot"
  },
  {
    name: "SQL Server Database Administration",
    issuer: "Microsoft",
    date: "2023",
    description: "Administração e otimização de bancos de dados SQL Server"
  }
];

export const projects = [
  {
    title: "Sistema de Gerenciamento de Tarefas",
    description: "API REST completa com autenticação JWT, CRUD de tarefas e arquitetura em camadas bem definida. Acesse o código no GitHub para ver a implementação completa.",
    technologies: ["Java", "Spring Boot", "JWT", "PostgreSQL"],
    github: "https://github.com/beckervini"
  },
  {
    title: "Portal Acadêmico",
    description: "Sistema MVC completo com Entity Framework, login seguro e gerenciamento de entidades educacionais. Código disponível no GitHub.",
    technologies: [".NET Core", "Entity Framework", "SQL Server", "MVC"],
    github: "https://github.com/beckervini"
  },
  {
    title: "Sistema de Doações",
    description: "Plataforma com integração RabbitMQ, demonstrando boas práticas em mensageria e arquitetura limpa. Confira o código no GitHub.",
    technologies: ["Java", "Spring Boot", "RabbitMQ", "Clean Architecture"],
    github: "https://github.com/beckervini"
  }
];
