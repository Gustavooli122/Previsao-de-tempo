"use client";
import { createContext, useState } from "react";

export const UnitContext = createContext();

export function UnitProvider({ children }) {

  function convert(value, type, unit) {
    switch (type) {

      case "temp":
  return unit === "F"
    ? `${((value * 9 / 5) + 32).toFixed(2)} °F`
    : `${value.toFixed(2)} °C`;
      case "wind":
        return unit === "kmh"
          ? `${value} km/h`
          : `${(value * 0.621371).toFixed(2)} mph`;

      case "rain":
        return unit === "mm"
          ?  `${value} mm`
          :`${(value * 0.0393701).toFixed(2)} in`;
          
      case "feels":
        return `${value} °`;

      case "humidity":
        return `${value} %`;
      default:
        return value;
    }
  

}   const [units,setUnits] = useState([{unit:"kmh",typeUnit:"wind",name:"Vento"},{unit:"mm",typeUnit:"rain",name:"Preciptação"},{unit:"%",typeUnit:"humidity",name:"Humidade"},{unit:"°",typeUnit:"feels",name:"Sensação térmica"},{unit:"C",typeUnit:"temp",name:"temperatura"}]
      
    )

    return(
        <UnitContext.Provider value={{units,setUnits,convert}}>
            {children}
        </UnitContext.Provider>
    )
}
  
 