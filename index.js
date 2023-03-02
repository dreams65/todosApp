let todoArray = Storage.getStorage();

form.addEventListener('submit',  (e) => {
    e.preventDefault();
    let id = Math.random() * 1000000;
    if (input.value !== '') {
        const todo = new Todo(id, input.value);
        todoArray = [...todoArray, todo];
        UI.displayData();
        UI.clearInput();
        UI.finishedTodo();
    } else {
        alert('Create a todo first')
    }
    Storage.addTostorage(todoArray)
})

window.addEventListener('DOMContentLoaded', () =>{
    UI.displayData();
    UI.removeTodo();
    UI.editTodo();
    UI.finishedTodo();
})