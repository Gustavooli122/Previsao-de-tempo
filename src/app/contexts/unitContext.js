"use client";
import { createContext, useState } from "react";

export const UnitContext = createContext();

export function UnitProvider({children}){
    const [units,setUnits] = useState({
        temp:"c°",
        win:"kmh",
        rain:"mm"
    })

    return(
        <UnitContext.Provider value={{units,setUnits}}>
            {children}
        </UnitContext.Provider>
    )
}
  
 