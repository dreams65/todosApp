class UI {
    static displayData() {
        let displayData = todoArray.map((item) => {
            return `
            <li class="task__item">
            <div class="task__item-group">
                <input type="checkbox" class="task__item-checkbox" id='${item.id}'>
                <p class="task__item-text">${item.todo}</p>
            </div>
            <div>
                <button class="task__item-btn task__item-btn_edit"  data-edit='${item.id}' 'title="edit this post"></button>
                <button class="task__item-btn task__item-btn_delete" data-remove='${item.id}' title="delete this post"></button>
            </div>
            </li> `
        });
        list.innerHTML = (displayData).join('');
    }

    static clearInput() {
        input.value = '';
    }

    static removeTodo() {
        document.addEventListener('click', (e) => {
            if(e.target.classList.contains('task__item-btn_delete')) {
                e.target.parentElement.parentElement.remove();
            }
            let removeId = +e.target.dataset.remove;
            //remove from array
            UI.removeArrayTodo(removeId)
        })
    }

    static removeArrayTodo(id) {
        todoArray = todoArray.filter((item) => item.id !== +id);
        Storage.addTostorage(todoArray);
    }

    static editTodo() {
        let iconChange = true;
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('task__item-btn_edit')) {
                const p = e.target.parentElement.parentElement.querySelector('.task__item-text');
                const editId = +e.target.dataset.edit;
                if(iconChange) {
                    p.setAttribute('contenteditable', 'true');
                    p.focus();
                    p.style.color = 'red';
                    e.target.classList.add('content-save');
                }else{
                    p.removeAttribute('contenteditable');
                    p.style.color = 'black';
                    e.target.classList.remove('content-save');
                    const newArray = todoArray.findIndex((item) => item.id == editId);
                    todoArray[newArray].todo = p.textContent;
                }
                iconChange = !iconChange;
            }
        });
    }

    static finishedTodo() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('task__item-checkbox')) {
                 const paragraph = e.target.parentElement.querySelector('.task__item-text')
                if(e.target.checked) {
                    paragraph.style.textDecoration = 'line-through';
                } else {
                    paragraph.style.textDecoration = 'none';
                }
            }
        })
    }
}