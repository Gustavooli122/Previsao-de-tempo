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
precipitacao,tempoHoras} = dados;

    async function buscarCidade(cidade) {
        const resultado = await buscar(cidade);
        if(resultado){
            setDados(resultado)
        }
        else{
            alert("Lugar nao encontrado")
        }
      
     }

    return(
        <div className="p-5  sm:p-6 md:p-12 lg:px-16 xl:mx-40 flex flex-col grid-cols-3 sm:grid  gap-5">
    <Header buscarCity={buscarCidade}/>
    <Time temperatura={dados.temperatura} sensasaoTermica={dados.sensacaoTermica} vento={dados.vento} preciptacao={dados.precipitacao} umidade={dados.umidade} dataHora={dados.dataHora} cidade={dados.cidade} estado={dados.estado}/>
   <Hourly horaTempo={dados.tempoHoras}/>
   <Forecast/>
    </div>
    )
}