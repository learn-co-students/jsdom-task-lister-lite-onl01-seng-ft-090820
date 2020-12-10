document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const tasks = document.getElementById("tasks");

  function addItem(event) {
    const toDo = document.getElementById("new-task-description").value;
    console.log(toDo);

    let li = document.createElement("LI");
    let text = document.createTextNode(toDo);
    li.appendChild(text);
    tasks.appendChild(li);

    event.preventDefault();

  }

  form.addEventListener("submit", addItem)
});
