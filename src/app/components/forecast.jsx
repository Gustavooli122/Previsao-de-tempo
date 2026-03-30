import Image from "next/image"
export default function Forecast({dias, fetchWeather}){
   
  

    function formatDay(daily){
        if(!daily) return [];
        return daily.time.map((date, i)=>({
           date,
           max:daily.temperature_2m_max[i],
           min:daily.temperature_2m_min[i],
           code:daily.weathercode[i]
        }))
    }

    let dailyData = formatDay(dias) || [];
   
    return(
        <main className="col-span-3">
            <h1 className="font-medium text-white mb-3">Previsão diária</h1>
            <section className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  gap-3">
                  {dailyData.map((day,i)=>{
                          const weather = fetchWeather(day.code);
                    return (
                <section key={i} className="flex p-2 flex-col gap-3 rounded-md bg-[#25253f] border-2 border-[#373659] text-gray-200">
                    <div className="flex flex-col items-center">
                        <h1 className="text-xs sm:text-xl font-medium"> {new Date(day.date).toLocaleDateString("pt-BR", {
        weekday: "long"
      })}</h1>
                        <Image src={weather.icon} width={200} height={200} alt={weather.label}/>
                    </div>
                    <div className="text-md sm:text-base md:text-lg flex justify-between"><p>{day.min} °</p><p>{day.max} °</p></div>
                </section>
            )
                  }
                  
                )}
            </section>
          
        </main>
    )
}