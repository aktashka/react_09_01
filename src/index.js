import React from 'react';
import ReactDOM from 'react-dom';


const TodoTitle = () => {
    return (
        <div>
        <h1>Todo</h1>
        </div>
    )
}

const TodoSearch = () => {
    return (
        <div>
        <input type='text' placeholder='search string' />
        </div>
    )
}

const TodoCounter = () => {
    return (
        <div>
        <p>todo: 2</p>
        <p>done: 1</p>
        </div>
    )
}

const TodoList = ({todos}) => {
    const content = todos.map(item => {
        return <li key={item.id}><TodoListItem label={item.label} /></li>
    })

    return (
        <div>
        <ul>
            {content}
        </ul>
        </div>
    )
}

const TodoListItem = ({label}) => {
    return (
        <span>{label}</span>
    )
    }
    
const App = () => {
    const todos = [
        {id: 1, label: 'drink water', important: false, done: false},
        {id: 2, label: 'drink tea', important: false, done: false},
        {id: 3, label: 'drink vodka', important: false, done: false},
    ]

    return (
        <div>
        <TodoTitle />
        <TodoSearch />
        <TodoCounter />
        <TodoList todos={todos} />
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);