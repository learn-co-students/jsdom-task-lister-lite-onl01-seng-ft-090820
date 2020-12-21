
const main = document.querySelector("#main-content")
console.log(main)

//grab the task form from html
const taskForm = document.querySelector("#create-task-form")

const taskList = document.querySelector("#tasks") 

// listen to the event submit and tell it what to do
taskForm.addEventListener("submit", function(e) {
  // stop reg execution
  e.preventDefault()
  // user input
  const newTask = document.querySelector("#new-task-description").value
  // slap on the DOM through the html
  taskList.innerHTML += ' <li> ${newTask} <button data-action="delete" data-matt ="PLWERFUL" data-charlie="downfield"> X for delete </button></li>'
    

  
  taskForm.reset()
})


taslList.addEventListener("click", function(e) {
  console.log(e.target)
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})
