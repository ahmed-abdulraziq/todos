
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const filter = () => {
    addtodos.innerHTML='';
    const filter = todos.filter((e) => (search.value.length?e.text.toLowerCase().includes(search.value.toLowerCase()):true) && (checkbox.checked?!e.completed:true));
    generateSummaryDOM(filter);
    generateTodoDOM(filter);
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}

const addtodos = document.querySelector('.todos');
function generateTodoDOM(todo) {
    todo.forEach( (e) => {
        const todoEl = document.createElement('div');
        const checkbox = document.createElement('input');
        const todoText = document.createElement('span');
        const removeButton = document.createElement('button');

        todoText.innerHTML = e.text
        removeButton.textContent = 'x'
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = e.completed

        todoEl.appendChild(checkbox);
        todoEl.appendChild(todoText);
        todoEl.appendChild(removeButton);
        addtodos.appendChild(todoEl);
        
        checkbox.addEventListener('click', () => {
            e.completed = !e.completed
            saveTodos(todos);
            filter();
        });

        removeButton.addEventListener('click', () => {
            removeTodo(e.id);
            saveTodos(todos);
            filter();
        });
    });
}

const summary = document.querySelector('h2');
const generateSummaryDOM = (todo) => {
    const completed = todo.filter((e) => !e.completed);
    summary.textContent = `You have ${completed.length} todos left`
}

generateSummaryDOM(todos);
generateTodoDOM(todos);