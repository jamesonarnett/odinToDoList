import { toDoFactory } from "./toDoFactory";

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
  button.classList.add("btn");
  button.textContent = text;

  return button;
};

// COMPONENTS DONE  COMPONENTS DONE  COMPONENTS DONE  COMPONENTS DONE  COMPONENTS DONE

const addToDo = () => {
  const t = document.getElementById("title");
  const c = document.getElementById("description");
  const p = document.getElementById("priority");

  const title = t.value;
  const content = c.value;
  const priority = p.value;

  console.log(content);
  const todo = toDoFactory(title, content, priority);

  console.log(todo.title);
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

  const button = Button("Submit", "submit");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    addToDo();
  });

  form.appendChild(button);

  return form;
};

const FormBox = () => {
  const main = document.getElementById("content");

  // Create  TWO divs for outer/inner styles
  const areaOuterDiv = listArea();
  areaOuterDiv.classList.add("form-area");

  //SecondDiv
  const formInnerDiv = listArea();
  formInnerDiv.classList.add("form-inner-area");

  const form = Form();

  formInnerDiv.appendChild(form);
  areaOuterDiv.appendChild(formInnerDiv);
  main.appendChild(areaOuterDiv);
};

export default FormBox;
