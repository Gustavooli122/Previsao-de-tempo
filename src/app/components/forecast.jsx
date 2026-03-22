import Image from "next/image"
export default function Forecast(){
   
    const cards = [["Ter","/imgs/icon-rain.webp","Garoa","18°","40°"],["Qua","/imgs/icon-drizzle.webp","chuva","18°","40°"],["Qui","/imgs/icon-sunny.webp","ensolarado","18°","40°"],["Sex","/imgs/icon-partly-cloudy.webp","tempo normal","18°","40°"],["Sáb","/imgs/icon-storm.webp","tempo com trovoes","18°","40°"],["Dom","/imgs/icon-snow.webp","neve","18°","40°"],["Seg","/imgs/icon-fog.webp","vento","18°","40°"]];
    return(
        <main className="col-span-3 h-[25%]">
            <h1 className="font-medium text-white mb-3">Previsão diária</h1>
            <section className="w-full grid grid-cols-3 sm:grid-cols-4  gap-3">
                  {cards.map((e,i)=>(
                <section key={i} className="flex p-2 flex-col gap-3 rounded-md bg-[#25253f] border-2 border-[#373659] text-gray-200">
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl font-medium">{e[0]}</h1>
                        <Image src={e[1]} width={200} height={200} alt={e[2]}/>
                    </div>
                    <div className="text-lg flex justify-between"><p>{e[3]}</p><p>{e[4]}</p></div>
                </section>
            ))}
            </section>
          
        </main>
    )
}