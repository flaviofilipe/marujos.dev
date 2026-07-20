export interface StackItem {
  name: string;
  category: "Linguagens & Frameworks" | "Dados & Observabilidade" | "Cloud & DevOps";
}

export const stack: StackItem[] = [
  { name: "Python",               category: "Linguagens & Frameworks" },
  { name: "TypeScript",           category: "Linguagens & Frameworks" },
  { name: "Django",               category: "Linguagens & Frameworks" },
  { name: "FastAPI",              category: "Linguagens & Frameworks" },
  { name: "Flask",                category: "Linguagens & Frameworks" },
  { name: "Next.js",              category: "Linguagens & Frameworks" },
  { name: "Astro",                category: "Linguagens & Frameworks" },
  { name: "React",                category: "Linguagens & Frameworks" },
  { name: "PostgreSQL",           category: "Dados & Observabilidade" },
  { name: "SQLAlchemy",           category: "Dados & Observabilidade" },
  { name: "Redis",                category: "Dados & Observabilidade" },
  { name: "DataDog",              category: "Dados & Observabilidade" },
  { name: "AWS",                  category: "Cloud & DevOps" },
  { name: "AWS Lambda",           category: "Cloud & DevOps" },
  { name: "SQS",                  category: "Cloud & DevOps" },
  { name: "SNS",                  category: "Cloud & DevOps" },
  { name: "Serverless Framework", category: "Cloud & DevOps" },
  { name: "Docker",               category: "Cloud & DevOps" },
  { name: "Git",                  category: "Cloud & DevOps" },
];
