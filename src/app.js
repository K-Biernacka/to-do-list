/**
 * Created by Kinga on 18.11.2017.
 */

    document.getElementById('form').addEventListener('submit', function(e) {
        if (e.preventDefault) e.preventDefault();
        let input = document.getElementById('item');
        if (input.value) addItemToDo(input.value);
        input.value = '';
    } );
    let getTopNode = (node) => {
        return node.parentNode.parentNode.parentNode;
    };

    let removeItem = function () {
        getTopNode(this).remove();
    };

    let completeItem = function () {
        let item = getTopNode(this);
        let button = item.getElementsByClassName('complete');
        let id = item.parentNode.id;
        let target;
        if (id === 'todo') {
            button[0].className = 'fa fa-check-square complete';
            target = document.getElementById('completed');
        } else {
            button[0].className = 'fa fa-check complete';
            target = document.getElementById('todo');
        }
        item.remove();
        target.appendChild(item);
    };

    let createIconButton = (className, fn) => {
        let icon = document.createElement('i');
        icon.className = className;
        icon.addEventListener('click', fn);
        return icon;
    };

    let addItemToDo = (text) => {
        let list = document.getElementById('todo');
        let item = document.createElement('div');
        item.innerText = text;
        item.className = 'justify-content-between d-flex list-item';
        let buttons = document.createElement('div');
        buttons.appendChild(createIconButton('fa fa-times', removeItem));
        buttons.appendChild(createIconButton('fa fa-check complete', completeItem));
        item.appendChild(buttons);
        let box = document.createElement('div');
        box.className = 'box';
        box.appendChild(item);
        list.appendChild(box);
    };





