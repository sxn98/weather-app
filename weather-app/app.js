

const setupEventListener=()=>{

}
const handleSearch=async()=>{
    import('./modules/weather-service.js').then((service)=>{
        console.time('weather-test')
        service.getCurrentWeather('Constanta').then((data)=>{
            console.timeEnd('weather-test')
            console.log('Received data:',data)
            console.log('City Updated?', data==='Constanta')
    
        })
        
        service.getWeatherByCoords(45.133,7.367).then((data)=>{
            console.log('Received data:',data)
            console.log('Lat,Lon updated?',data[0]===45.133 && data[1]===7.367)
    
        })
    })
}
const isValidCity=(city)=>{
    return city.length >= 2 && /^[a-zA-ZăâîșțĂÂÎȘȚ\\s-]+$/.test(city)
}
handleSearch()


console.log('aaa')

