import { useState } from "react";

export default function SignUP(){
    const [name,setName] = useState('');
    const [gender,setGender] = useState('female');

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender=='female'?'여성':'남성'}`)
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>이름 : 
                <input type="text" value={name} onChange={handleChangeName}/>
            </label> <br/>
            <label>성별 : 
                <select value={gender} onChange={handleChangeGender}>
                    <option value="female">여성</option>
                    <option value="male">남성</option>
                </select>
            </label>
            <button type="submit">제출</button>
        
        </form>
    )

}