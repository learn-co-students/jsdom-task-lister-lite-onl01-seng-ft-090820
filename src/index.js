document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener("submit", addTask)
});

function addTask(e) {
  e.preventDefault()
  let newTask = e.target.querySelector("#new-task-description")
  let li = document.createElement('li')
  li.innerText = newTask.value 
  let ul = document.getElementById('tasks')
  let button = document.createElement('button')
  button.innerText = "x"
  button.id = "delete-button"
  li.appendChild(button)
  ul.appendChild(li)
  button.addEventListener("click", deleteTask)
  newTask.value = ""
}

function deleteTask(e) {
  li = e.target.parentElement
  ul = li.parentElement
  ul.removeChild(li)
}
