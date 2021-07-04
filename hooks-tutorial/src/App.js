import React, {useState} from 'react';
import Info from './Info';
import Counter from './Counter';

function App() {
    // const [visible, setVisible] = useState(false);
    // return (
    //     <div>
    //         <button onClick={()=>{setVisible(!visible)}}>{visible?'숨기기':'보이기'}</button>
    //         <hr/>
    //         {visible && <Info/>}
    //     </div>
    // );
    return <Info/>
}

export default App;
