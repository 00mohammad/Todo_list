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

  todosContainer.insertAdjacentHTML(
    "beforeend",
    `<article class="todo">
      <div class="todo-data">
        <p>${newTodoTitle}</p>
      </div>
      <div class="todo-buttons" onclick="removeTodo(event)">
        <button class="delete">حذف</button>
      </div>
    </article>`
  );

  hideModal();
  todoInput.value = "";
}

function removeTodo(event) {
  event.target.parentElement.parentElement.remove();
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
