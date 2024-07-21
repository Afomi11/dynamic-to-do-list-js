document.addEventListener('DOMContentLoaded', function() {
  

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  

    function addTask() {
    
      const taskText = taskInput.value.trim();
  
     
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      
      const li = document.createElement('li');
      li.textContent = taskText;
  
      
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';
  
     
      removeButton.addEventListener('click', function() {
   
        taskList.removeChild(li);
      });
  
      
      const completeCheckbox = document.createElement('input');
      completeCheckbox.type = 'checkbox';
  
     
      completeCheckbox.addEventListener('change', function() {
        if (this.checked) {
    
          li.classList.add('completed');
        } else {
          
          li.classList.remove('completed');
        }
      });
  
      
      li.prepend(completeCheckbox); 
      li.appendChild(removeButton);
  
    
      taskList.appendChild(li);
  
      
      taskInput.value = '';
    }
 
    addButton.addEventListener('click', addTask);
  
  
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
   
    addTask();
  });
  
  
