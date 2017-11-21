/**
 * Created by Kinga on 18.11.2017.
 */

    document.getElementById('add').addEventListener('click', function() {
        let input = document.getElementById('item');
        if (input.value) addItemToDo(input.value);
        input.value = '';
    } );

    let removeItem = function () {
        let item = this.parentNode.parentNode;
        item.remove();
    };

    let completeItem = function () {
        let item = this.parentNode.parentNode.parentNode;
        let button = item.getElementsByClassName('complete');

        let id = item.parentNode.id;

        button[0].className = (id === 'todo') ? 'fa fa-check-square complete' : 'fa fa-check complete';

        let target = (id === 'todo') ? document.getElementById('completed'): document.getElementById('todo');

        item.remove();
        target.appendChild(item);
    };

    let addItemToDo = (text) => {

        let list = document.getElementById('todo');

        let item = document.createElement('div');
        item.innerText = text;
        item.className = 'justify-content-between d-flex list-item';


        let buttons = document.createElement('div');

        let remove = document.createElement('i');
        remove.className = 'fa fa-times';
        buttons.appendChild(remove);

        remove.addEventListener('click', removeItem);


        let complete = document.createElement('i');
        complete.className = 'fa fa-check complete';
        buttons.appendChild(complete);

        complete.addEventListener('click', completeItem);
        item.appendChild(buttons);

        let box = document.createElement('div');
        box.className = 'box';

        box.appendChild(item);
        list.appendChild(box);
    };





