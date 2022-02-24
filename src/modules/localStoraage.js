import { toDoFactory } from "./toDoFactory";

let toDoList = [];

const saveItem = () => {
  localStorage.setItem("toDoItems", JSON.stringify(toDoList));
};

const getSavedItem = () => {
  if (localStorage.getItem("toDoItems")) {
    toDoList = JSON.parse(localStorage.getItem("toDoItems"));
    toDoList.forEach((item) => {
      let todo = toDoFactory(item.title, item.content, item.priority);
      todo.createCard();
    });
  }

  if (toDoList.length == 0) {
    console.log("yes");
    let todo = toDoFactory(
      "Your first ToDoItem",
      "Some content here to remind you of your task",
      "Learning is your only priority"
    );
    todo.createCard();
    toDoList.push(todo);
  }
};

export { saveItem, getSavedItem, toDoList };
