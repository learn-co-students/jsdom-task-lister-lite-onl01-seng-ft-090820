document.addEventListener("DOMContentLoaded", () => {
  addEventListeners()
});


const taskForm = document.querySelector("#create-task-form");

const taskList = document.querySelector("#tasks");

function addEventListeners() {
  taskForm.addEventListener("submit", addTask);

 
}

 function deleteTask(e){
   e.target.parentElement.remove()
 }

 function addTask(event) {
  event.preventDefault();

  const newTask = document.querySelector("#new-task-description").value;

  const li = document.createElement("li")

  li.innerText = newTask

  const button = document.createElement("button")

  button.innerText = "X"

  taskList.appendChild(li)

  li.appendChild(button)
  
  button.addEventListener("click", deleteTask)
  

  taskForm.reset();

}
 // taskList.addEventListener("click", function (e) {
  //   if (e.target.dataset.action === "delete") {
  //     e.target.parentElement.remove();
  //   }
  // });// const button = `<li> ${newTask}

  // <button> X </button>
  // </li>`
   
   

  //   taskList.innerHTML += `<li> ${newTask}

  // <button data-action = "delete"> X </button>
  // </li>`;