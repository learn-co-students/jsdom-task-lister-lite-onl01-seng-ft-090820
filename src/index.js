document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.getElementById('create-task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let input = document.querySelector('input#new-task-description');
    let inputValue = input.value;

    let li = document.createElement('li');
    li.innerText = inputValue;

    let ul = document.querySelector('ul#tasks');
    ul.append(li);
    
  })
/// not finished! come back later
});
