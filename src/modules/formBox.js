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

const Form = () => {
  const form = document.createElement("form");
  form.classList.add("form");
  const task = Input("Task Name", "text", "title");
  const taskLabel = Label("Title: ", "title");

  const taskDescription = Input("Description", "text", "description");
  const taskDescriptionLabel = Label("Description: ", "description");

  form.appendChild(taskLabel);
  form.appendChild(task);

  form.appendChild(taskDescriptionLabel);
  form.appendChild(taskDescription);

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
