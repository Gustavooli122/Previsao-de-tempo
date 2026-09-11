"use client";

import Image from "next/image";
import { UnitContext } from "../contexts/unitContext";
import { useContext } from "react";
import { items } from "../hooks/menuHeader";
export default function Time({temperatura, sensasaoTermica, vento, preciptacao,umidade,dataHora,cidade,estado}){


const agora = new Date();
function valueUnit(type){
if(type === "feels"){
  return sensasaoTermica
}
 if(type === "wind"){
  return vento
}
 if(type === "temp"){
  return temperatura
}
 if(type === "humidity"){
  return umidade
}
 if(type === "rain"){
  return preciptacao
}
else{
  return alert("Ocorreu um erro ao fazer a busca!");
}
}

console.log(valueUnit("temp"))
const dataFormatada = agora.toLocaleDateString("pt-BR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});
    
   const {units,convert} = useContext(UnitContext) ;

  
  
console.log(units[0].unit)
    return(
    <main className="flex flex-col  gap-10 sm:col-span-2">
       <section className="relative">
       <Image  width={500} height={500} className="w-full" src={'/imgs/bg-today-small.svg'} alt="fundo-estrelado" />
       <section className="absolute top-[10%] w-full  flex flex-col gap-5 items-center">

         <div className="text-center  flex flex-col gap-3"> <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">{cidade?`${cidade}, ${estado}`:"Digite um lugar, para buscar"}</h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">{dataHora?dataHora:dataFormatada}</p></div> 
   <div className="w-full relative flex  items-center gap-5"> <Image src={'/imgs/icon-sunny.webp'} className="w-1/3" width={140} height={140} alt="ícone do clima"/><h1 className={`text-gray-50 ${temperatura?"text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl":"text-2xl sm:text-3xl md:text-4xl lg:text-5xl "}  font-bold italic`}> {temperatura?convert(temperatura, "temp",units[4].unit):``}</h1></div>
       </section>
      
       </section>
       <section className="grid grid-cols-2  gap-4">{
        units.map((unit,index)=>(
          
<div key={index} className={`bg-[#25253f] ${unit.typeUnit === "temp"?"hidden":"flex"} flex-col justify-between rounded-xl border-2 border-[#373659] gap-3 p-4`}><p className="text-sm sm:text-base md:text-lg  text-gray-400">{unit.name}</p><p className="text-white text-2xl sm:text-3xl">{cidade?convert(valueUnit(unit.typeUnit),unit.typeUnit,unit.unit):"Busque uma cidade"}</p></div>
       )  
      
) 
       }</section>
      

    </main>)
}