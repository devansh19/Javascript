 const todoList =['making dinner', 'watching youtube'];
   
 renderTodo();
   function renderTodo(){
      let todoisHTML = '';

      for(let i=0;i<todoList.length;i++) {
         const todo =todoList[i];
         const html=`<p>${todo}</p>`;
         todoisHTML += html;
      }
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
         
         todoList.push(name);
         console.log(todoList);
         
         inputElement.value = '';

         renderTodo();

      }