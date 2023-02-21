const request = require('postman-request')

const forecast = (lat,long,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=f3322215f9c3786bad3c035ab9e86c5d&query='+ lat +','+ long
    request ({url,json:true},(error,{body}={})=>{
        if(error){
            callback("Please check your connection",undefined)

        }else if(body.error){
            callback("Can't find location, Try another searche",undefined)
        }else{
            const temp = body.current.temperature
            const feelslike =body.current.feelslike
           const weather_descriptions= body.current.weather_descriptions
            callback(undefined,`${weather_descriptions}. The temperatuer is ${temp}°. Feels like ${feelslike}°  `)
        }
    })

}


module.exports=forecast