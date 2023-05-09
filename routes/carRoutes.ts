//Denna fil hanterar alla våra olika rutter med våra bilar
//Import express, då vi kommer arbeta routes som ingår i dess bibliotek
import express, {Request, Response} from 'express'
//Importerar controllers/models med dess metoder
import  {createCar} from '../db/carController'

//Router ska användas med Express
const router = express.Router()

//Skapar en handler för routers
router.get('/', (req:Request, res:Response) => {
    res.send('Get Cars')
})

//Skapar en post till servern
router.post('/car', async (req:Request, res:Response) => {
    const createdCar = await createCar(req.body)
    res.status(201).json(createdCar)
})

export default router



// import { req:Request } from 'express';
// // denna fil hanterar alla våra olika rutter med våra bolar
// // import express , då vi kommer arbeta routes som ingår i dess bibliotek
// import express, {Request , Response} from "express"

// // Router ska användas med Express
// const router = express.Router()

// // skapar en handler för routers
// router.get("/", (req:Request , res:Response) => {
//     res.send("Get Cars")
// })


// // skapar en post till servern
// router.post("/car" , async ( req:Request , res:Response) => {
//     const createCar = await createrCar (req.body)
// }
// )

// export default router
