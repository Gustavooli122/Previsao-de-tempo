import { ChevronDown } from "lucide-react" 
import Image from "next/image"
export default function Hourly(){
     const cards = [["/imgs/icon-rain.webp","Garoa","3 PM","40°"],["/imgs/icon-drizzle.webp","chuva","4 PM","40°"],["/imgs/icon-sunny.webp","ensolarado","5 PM","40°"],["/imgs/icon-partly-cloudy.webp","tempo normal","6 PM","40°"],["/imgs/icon-storm.webp","tempo com trovoes","7 PM","40°"],["/imgs/icon-snow.webp","neve","8 PM","20°"],["/imgs/icon-fog.webp","vento","9 PM","40°"]]

     return(
        <main className="bg-[#2f2f49] rounded-2xl p-3">
            <div className="font-medium text-white flex items-center sm:flex-col md:flex-row gap-2 justify-between mb-3"><h1>Previsão por hora</h1><div className="rounded-md bg-[#3d3c5d] flex gap-2 p-2"><p>Segunda</p> <ChevronDown/></div></div>
            <section className="space-y-3">
                {cards.map((e,i)=>(
                  <section key={i} className="rounded-md flex justify-between items-center bg-[#2f2f49] p-3 border border-[#3b3b57]">
                   <div className="flex gap-2 items-center"><Image src={e[0]} alt={e[1]} width={50} height={50}/><p className="text-gray-400">{e[2]}</p>
                  </div>  <h2 className="text-lg font-medium text-white">{e[3]}</h2>
                  </section>
                ))}
            </section>
        </main>
     )
}