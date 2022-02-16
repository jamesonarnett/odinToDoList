const listArea = () => {
  const area = document.createElement("div");
  return area;
};

const Input = (placeholder, type, name) => {
  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("placeholder", placeholder);
  input.setAttribute("name", name);
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
  button.textContent = text;

  return button;
};

const Form = () => {
  const form = document.createElement("form");
  form.classList.add("form");
  const task = Input("Task Name", "text", "title");
  const taskLabel = Label("Title: ", "title");

  form.appendChild(taskLabel);
  form.appendChild(task);

  const taskDescription = Input("Description", "text", "description");
  const taskDescriptionLabel = Label("ToDo: ", "description");

  form.appendChild(taskDescriptionLabel);
  form.appendChild(taskDescription);

  const button = Button("Submit", "submit");

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
