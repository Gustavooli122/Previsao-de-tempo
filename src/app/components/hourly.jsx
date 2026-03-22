"use client";
import { useState } from "react"
import { ChevronDown } from "lucide-react" 
import Image from "next/image"
export default function Hourly({horaTempo}){
    const [daySelect, setDaySelect]=useState("segunda-feira")
    const  [chevronDown,setChevronDown]= useState(false)

    

    const menu = [
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
  "domingo"
];

     function selectDay(day){
        setDaySelect(day)
     console.log(horaTempo.time)
     }
      function filterByDay(hourly,selectDay){
        if(!hourly) return [];

          return  hourly.time.map((time,i)=> ({
            time,
            temp:hourly.temperature_2m[i],
            code:hourly.weathercode[i]
          })).filter((item)=>{
            const date = new Date(item.time)
              const dayName = date.toLocaleDateString("pt-BR", {
               weekday: "long",

      }); return  dayName.toLowerCase() === selectDay.toLowerCase()
          }
        )
      }
      const hourlyData = filterByDay(horaTempo,daySelect) || [];

      function getWeatherInfo(code) {
  if (code === 0) return { label: "Ensolarado", icon: "/imgs/icon-sunny.webp" };

  if (code >= 1 && code <= 3)
    return { label: "Nublado", icon: "/imgs/icon-partly-cloudy.webp" };

  if (code >= 45 && code <= 48)
    return { label: "Névoa", icon: "/imgs/icon-fog.webp" };

  if (code >= 51 && code <= 57)
    return { label: "Garoa", icon: "/imgs/icon-drizzle.webp" };

  if (code >= 61 && code <= 67)
    return { label: "Chuva", icon: "/imgs/icon-rain.webp" };

  if (code >= 71 && code <= 77)
    return { label: "Neve", icon: "/imgs/icon-snow.webp" };

  if (code >= 80 && code <= 82)
    return { label: "Pancadas", icon: "/imgs/icon-rain.webp" };

  if (code >= 95)
    return { label: "Tempestade", icon: "/imgs/icon-storm.webp" };

  return { label: "Desconhecido", icon: "/imgs/icon-fog.webp" };
}

     return(
        <main className="bg-[#2f2f49] h-[25%] rounded-2xl  p-3 ">
            <div  className="font-medium relative text-white flex flex-col items-center sm:flex-col md:flex-row gap-2 justify-between mb-3"> <h1>Previsão por hora</h1><button className="rounded-md bg-[#3d3c5d] w-full flex justify-between gap-2 p-2" onClick={()=>setChevronDown(prev => !prev)}> <p>{daySelect}</p> {chevronDown?<ChevronDown className="transition-transform ease-in-out rotate-180"/>:<ChevronDown className="transition-transform ease-in-out rotate-0"/>}
            
            
            
            </button> {chevronDown && ( <div className="w-full top-20 absolute p-3 bg-[#25253f] border border-[#393955] rounded-md flex flex-col gap-2 ">{menu.map((e,index)=>(
                <button onClick={()=> selectDay(e)} className={`text-left text-gray-300 p-2 rounded-md ${e === daySelect? "bg-[#2f2f49]":"bg-[#25253f]"} font-normal`} key={index}>{e}</button>
            ))}</div>)} </div>
            <section className="space-y-3  overflow-y-scroll">
                {hourlyData.map((e,i)=>{
                  const weather = getWeatherInfo(e.code);
                  return ( <section key={i} className="rounded-md  flex justify-between items-center bg-[#2f2f49] p-3 border border-[#3b3b57]">
                   <div className="flex gap-2 items-center"><Image src={weather.icon} alt={weather.label} width={50} height={50}/><p className="text-gray-400"> {new Date(e.time).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
          })}</p>
                  </div>  <h2 className="text-lg font-medium text-white">{e.temp}°</h2>
                  </section>)
                }
                  
                )}
            </section>
        </main>
     )
}