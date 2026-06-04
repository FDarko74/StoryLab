import { core, pro, elite } from "./plans.js";

const Core = document.getElementById("coreP");
const Pro = document.getElementById("proP");
const Elite = document.getElementById("eliteP");

function showServices() {
  Core.innerHTML = "";
  Pro.innerHTML = "";
  Elite.innerHTML = "";
  try {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const ul = document.createElement("ul");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const p = document.createElement("p");

    div.setAttribute("class", "title");
    img.setAttribute("src", "src/assets/Icons/descentralizado.svg");
    button.setAttribute("id", "core");
    button.setAttribute("class", "plan-button");

    title.textContent = "Core";
    span.textContent = "(Serviços adicionais: a negociar)";
    p.textContent = "Seja Core!";

    div.appendChild(img);
    div.appendChild(title);
    button.appendChild(p);
    Core.appendChild(div);
    Core.appendChild(ul);
    Core.appendChild(span);
    Core.appendChild(button);

    core.getServices().forEach((service) => {
      const li = document.createElement("li");

      li.setAttribute("class", "ok");

      li.textContent = service;

      ul.appendChild(li);
    });

    core.getCrossServices().forEach((service) => {
      const li = document.createElement("li");

      li.setAttribute("class", "x");

      li.textContent = service;

      ul.appendChild(li);
    });
  } catch (error) {
    console.error("Erro ao exibir os serviços do plano Core:", error);
  }

  try {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const ul = document.createElement("ul");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const p = document.createElement("p");

    div.setAttribute("class", "title");
    img.setAttribute("src", "src/assets/Icons/descentralizado.svg");
    button.setAttribute("id", "pro");
    button.setAttribute("class", "plan-button");

    title.textContent = "Pro";
    span.textContent = "(Serviços adicionais: a negociar)";
    p.textContent = "Seja Pro!";

    div.appendChild(img);
    div.appendChild(title);
    button.appendChild(p);
    Pro.appendChild(div);
    Pro.appendChild(ul);
    Pro.appendChild(span);
    Pro.appendChild(button);

    pro.getServices().forEach((service) => {
      const li = document.createElement("li");

      li.setAttribute("class", "ok");

      li.textContent = service;

      ul.appendChild(li);
    });

    pro.getCrossServices().forEach((service) => {
      const li = document.createElement("li");

      li.setAttribute("class", "x");

      li.textContent = service;

      ul.appendChild(li);
    });
  } catch (error) {
    console.error("Erro ao exibir os serviços do plano Pro:", error);
  }
  try {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const ul = document.createElement("ul");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const p = document.createElement("p");

    div.setAttribute("class", "title");
    img.setAttribute("src", "src/assets/Icons/descentralizado.svg");
    button.setAttribute("id", "elite");
    button.setAttribute("class", "plan-button");

    title.textContent = "Elite";
    span.textContent = "(Serviços adicionais: a negociar)";
    p.textContent = "Seja Elite!";

    div.appendChild(img);
    div.appendChild(title);
    button.appendChild(p);
    Elite.appendChild(div);
    Elite.appendChild(ul);
    Elite.appendChild(span);
    Elite.appendChild(button);

    elite.getServices().forEach((service) => {
      const li = document.createElement("li");

      li.setAttribute("class", "ok");

      li.textContent = service;

      ul.appendChild(li);
    });
  } catch (error) {
    console.error("Erro ao exibir os serviços do plano Elite:", error);
  }
}

showServices();
