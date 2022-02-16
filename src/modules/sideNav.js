const sideArea = () => {
  let area = document.createElement("div");
  area.classList.add("left-nav");

  return area;
};

const sideHeader = (title) => {
  const header = document.createElement("h2");
  header.textContent = title;

  const button = Button("Add List+", "button");
  header.appendChild(button);

  return header;
};

const Button = (text, type) => {
  const button = document.createElement("button");
  button.setAttribute("type", type);
  button.textContent = text;

  return button;
};

const SideNav = () => {
  const main = document.getElementById("content");

  const header = sideHeader("Lists");
  const area = sideArea();
  area.appendChild(header);

  main.appendChild(area);
};

export default SideNav;
