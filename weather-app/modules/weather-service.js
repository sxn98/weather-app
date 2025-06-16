import { MOCK_DATA } from './config.js';

export const getCurrentWeather=async(city)=>{
    await new Promise((resolve)=>setTimeout(resolve,1000))
    city=MOCK_DATA.name
    console.log(city)
    return city
    
}
export const getWeatherByCoords=async(lat,lon)=>{
    await new Promise((resolve)=>setTimeout(resolve,1000))
    lat=MOCK_DATA.coord.lat
    lon=MOCK_DATA.coord.lon
    console.log(lat,lon)
    return [lat,lon]
}