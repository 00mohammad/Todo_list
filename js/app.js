const openModalButton = document.querySelector(".open-modal-button");
const addTodoModal = document.querySelector(".modal-screen");
const cancelBtn = document.querySelector(".cancel");
const closeModalX = document.querySelector(".close-modal-x");
const createTodoBtn = document.querySelector(".create");
const todoInput = document.querySelector(".input");
const todosContainer = document.querySelector(".todos-container");

function showModal() {
  addTodoModal.classList.remove("hidden");
}

function hideModal() {
  addTodoModal.classList.add("hidden");
}

function addTodo() {
  const newTodoTitle = todoInput.value;

  let articlesElem = document.createElement("article");
  articlesElem.className = "todo";

  const todoDataDiv = document.createElement("div");
  todoDataDiv.className = "todo-data";

  const todoTitleElem = document.createElement("p");
  todoTitleElem.innerHTML = newTodoTitle;

  const todoButtonsDiv = document.createElement("div");
  todoButtonsDiv.className = "todo-buttons";

  const removeTodoBtn = document.createElement("button");
  removeTodoBtn.innerHTML = "حذف";
  removeTodoBtn.className = "delete";

  removeTodoBtn.addEventListener("click", function (event) {
    const mainTodoparent = event.target.parentElement.parentElement;
    mainTodoparent.remove();
  });

  todoButtonsDiv.append(removeTodoBtn);
  todoDataDiv.append(todoTitleElem);
  articlesElem.append(todoDataDiv);
  articlesElem.append(todoButtonsDiv);

  todosContainer.append(articlesElem);

  hideModal();
  todoInput.value = "";
}

openModalButton.addEventListener("click", showModal);
cancelBtn.addEventListener("click", hideModal);
closeModalX.addEventListener("click", hideModal);
createTodoBtn.addEventListener("click", addTodo);
document.body.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    hideModal();
  }
});
