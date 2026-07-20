export interface ClientLogo {
  name: string;
  logo: string; // FAKE — substituir pelo logo real do cliente
}

// FAKE — todos os 6 registros
export const clients: ClientLogo[] = [
  { name: "Thomson Reuters", logo: "/logos/thomson-reuters.png" },
  { name: "Bom Pra Crédito",    logo: "/logos/bom-pra-credito.png" },
  { name: "Liber", logo: "/logos/liber.png" },
  { name: "WSouza", logo: "/logos/logo-wsouza.png" },
  { name: "Tribalism",    logo: "/logos/tribalismo.png" },
];
