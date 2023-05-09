//Steg 1
//Importerar paket och skapar variabler för användning lite längre ned
//Importerar express
import express, {Request, Response, json} from 'express'
//Importerar routes "mina rutter"
import carRouter from './routes/carRoutes'
//Importera alla metoder från vår carController
import {getCars,createCar} from './db/carController'

//Importerar mongoose och connect funktionen och använder den med min MongoDB
import {connect} from 'mongoose'
import { create } from 'ts-node'
//Skapar en anslutning till MongoDB och jag upprättar en databas
connect('mongodb://127.0.0.1:27017/Shahad')

//Använder variabeln app för att arbeta med express
const app = express()
//Bestämmer Port
const port = 8000

//Steg 2
//Använda middleware
//Använda json, detta middleware är till för att tolka inkommande förfrågningar
//i json formatet
app.use(json())
//Använda router i vår server
app.use('/car', carRouter)


//Steg 3
//Handlers (GET, PUT, DELETE, POST etc)
app.get('/', (req:Request, res:Response)=> {
    res.send('Ja detta fungerar')
})
//Get cars från '/car' rutten
app.get('/car', async (req:Request, res:Response) => {
    const cars = await getCars()
    res.json(cars)
})

/* Den här rutten kommer att lyssna efter POST förfrågningar på port 8000 vid /car endpoint och
använda createCar funktionen för att skapa en ny bil med hjälp av data som skickas i förfrågnings bodyn, dvs
req.body
Se till att definiera funktionen createCar och importera den till din serverfil */
app.post('/car', async (req:Request, res:Response) => {
    const newCar = req.body
    const createdCar = await createCar(newCar)
    res.json(createdCar)
})

//Steg 4
//Måste lyssna på porten för att servern ska fungera och hantera nätverksförfrågningar
app.listen(port, () => {
    console.log(`Server is running ${port}`)
})






// import { req:Request } from 'express';
// // steg 1
// // importerar paket och skapar variabler för användning lite längre ned
// // inporterar express
// import express, {Request, Response, json} from "express"
// // importerar routes "mina rutter"
// import carRouter from "./routes/carRoutes"
// // importera alla metoder från vår carController
// import { getCars, createCar} from "./db/models/"

// // importerar mongoose och connect funktionen och använder den med min MongoDB
// import {connect} from "mongoose"

// // skapar en  anslitning till MongoDB och jag upprättar en databas
// connect ("mongodb://localhost:27017/richardc")


// // använder variabeln app för att arbeta med express
// const app = express()
// // bestämmer port
// const port = 8000


// // steg 2
// // använda middleware
// // använda json , detta middleware är till för att tolka inkommande förfrågningar i json formatet
// app.use(json())
// // använda router i vår server
// app.use("/car", car)


// // steg 3
// // handlers (DET , PUT , DELETE , PUT etc)
// app.get("/" , (req:Request , res:Response)=> {
//     res.send("ja detta fungerar")
// })
// // Get cars från "/car" rutten
// app.get ( "/car" , async ( req:Request , res:Response) =>{
//     const cars =await getCars()
//     res.json(cars)
// })

// //

// app.post ("/car" , async (req:Request , res:Response) => {
//     const newcar
// })

// // Den här rutten kommer att lyssna efter POST förfrågningar på port 8000 vis /car endpoint och
// // använda createCar funktionen för att skapa en ny bil med hjälp

// // steg 4
// // måste lyssna på porten för att serbern ska fungera och hantera nätverkaförfråg

// app.listen(port , () => {
// console.log(`Server is running ${port}`)
// })
