import React, {useCallback, useReducer, useRef, useState} from 'react';
import TodoTemplate from "./component/TodoTemplate";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";

function createBulkTodos() {
    const array = [];
    for (let i = 0; i <= 2500; i++) {
        array.push({
            id: i,
            text: `할 일 ${i}`,
            checked: false
        });
    }
    return array;
}

function todoReducer(todos, action) {
    switch (action.type) {
        case 'INSERT':
            // { type : 'INSERT', todo : { id:1, text:'todo', checked:false }}
            return todos.concat(action.todo);
        case 'REMOVE':
            return todos.filter(todo => todo.id !== action.id);
        case 'TOGGLE':
            return todos.map(todo =>
                todo.id === action.id ? {...todo, checked: !todo.checked} : todo);
        default:
            return todos;
    }
}

const App = () => {

    // const [todos, setTodos] = useState(createBulkTodos);
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

    // 고윳값으로 사용될 id
    // ref를 사용하여 변수 담기

    const nextId = useRef(4);

    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false
            }
            // setTodos(todos.concat(todo));
            // setTodos(todos => todos.concat(todo));
            dispatch({type : 'INSERT', todo});
            nextId.current += 1;
        }, [todos]
    );

    const onRemove = useCallback(
        id => {
            // setTodos(todos.filter(todo => todo.id !== id));
            dispatch({type: 'REMOVE', id});
        }, [todos]
    );

    const onToggle = useCallback(
        id => {
            // setTodos(
            //     todos.map(todo => todo.id === id ?
            //         {...todo, checked: !todo.checked} : todo)
            // )
            dispatch({type:'TOGGLE', id});
        }, [todos]
    )


    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    );
};

export default App;
