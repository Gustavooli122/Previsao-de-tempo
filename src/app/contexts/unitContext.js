"use client";
import { createContext, useState } from "react";

export const UnitContext = createContext();

export function UnitProvider({ children }) {

  function convert(value, type, unit) {
    switch (type) {

      case "temp":
        return unit === "C"
          ? `${(value * 9 / 5) + 32} °F`
          : `${(value - 32) * 5 / 9} °C`;

      case "wind":
        return unit === "kmh"
          ? `${value * 0.621371} mph`
          : `${value / 0.621371} km/h`;

      case "rain":
        return unit === "mm"
          ? `${value * 0.0393701} in`
          : `${value / 0.0393701} mm`;

      default:
        return value;
    }
  

}   const [units,setUnits] = useState({
        temp:"c°",
        wind:"kmh",
        rain:"mm"
    })

    return(
        <UnitContext.Provider value={{units,setUnits,convert}}>
            {children}
        </UnitContext.Provider>
    )
}
  
 