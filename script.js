document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Function to add a new task
    function addTask() {
      // Get the task text from the input field and trim any extra spaces
      const taskText = taskInput.value.trim();
  
      // Check if the input field is empty
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      // Create a new list item (li) for the task
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Create a new remove button for the task
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';
  
      // Add an event listener to the remove button
      removeButton.addEventListener('click', function() {
        // Remove the list item from the task list when the button is clicked
        taskList.removeChild(li);
      });
  
      // Append the remove button to the list item
      li.appendChild(removeButton);
  
      // Append the list item to the task list
      taskList.appendChild(li);
  
      // Clear the input field after adding the task
      taskInput.value = '';
    }
  
    // Attach event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
  
    // Attach event listener to the task input field to add tasks on "Enter" key press
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });
  
