import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Suspense, useState} from "react";
// const SplitMe = React.lazy(()=>import('./SplitMe'));
import loadable from '@loadable/component';
const SplitMe = loadable(()=>import('./SplitMe'), {
    fallback : <div>loading...</div>
});
const App = () => {
    const [visible, setVisible] = useState();
    const onClick = () => {
        setVisible(true);
    };
    const onMouseOver = () => {
        SplitMe.preload();
    }
    return (
        <div className={"App"}>
            <header className={"App-header"}>
                <img src={logo} className={"App-logo"} alt={"logo"}/>
                <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
                {/*<Suspense fallback={<div>loading...</div>}>*/}
                {/*    {visible && <SplitMe/>}*/}
                {/*</Suspense>*/}
                {visible && <SplitMe/>}
            </header>
        </div>
    );
};

export default App;