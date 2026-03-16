
export default async function buscar(cidade){

const geoResponse = await fetch(
`https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`
)

const geoData = await geoResponse.json()

if(!geoData.results){
return null
}

const {latitude, longitude, name, admin1} = geoData.results[0]

const climaResponse = await fetch(
`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,windspeed_10m`
)

const climaData = await climaResponse.json()

const temperatura = climaData.current.temperature_2m
const sensacaoTermica = climaData.current.apparent_temperature
const umidade = climaData.current.relative_humidity_2m
const precipitacao = climaData.current.precipitation
const vento = climaData.current.windspeed_10m

const data = new Date()

const dataHora = data.toLocaleDateString("pt-BR",{
weekday:"long",
day:"numeric",
month:"long",
year:"numeric"
})

return {
dataHora,
temperatura,
cidade:name,
estado:admin1,
vento,
umidade,
sensacaoTermica,
precipitacao
}

}