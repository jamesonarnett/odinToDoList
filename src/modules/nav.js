const main = document.getElementById("content");

const Navbar = (title) => {
  const navbar = document.createElement("nav");
  navbar.classList.add("nav");
  const text = document.createElement("h1");
  text.textContent = title;

  navbar.appendChild(text);
  return navbar;
};

const LoadNavbar = () => {
  const navbar = Navbar("OdinList");
  main.appendChild(navbar);
};

export default LoadNavbar;
