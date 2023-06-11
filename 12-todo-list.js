 const todoList =[{
   name: 'making dinner',
   dueDate: '2023-06-09'
  }, {
   name: 'watching youtube',
   dueDate: '2023-06-10'
 }];
   
 renderTodo();
   function renderTodo(){
      let todoisHTML = '';

      todoList.forEach((todoObject, index) => {
   
         const { name, dueDate } = todoObject;
         const html=`
           <div>${name}</div>
           <div>${dueDate}</div>
           <button class = "delete-todo-button delete-button">Delete</button>
         
          `;
         todoisHTML += html;

      });

      document.querySelector('.js-todo-list')
      .innerHTML = todoisHTML;

      document.querySelectorAll('.delete-button')
      .forEach((deleteButton, index) => {
         deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodo();
         })         
      })
   }
      function handleTodoKeydown(event) {
         if(event.key === 'Enter') {
            addTodo();
         }
      }

      document.querySelector('.add-button').
      addEventListener('click', () => {
           addTodo();
      })
      function addTodo() {
         const inputElement = document.querySelector('.js-name-input');
         const name = inputElement.value;
         
         const dateInputElement = document.querySelector(
            '.js-due-date-input');
         const dueDate = dateInputElement.value; 
      
         todoList.push({
            name,
            dueDate
         });
         console.log(todoList);
         
         inputElement.value = '';

         renderTodo();

      }
