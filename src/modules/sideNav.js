const sideArea = () => {
  let area = document.createElement("div");
  area.classList.add("left-nav");

  return area;
};

const Button = (text, type) => {
  const button = document.createElement("button");
  button.setAttribute("type", type);
  button.classList.add("btnME");
  button.textContent = text;

  return button;
};

const sideHeader = (title) => {
  const headerArea = document.createElement("div");
  headerArea.classList.add("side-area-header");

  const header = document.createElement("h2");
  header.textContent = title;

  const button = Button("Add List+");

  headerArea.appendChild(header);
  headerArea.appendChild(button);

  return headerArea;
};

const SideNav = () => {
  const main = document.getElementById("content");

  const header = sideHeader("Lists");
  const area = sideArea();
  area.appendChild(header);

  main.appendChild(area);
};

export default SideNav;
