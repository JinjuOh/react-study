import React, { Component } from 'react';
import {Fragment} from "react";
import './App.css';
import Say from "./chapter04/Say";
import EventPractice from "./chapter04/EventPractice";
import EventPractice2 from "./chapter04/EventPractice2";
import ValidationSample from "./chapter05/ValidationSample";
import ScrollBox from "./chapter05/ScrollBox";
import IterationSample from "./chapter06/IterationSample";

class App extends Component {
    render() {
        return <IterationSample/>
    }
}
// const App = () => {
//     return (
//         <div>
//             <ScrollBox ref={(ref)=>this.scrollBox=ref}/>
//             <button onClick={()=>this.scrollBox.scrollToBottom()}>맨 밑으로</button>
//         </div>
//         )
// }

export default App;
