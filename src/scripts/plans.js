const plan = {
  service: [
    "Produção Audiovisuais",
    "Cards para redes sociais",
    "Registros fotográficos",
    "1 carrosel para instagram",
    "Gestão de rede social",
    "Gravação com drone",
    "Animação de elementos gráficos",
    "Animação de logo",
  ],
};

const core = {
  serviceRange: [0, 3],
  getServices() {
    const [start, end] = this.serviceRange;
    return plan.service.slice(start, end);
  },
};
const pro = {
  serviceRange: [0, 4],
  getServices() {
    const [start, end] = this.serviceRange;
    return plan.service.slice(start, end);
  },
};
const elite = {
  serviceRange: [0, 7],
  getServices() {
    const [start, end] = this.serviceRange;
    return plan.service.slice(start, end);
  },
};
console.log("Core:" + core.getServices());
console.log("Pro:" + pro.getServices());
console.log("Elite:" + elite.getServices());
