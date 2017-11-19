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
        let item = this.parentNode.parentNode;


        let id = item.parentNode.id;

        let target = (id === 'todo') ? document.getElementById('completed'): document.getElementById('todo');

        item.remove();
        target.appendChild(item);



    };

    let addItemToDo = (text) => {

        let list = document.getElementById('todo');

        let item = document.createElement('li');
        item.innerText = text;


        let buttons = document.createElement('div');

        let remove = document.createElement('button');
        remove.innerText = 'remove';
        buttons.appendChild(remove);

        remove.addEventListener('click', removeItem);


        let complete = document.createElement('button');
        complete.innerText = 'complete';
        buttons.appendChild(complete);

        complete.addEventListener('click', completeItem);
        item.appendChild(buttons);

        list.appendChild(item);

    };





