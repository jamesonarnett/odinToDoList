import { getSavedItem } from "./localStoraage";

const content = document.getElementById("content");
const toDoBox = () => {
  const area = document.createElement("div");
  area.setAttribute("id", "toDoBox");

  const title = document.createElement("h2");
  title.textContent = "To Do Items";
  area.appendChild(title);
  content.appendChild(area);

  getSavedItem();
};

export default toDoBox;
