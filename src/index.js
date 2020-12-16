document.addEventListener("DOMContentLoaded", () => {
  addEventListeners()
});

function addEventListeners() {
  const submit = document.getElementById("create-task-form")
  submit.addEventListener("submit", handleEvent)
}

function handleEvent(e) {
  e.preventDefault()
  const input = e.target.querySelector("#new-task-description")
  const value = input.value 
  const list = document.createElement("li")
  list.textContent = value 
  
  const task = document.querySelector("#tasks")
  task.appendChild(list)
  e.target.querySelector("#new-task-description").value=""
}
