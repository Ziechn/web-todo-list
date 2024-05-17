const button = document.getElementById('add-btn');
const inputBox = document.getElementById('to-do');

document.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click', addToList);
});


function addToList() {  
    let textOfTodo = inputBox.value;

    const theList = document.getElementById('the-list');
    const newListItem = document.createElement('li');
    const itemParagraph = document.createElement('p');
    itemParagraph.setAttribute('class', 'todo-li-unchecked');

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('name', 'todo-checkbox');
    checkBox.addEventListener('click', () => {
        if (itemParagraph.classList.contains('todo-li-unchecked')) {
            itemParagraph.classList.remove('todo-li-unchecked');
            itemParagraph.classList.add('todo-li-checked');
        } else {
            itemParagraph.classList.add('todo-li-unchecked');
            itemParagraph.classList.remove('todo-li-checked');
        }
    });

    newListItem.appendChild(checkBox);

    newListItem.appendChild(itemParagraph);
    itemParagraph.innerText = textOfTodo;

    theList.appendChild(newListItem);
    inputBox.value = '';
}