const main = document.getElementById("content");

const Navbar = (title) => {
  const navbar = document.createElement("nav");
  navbar.classList.add("nav");
  const text = document.createElement("h1");
  text.textContent = title;

  navbar.appendChild(text);
  return navbar;
};

const Button = (text, type) => {
  const button = document.createElement("button");
  button.setAttribute("type", type);
  button.classList.add("btnME");
  button.textContent = text;

  return button;
};

const openForm = () => {
  const form = document.querySelector(".form-area");
  form.classList.remove("hidden");
  form.classList.add("active");
};

const LoadNavbar = () => {
  const navbar = Navbar("OdinList");

  const button = Button("Add Item");

  button.setAttribute("id", "add-item-button");
  button.addEventListener("click", openForm);

  navbar.appendChild(button);
  main.appendChild(navbar);
};

export default LoadNavbar;
