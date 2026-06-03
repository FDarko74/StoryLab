const plan = {
  service: [
    "Produção Audiovisuais",
    "Cards para redes sociais",
    "Registros fotográficos",
    "Gestão de rede social",
    "Gravação com drone",
    "1 carrosel para instagram",
    "Animação de elementos gráficos",
    "Animação de logo",
  ],
};

const core = {
  serviceRange: [0, 3],
  crossRange: [3, 5],
  getServices() {
    const [start, end] = this.serviceRange;
    return plan.service.slice(start, end);
  },
  getCrossServices() {
    const [start, end] = this.crossRange;
    return plan.service.slice(start, end);
  },
};
const pro = {
  serviceRange: [0, 4],
  crossRange: [4, 7],
  getServices() {
    const [start, end] = this.serviceRange;
    return plan.service.slice(start, end);
  },
  getCrossServices() {
    const [start, end] = this.crossRange;
    return plan.service.slice(start, end);
  },
};
const elite = {
  serviceRange: [0, 7],
  getServices() {
    const [start, end] = this.serviceRange;
    return plan.service.slice(start, end + 1);
  },
};

console.log(core.getServices(), core.getCrossServices());
console.log(pro.getServices(), pro.getCrossServices());
console.log(elite.getServices());

export { core, pro, elite };
