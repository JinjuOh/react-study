import React from 'react';
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import CounterContainer from "./container/CounterContainer";
import TodoContainer from "./container/TodoContainer";

const App = () => {
    return (
        <div>
            <CounterContainer/>
         <hr/>
         <TodoContainer/>
        </div>
    );
};

export default App;