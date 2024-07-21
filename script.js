document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false));  
    }
  
   
    function addTask(taskText, save = true) {
     
      taskText = taskText.trim();
  
      
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
  
        
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const taskIndex = storedTasks.indexOf(taskText);
        if (taskIndex !== -1) {
          storedTasks.splice(taskIndex, 1);
          localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
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
  
     
      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
    }
  
    
    addButton.addEventListener('click', () => addTask(taskInput.value));
  
   
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask(taskInput.value);
      }
    });
  
    
    loadTasks();
  });
  
  
  
