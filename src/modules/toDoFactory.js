const toDoFactory = (title, content, priority, date) => {
  const toDoCard = document.createElement("div");

  const createCard = () => {
    const cardArea = document.getElementById("content");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;
    const cardContent = document.createElement("p");
    cardContent.textContent = content;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-button");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-button");

    toDoCard.appendChild(cardTitle);
    toDoCard.appendChild(cardContent);
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
