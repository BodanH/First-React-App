import sun from "./color-sheme/Sun.svg"
import moon from "./color-sheme/Moon.svg"

import "./BtnDarkMode.css"
import { useEffect, useRef, useState } from "react"


const BtnDarkMode = () => {

    const BtnRef = useRef(null);
    const [darkMode, setDarkMode] = useState(false);

    

    useEffect(() => {
        if (darkMode || darkMode === "false") {
            document.body.classList.add("dark");
            BtnRef.current.classList.add("active");
        } else {
            document.body.classList.remove("dark");
            BtnRef.current.classList.remove("active");
        }
        
        
    }, [darkMode]);
 
    const toogleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === false ? true : false;
        });
    }

    return ( 
        <div ref={BtnRef} className="header-content__mode" onClick={toogleDarkMode}>
            <img src={sun} width="16" height="16" alt="Sun" className="header-content__white-mode"/>
            <img src={moon} width="16" height="16" alt="Sun" className="header-content__black-mode"/>
        </div>
     );
}
 
export default BtnDarkMode;