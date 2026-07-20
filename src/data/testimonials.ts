export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  photo: string; // FAKE
}

export const testimonials: Testimonial[] = [
  {
    name: "Camila Rezende",
    role: "Head of Engineering",
    company: "NimbusTech", // FAKE
    quote: "A Marujos entendeu nosso problema de performance em uma semana e entregou uma solução que o time interno não tinha conseguido em meses.",
    photo: "https://i.pravatar.cc/300?u=camila-rezende-nimbus", // FAKE
  },
  {
    name: "Rodrigo Andrade",
    role: "CTO",
    company: "Vortex Labs", // FAKE
    quote: "Migraram nossa stack legada para serverless sem downtime e reduziram nosso custo de infraestrutura em mais de 60%.",
    photo: "https://i.pravatar.cc/300?u=rodrigo-andrade-vortex", // FAKE
  },
  {
    name: "Juliana Prado",
    role: "Product Manager",
    company: "Aurora Systems", // FAKE
    quote: "Comunicação direta, entregas no prazo e um nível técnico acima da média. Voltaríamos a contratar sem pensar duas vezes.",
    photo: "https://i.pravatar.cc/300?u=juliana-prado-aurora", // FAKE
  },
];
