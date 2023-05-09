//Importerar vår Carmodel som vi exporterade från carSchema.ts filen för
//att "arbeta" med vår collection, dvs sätta in data eller liknande
import CarModel, { carType } from "./models/carSchema";


//Skapar olika funktioner som hanterar alla metoder som vi använder
//GET, POST osv
//const newCar = Skapar en ny instans av CarModel med det angivna Car-objektet
//await newCar.save = Sparar den nya bilen i databasen med hjälp av save-metoden på newCar
//return newCar = Returnerar den nya bilen
//Denna funktion kan användas för att lägga till nya bilar i min databas genom att skicka in ett Car-objekt med de
//önskade egenskaperna för den nya bilen
export const createCar = async (Car: carType) => {
    const newCar = new CarModel(Car)
    await newCar.save()
    return newCar
}

//skapar en funktionalitet för att hämta bilar i vår controller
export const getCars = async () => {
    const Cars = await CarModel.find()
    return Cars;
}

//Delete

//Find på en annan adress tex /cars/1


// import { carType } from './models/carSchema';
// // importerar vår Carmodel som vi exporterade från carSchema.ts filen för
// // att "arbeta"  med vår collection, dvs sätta in data eller liknande

// import CarModel from "./models/carSchema";


// // skapar olika funktioner som hanterar alla metoder som vi använder
// // GET , POST osv
// // Const newCar = skapar en ny insats av CarModel med det angivna Car-object
// // await newCar.save = skapar den nya bilen i databasen med hjälp av save-metoden på newCar
// // retur nerCar = Retunerar den nya bilen
// // Denna funktion kan användas för att lägga till nya bilar i min databas genom att skicka in ett car-object med
// // önskade egenskaperna för den nya bilen
// export const createCar = async (Car: carType)=> {
//     const newCar = new CarModel (Car)
//     await newCar.save()
//     return newCar
// }


// // skapar en  funktionalitet för att hämta bilar i vår controller
// export const getCars = async () => {
//     const Cars =await
// }
