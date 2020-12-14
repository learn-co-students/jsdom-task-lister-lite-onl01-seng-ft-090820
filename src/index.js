document.addEventListener("DOMContentLoaded", () => {
  addEventListener() 
});

function addEventListener() {
  const createTaskForm = document.getElementById('create-task-form')
  createTaskForm.addEventListener('submit', handleSubmit)
}

function handleSubmit(e) {
  e.preventDefault()
  const input = e.target.querySelector("#new-task-description").value
  const pTag = document.createElement('p')
  pTag.textContent = input 
  const tasks = document.querySelector("#tasks")
  tasks.appendChild(pTag)
  e.target.querySelector("#new-task-description").value = ""
}