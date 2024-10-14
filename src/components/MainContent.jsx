import { useContext } from "react";

export default function MainContent(props){
    const {theme, toggleToggle} = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: theme == 'light'? 'white' : 'black',
            color : theme =='light' ? 'black' : 'white',
        }}>
            <p>테마가 변경 가능한 페이지입니다</p>
            <button onClick={toggleTheme}>테마변경</button>
        </div>
    )
}