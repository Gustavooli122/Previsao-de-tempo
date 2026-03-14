"use client";

import { Search } from "lucide-react";
import { Settings } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Check } from "lucide-react";

export default function Header(){
    const [aberto, setAberto] = useState(false);
    const [selecionado, setSelecionado]= useState([]);

    const items = [["Temperatura","Celsius (°C)","Fahrenheit (°F)"],["Velocidade do vento","km/h","mph"],["Precipitação","Milímetros (mm)","Polegadas (pol.)"]]

    function toggle(e){
        if(selecionado.includes(e)){
            setSelecionado(()=> selecionado.filter((elemento)=> elemento !== e))
        }
        else{
            setSelecionado([...selecionado,e]);
        }
    }



return(

    
    <header className="flex flex-col  gap-12">

    <div className="flex justify-between items-center">

        <i><img className="h-9" src="/imgs/logo.svg" alt="logo" /></i> 

        <div className="bg-[#252441]  justify-center items-center p-0 sm:p-2 rounded-sm flex gap-2  text-sm"> 
            
             <div onClick={()=> setAberto(!aberto)} className="flex sm:hidden flex-col bg-[#02012b] gap-2 w-8  ">
                <span className="bg-gray-200 h-[3px] rounded-sm"/>
                <span className="bg-gray-200 h-[3px] rounded-sm"/>
                <span className="bg-gray-200 h-[3px] rounded-sm"/>
            </div>
            
            <button onClick={()=> setAberto(!aberto)} className="text-[#fffffd] sm:flex hidden items-center gap-2"><Settings className="text-[#fffffd] w-5"/>Unidades <ChevronDown className="text-[#fffffd]"/></button>
        {aberto && (
            <section className="absolute right-0  z-20 bg-[#262640] top-18 text-gray-200 text-[12px] flex flex-col gap-3 justify-center text-sm px-3 py-4 rounded-lg border border-[#333355]">
                <p>Mudar para o sistema imperial</p>
      {
        items.map((e, index)=>(
 <div key={index} className="space-y-2"> <hr className="opacity-35" />
      <p className="opacity-70">{e[0]}</p>
      <p className="flex justify-between items-center cursor-pointer" onClick={()=> toggle(e[1])}> {e[1]} {selecionado.includes(e[1]) && (<Check className="w-5"/>)}</p>
      <p  className="flex justify-between items-center cursor-pointer" onClick={()=> toggle(e[2])}> {e[2]} {selecionado.includes(e[2]) && (<Check className="w-5"/>)}</p>
     
    </div>

   
        ))
      }
    </section>

           
        )}
        </div>
    </div>
    <div className="w-full flex justify-center">
        <h1 className="text-[#fffffd] text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  w-96 font-sans font-bold ">Como está o céu hoje?</h1>
    </div>
    <section className="text-xl flex flex-col gap-3 w-full m-auto">
        <div className="bg-[#25253f] rounded-xl p-3  text-gray-200 flex items-center gap-3 "><Search className="ml-3"/><input type="text" className="bg-transparent outline-none " placeholder="Buscar um lugar..."/></div>
        <button className="bg-[#4657d9] hover:bg-indigo-400 text-gray-100 w-full rounded-xl p-3">Buscar</button>
    </section>
    
    </header>
)
}