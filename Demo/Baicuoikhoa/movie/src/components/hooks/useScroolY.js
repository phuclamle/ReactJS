import {React, useEffect,useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

export function useScrollY(){
    const [scrollY,setScrollY] = useState()
    
    const handleScrollY = () => {
       const scrolly = window.scrollY 
        setScrollY(scrolly)
    };

    useEffect(()=>{
            handleScrollY();
            window.addEventListener('scroll',handleScrollY)

            return ()=>{
                window.removeEventListener('scroll',handleScrollY)
            }
    },[])

    return [scrollY]
}