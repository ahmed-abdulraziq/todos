let todos = [];

const addText = document.getElementById("addText");

if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
}

document.getElementById("search").addEventListener('input', () => filter());

document.getElementById("checkbox").addEventListener('click', () => filter());

document.getElementById("addBtn").addEventListener('click', () => {
    if (addText.value.length !== 0) {
        todos.push({
            id: Math.random(),
            text: addText.value,
            completed: false,
        });
        saveTodos(todos);
        filter();
        addText.value = '';
    }
});