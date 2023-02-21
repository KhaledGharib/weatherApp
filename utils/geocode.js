const request = require('postman-request')

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoieGVkMjAiLCJhIjoiY2xlYm1sNDNzMDI0dzN4cWx5ZXFvcTVxZiJ9.xEsz67TzuG3CUPbPMQBHNA&limit=1'
    request ({url:url,json:true},(error,{body})=>{
        if(error){
            callback("Please check your connection",undefined)

        }else if(body.features.length===0){
            callback("Can't find location, Try another searche",undefined)
        }else{
            callback(undefined,{
                lat:body.features[0].center[1],
                long:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    })

}

module.exports=geocode