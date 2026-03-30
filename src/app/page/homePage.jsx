"use client";

import Header from "../components/header";
import Time from "../components/Time";
import Forecast from "../components/forecast";
import Hourly from "../components/hourly";
import buscar from "../components/api/openMeteo";
import { useState } from "react";

export default function HomePage(){
    const [dados,setDados]=useState({});
    const {dataHora,
temperatura,
cidade,
estado,
vento,
umidade,
sensacaoTermica,
precipitacao,tempoHoras,daily} = dados;

    const [initSistem,setUnitSistem]= useState([])
   
     function getUnitSistem(type){
         
     }
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

    async function buscarCidade(cidade) {
        const resultado = await buscar(cidade);
        if(resultado){
            setDados(resultado)
        }
        else{
            alert("Lugar nao encontrado")
        }
      
     }

     function convert(value, type, unit) {
  switch (type) {
    case "temp":
      return unit === "C"
        ?`${(value * 9/5) + 32} C°` 
        : `${(value - 32) * 5/9} F°`;

    case "wind":
      return unit === "kmh"
        ? `${value * 0.621371} kmh`
        : `${value / 0.621371} mph`;

    case "rain":
      return unit === "mm"
        ? `${value * 0.0393701} mm`
        : `${value / 0.0393701} in`;

    default:
      return value;
  }
}
    return(
        <div className="p-5 sm:p-6 md:p-12 lg:px-16 xl:mx-40 flex flex-col grid-cols-3 sm:grid  gap-5">
    <Header buscarCity={buscarCidade}/>
    <Time temperatura={dados.temperatura} sensasaoTermica={dados.sensacaoTermica} vento={dados.vento} preciptacao={dados.precipitacao} umidade={dados.umidade} dataHora={dados.dataHora} cidade={dados.cidade} estado={dados.estado}/>
   <Hourly horaTempo={dados.tempoHoras} getWeatherInfo={getWeatherInfo}/>
   <Forecast dias={dados.daily} fetchWeather={getWeatherInfo}/>
    </div>
    )
}