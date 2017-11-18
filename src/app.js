/**
 * Created by Kinga on 18.11.2017.
 */


    document.getElementById('add').addEventListener('click', function() {
        let value = document.getElementById('item').value;
        if (value) addItemToDo(value);

    } );

    let addItemToDo = (text) => {

        let list = document.getElementById('todo');

        let item = document.createElement('li');
        item.innerText = text;


        let buttons = document.createElement('div');

        let remove = document.createElement('button');
        remove.innerText = 'remove';
        buttons.appendChild(remove);

        let complete = document.createElement('button');
        complete.innerText = 'complete';
        buttons.appendChild(complete);

        list.appendChild(buttons);
        list.appendChild(item);

    };


    // buttons.appendChild(remove);
    // buttons.appendChild(complete);
    // item.appendChild(buttons);
    // list.appendChild(item);
