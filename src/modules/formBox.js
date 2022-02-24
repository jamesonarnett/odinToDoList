import { toDoFactory } from "./toDoFactory";
import { saveItem, toDoList } from "./localStoraage";

const listArea = () => {
  const area = document.createElement("div");
  return area;
};

const Input = (placeholder, type, name, id) => {
  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("placeholder", placeholder);
  input.setAttribute("name", name);
  input.setAttribute("id", id);
  return input;
};

const Label = (text, context) => {
  const label = document.createElement("label");
  label.classList.add("form-label");
  label.setAttribute("for", context);
  label.textContent = text;

  return label;
};

const Button = (text, type) => {
  const button = document.createElement("button");
  button.setAttribute("type", type);
  button.classList.add("btnME");
  button.textContent = text;

  return button;
};

// COMPONENTS DONE  COMPONENTS DONE  COMPONENTS DONE  COMPONENTS DONE  COMPONENTS DONE

// formADD and formCLOSE

const addToDo = () => {
  const t = document.getElementById("title");
  const c = document.getElementById("description");
  const p = document.getElementById("priority");

  const title = t.value;
  const content = c.value;
  const priority = p.value;

  const todo = toDoFactory(title, content, priority);

  toDoList.push(todo);
  console.log(toDoList);
  saveItem();

  todo.createCard();
};

const closeForm = () => {
  const t = document.getElementById("title");
  const c = document.getElementById("description");
  const p = document.getElementById("priority");

  t.value = "";
  c.value = "";
  p.value = "";

  const form = document.querySelector(".form-area");
  const innerForm = document.querySelector(".form-inner-area");

  form.addEventListener("click", (e) => {
    if (e.target == form) {
      form.classList.add("hidden");
      form.classList.remove("active");
    }
  });
  form.classList.add("hidden");
  form.classList.remove("active");
};

const Form = () => {
  const form = document.createElement("form");
  form.classList.add("form");
  const task = Input("Task Name", "text", "title", "title");
  const taskLabel = Label("Title: ", "title");

  form.appendChild(taskLabel);
  form.appendChild(task);

  const taskDescription = Input(
    "Optional",
    "text",
    "description",
    "description"
  );
  const taskDescriptionLabel = Label("ToDo: ", "description");

  form.appendChild(taskDescriptionLabel);
  form.appendChild(taskDescription);

  const priority = Input("Priority", "text", "priority", "priority");
  const priorityLabel = Label("Priority", "priority");

  form.appendChild(priorityLabel);
  form.appendChild(priority);

  const buttonSubmit = Button("Submit", "submit");
  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    addToDo();
    closeForm();
  });

  const buttonX = Button("Close");
  buttonX.addEventListener("click", (e) => {
    e.preventDefault();
    closeForm();
  });

  form.appendChild(buttonSubmit);
  form.appendChild(buttonX);

  return form;
};

const FormBox = () => {
  const main = document.getElementById("body");

  // Create  TWO divs for outer/inner styles
  const areaOuterDiv = listArea();
  areaOuterDiv.classList.add("form-area");

  //SecondDiv
  const formInnerDiv = listArea();
  formInnerDiv.classList.add("form-inner-area");

  const form = Form();

  formInnerDiv.appendChild(form);
  areaOuterDiv.appendChild(formInnerDiv);

  areaOuterDiv.classList.add("hidden");

  main.appendChild(areaOuterDiv);
};

export default FormBox;
