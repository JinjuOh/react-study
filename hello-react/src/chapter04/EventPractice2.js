import React, { useState } from 'react';

const EventPractice2 = () => {
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    const [form, setForm] = useState({
        username : '',
        message : ''
    });
    const {username, message} = form;
    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);
    const onChange = e => {
        const nextForm = {
            ...form,    // 기존 form 복사
            [e.target.name] : e.target.value    // 원하는 값만 update
        }
        setForm(nextForm);
    }
    const onClick = () => {
        alert(username + ": " + message);
        setForm({
            username : '',
            message : ''
        })
    }
    const onKeyPress = e => {
        if(e.key==='Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type={"text"}
                name={"username"}
                placeholder={"사용자명"}
                value={username}
                onChange={onChange}
            />
            <input
                type={"text"}
                name={"message"}
                placeholder={"아무거나 입력해 보세요"}
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button
                onClick={onClick}
            >확인</button>
        </div>
    )
}
export default EventPractice2;