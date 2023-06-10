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

      todoList.forEach(function(todoObject, index){
   
         const { name, dueDate } = todoObject;
         const html=`
           <div>${name}</div>
           <div>${dueDate}</div>
           <button onclick="
              todoList.splice(${index},1);
              renderTodo();
            " class = "delete-todo-button">Delete</button>
         
          `;
         todoisHTML += html;
      });
      /*
      for(let i=0;i<todoList.length;i++) {
         const todoObject =todoList[i];
         //const name = todoObject.name;
         //const dueDate = todoObject.dueDate;
         const { name, dueDate } = todoObject;
         const html=`
           <div>${name}</div>
           <div>${dueDate}</div>
           <button onclick="
              todoList.splice(${i},1);
              renderTodo();
            " class = "delete-todo-button">Delete</button>
         
          `;
         todoisHTML += html;
      }
      */
      console.log(todoisHTML);

      document.querySelector('.js-todo-list').innerHTML = todoisHTML;
   }
      function handleTodoKeydown(event) {
         if(event.key === 'Enter') {
            addTodo();
         }
      }
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