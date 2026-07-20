export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    step: 1,
    title: "Diagnóstico",
    description: "Mapeamos a arquitetura atual, os gargalos técnicos e o que está travando o crescimento do produto.",
  },
  {
    step: 2,
    title: "Proposta técnica",
    description: "Desenhamos a solução com stack, prazos e critérios de sucesso claros.",
  },
  {
    step: 3,
    title: "Implementação",
    description: "Entregas contínuas, com deploys frequentes e visibilidade total do progresso.",
  },
  {
    step: 4,
    title: "Operação & Suporte",
    description: "Acompanhamento pós-entrega para garantir performance, segurança e evolução contínua.",
  },
];
