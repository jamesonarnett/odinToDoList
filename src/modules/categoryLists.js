const pageArea = () => {
  let area = document.createElement("div");
  area.classList.add("left-nav");

  return area;
};

const areaHeader = (title) => {
  const header = document.createElement("h2");
  header.textContent = title;

  return header;
};

const CategoryList = () => {
  const main = document.getElementById("content");

  const header = areaHeader("Lists");
  const area = pageArea();

  area.appendChild(header);

  main.appendChild(area);
};

export default CategoryList;
