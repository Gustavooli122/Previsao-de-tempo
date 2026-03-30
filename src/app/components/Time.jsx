"use client";

import Image from "next/image"
export default function Time({temperatura, sensasaoTermica, vento, preciptacao,umidade,dataHora,cidade,estado}){


const agora = new Date();

const dataFormatada = agora.toLocaleDateString("pt-BR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});
    
   
    return(
    <main className="flex flex-col  gap-10 sm:col-span-2">
       <section className="relative">
       <Image  width={500} height={500} className="w-full" src={'/imgs/bg-today-small.svg'} alt="fundo-estrelado" />
       <section className="absolute top-[10%] w-full  flex flex-col gap-5 items-center">

         <div className="text-center  flex flex-col gap-3"> <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">{cidade?`${cidade}, ${estado}`:"Digite um lugar, para buscar"}</h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">{dataHora?dataHora:dataFormatada}</p></div> 
   <div className="w-full relative flex  items-center gap-5"> <Image src={'/imgs/icon-sunny.webp'} className="w-1/3" width={140} height={140} alt="ícone do clima"/><h1 className="text-gray-50  text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold italic"> {temperatura?temperatura:"20"}°</h1></div>
       </section>
      
       </section>
       <section className="grid grid-cols-2  gap-4">
         <div className="bg-[#25253f] flex flex-col justify-between rounded-xl border-2 border-[#373659] gap-3 p-4"><p className="text-sm sm:text-base md:text-lg  text-gray-400">Sensação térmica de</p><p className="text-white text-2xl sm:text-3xl">{sensasaoTermica?sensasaoTermica:"20"}°</p></div>
         <div className="bg-[#25253f] flex flex-col gap-3 justify-between p-4 rounded-xl border-2 border-[#373659] "><p className=" text-gray-400 text-sm sm:text-base md:text-lg">Humidade</p><p className="text-white text-2xl sm:text-3xl">{umidade?umidade:"25"}%</p></div>
         <div className="bg-[#25253f] flex flex-col gap-3 justify-between p-4 rounded-xl border-2 border-[#373659] "><p className="text-sm sm:text-base md:text-lg text-gray-400">Vento</p><p className="text-white text-2xl sm:text-3xl">{vento?vento:"20"} km/h</p></div>
         <div className="bg-[#25253f] flex flex-col gap-3 p-4 justify-between rounded-xl border-2 border-[#373659] "><p className="text-sm sm:text-base md:text-lg text-gray-400">Preciptação</p><p className="text-white text-2xl sm:text-3xl md:text-4xl">{preciptacao?preciptacao:"30"} mm</p></div>
        
       </section>

    </main>)
}