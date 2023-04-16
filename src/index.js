
document.addEventListener("DOMContentLoaded", () => {
    addingEventListeners()
});



function addingEventListeners() {
   document.getElementById('create-task-form')
   .addEventListener('submit', handleFormSubmit);
    
}

function handleFormSubmit(e){
  e.preventDefault()
   
  const task = e.target /* ['new-task-description'] */ [0].value
  
  displayTask(task)

}

function displayTask(task){
  const taskUl = document.getElementById('tasks');
  const taskLi = document.createElement('li');

  taskLi.textContent = task + ' '
  taskUl.appendChild(taskLi);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "X";
  deleteBtn.style.backgroundColor = "red"
  deleteBtn.style.color = "white"
  deleteBtn.style.fontSize = '10px'
  taskLi.appendChild(deleteBtn)

  deleteBtn.addEventListener('click', deleteTask)
 
  
}

function deleteTask(e){
   e.target.parentNode.remove();
}