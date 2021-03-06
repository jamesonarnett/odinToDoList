const toDoFactory = (title, content, priority, date) => {
  const toDoCard = document.createElement("div");
  toDoCard.classList.add("todo-card");

  const createCard = () => {
    const cardArea = document.getElementById("toDoBox");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;
    const cardContent = document.createElement("p");
    cardContent.textContent = content;
    const cardPriority = document.createElement("p");
    cardPriority.textContent = priority;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");
    deleteBtn.classList.add("delete-button");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-primary");
    editBtn.classList.add("edit-button");

    toDoCard.appendChild(cardTitle);
    toDoCard.appendChild(cardContent);
    toDoCard.appendChild(cardPriority);
    toDoCard.appendChild(deleteBtn);
    toDoCard.appendChild(editBtn);

    cardArea.appendChild(toDoCard);

    deleteBtn.addEventListener("click", deleteCard);
    editBtn.addEventListener("click", editCard);
  };

  const deleteCard = () => {
    //something here to delete from DB
  };

  const editCard = () => {
    // Editing card here
  };

  return { title, content, createCard, deleteCard, editCard };
};

export { toDoFactory };
