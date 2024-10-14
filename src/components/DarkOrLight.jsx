import ThemeContext from "./ThemeContext";

export default function DarkOrLight(){
    
    const [theme,setTheme] = useState('light');
    
    const toggleTheme = () => {
        if(theme == 'light'){
            setTheme('dark')
        }else if(theme == 'dark'){
            setTheme('light')}
    }

    return(
        //컨텍스트에 뭔가 제공하는 애
        <ThemeContext.Provider value={{theme,toggleTheme}}>

        </ThemeContext.Provider>
    )
}