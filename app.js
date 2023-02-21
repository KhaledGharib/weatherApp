const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const chalk = require('chalk')

console.log(chalk.blue`

   ██╗    ██╗███████╗ █████╗ ████████╗██╗  ██╗███████╗██████╗      █████╗ ██████╗ ██████╗ 
   ██║    ██║██╔════╝██╔══██╗╚══██╔══╝██║  ██║██╔════╝██╔══██╗    ██╔══██╗██╔══██╗██╔══██╗
   ██║ █╗ ██║█████╗  ███████║   ██║   ███████║█████╗  ██████╔╝    ███████║██████╔╝██████╔╝
   ██║███╗██║██╔══╝  ██╔══██║   ██║   ██╔══██║██╔══╝  ██╔══██╗    ██╔══██║██╔═══╝ ██╔═══╝ 
   ╚███╔███╔╝███████╗██║  ██║   ██║   ██║  ██║███████╗██║  ██║    ██║  ██║██║     ██║     
    ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝     ╚═╝   `)



 
const readline = require('readline').createInterface({

    input: process.stdin,
    output: process.stdout,
  });


  readline.question(`Enter Address: `, address => {
    console.log("----------------------------")
  
geocode(address,(error,{lat,long,location}={})=>{
    if(error)
    return console.log("Error",error)

    forecast(lat , long,(error,forcastData)=>{
        if(error){

            return console.log("Error: ",error)
        }
        console.log(location)
        console.log(forcastData)
    })
})

// }
readline.close();

});