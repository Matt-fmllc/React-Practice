

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const numbers = [1, 2, 3, 4, 5];
/* const listItems = numbers.map((numbers) => 
    <li>{numbers}</li>
);  */

/*
const todoItems = todos.map((todo) =>
    <li key={index}>
        {todo.text}
    </li>
);
*/

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <ListItem key={number.toString()}
            value={number} />
    );
    return (
        <ui>
            {listItems}
        </ui>
    );
}


function ListItem(props) {
    return <li>{props.value}</li>;
}

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);


