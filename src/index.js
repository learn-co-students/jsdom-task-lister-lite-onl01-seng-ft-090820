document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector
  ("form#create-task-form")
  
  function addToDo() {
    let input = document.querySelector("input")
    let tasks = document.querySelector("ul#tasks")
    let item = document.createElement('li')
    item.innerText = input.value
    tasks.appendChild(item)
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    addToDo()
  })
});
