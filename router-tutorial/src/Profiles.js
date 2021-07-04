import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import Profile from "./Profile";

const Profiles = () => {
    const activeStyle = {
        background : 'black',
        color : 'white'
    };

    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to={'/profiles/veloport'}>
                        veloport
                    </NavLink>
                    {/*<Link to={'profiles/veloport'}>veloport</Link>*/}
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to={'/profiles/gildong'}>
                        gildong
                    </NavLink>
                    {/*<Link to={'profiles/gildong'}>gildong</Link>*/}
                </li>
            </ul>

            <Route
                path={"/profiles"}
                exact
                render={()=><div>사용자를 선택해주세요</div>}
            />
            <Route path={"/profiles/:username"} component={Profile}/>
        </div>
    );
};

export default Profiles;