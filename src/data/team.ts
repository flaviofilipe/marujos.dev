export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string; // FAKE — substituir por foto real
  linkedin?: string;
  github?: string;
}

export const team: TeamMember[] = [
  {
    name: "Flávio Filipe",
    role: "Engenharia de Software",
    bio: "Lidera a arquitetura e o desenvolvimento full-stack dos projetos, com foco em performance, escalabilidade e boas práticas de engenharia.",
    photo: "https://i.pravatar.cc/400?u=flavio-filipe-marujos", // FAKE
    linkedin: "https://linkedin.com/in/flaviofilipedev",
    github: "https://github.com/flaviofilipe",
  },
  {
    name: "Thaís Oliveira",
    role: "Produto & Qualidade",
    bio: "Traduz necessidades de negócio em requisitos claros e garante que cada entrega passe por um processo rigoroso de qualidade antes de chegar ao cliente.",
    photo: "https://i.pravatar.cc/400?u=thais-oliveira-marujos", // FAKE
    linkedin: "https://linkedin.com/in/thais-oliveira", // FAKE
  },
  {
    name: "Paulo Henrique",
    role: "Design",
    bio: "Cria interfaces que unem estética e usabilidade, garantindo que a experiência do usuário final seja tão sólida quanto a arquitetura por trás dela.",
    photo: "https://i.pravatar.cc/400?u=paulo-henrique-marujos", // FAKE
    linkedin: "https://linkedin.com/in/paulo-henrique-design", // FAKE
  },
];
