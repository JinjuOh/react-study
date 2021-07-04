import React, {useReducer} from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name] : action.value
    }
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name : '',
        nickname : '',
        test : ''
    })
    const {name, nickname, test} = state;
    const onChange = e => {
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                <input name={"name"} value={name} onChange={onChange}/>
                <input name={"nickname"} value={nickname} onChange={onChange}/>
                <input name={"test"} value={test} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
                <div>
                    <b>테스트:</b> {test}
                </div>
            </div>
        </div>
    )
};

export default Info;