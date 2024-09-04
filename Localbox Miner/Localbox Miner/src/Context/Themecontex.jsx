import { createContext ,useState} from "react";
export const themecontext=createContext()

export function ThemeContextProviderFuction({children}){
    const[theme,setheme]=useState(false)
    // const [chetan , setchetan] = useState(false)
    const themeupdaterfunction=()=>{
        setheme(!theme)

    }
    return(

        <themecontext.Provider value={{theme,themeupdaterfunction}}>{children}</themecontext.Provider>
    
    )
}