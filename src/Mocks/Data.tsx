import { IRevRevData, IRevRevMonth, IRevRevTome, IRevRevYear } from "../Interfaces/IMocks";

export const Tome1_1961_Decembre_Data:IRevRevData[]=[
    {
        StartDate:new Date("1961-12-17"),
        EndDate:new Date("1961-12-18"),
        RevRevText:"En rêve, j'ai vu mon père avec un coupe-coupe tranchant à la main.",
        RevRevImg:"",
        RevRevSourat:"",
        RevRevVerset:""
    }
]

export const Tome1_Years_Months:IRevRevMonth[]=[
    {
        Month:"12",
        RevRevMonths:Tome1_1961_Decembre_Data
    },
]

export const Tome1_Years:IRevRevYear[]=[
    {
        Year:"1961",
        RevRevMonths:Tome1_Years_Months
    },
]

export const TOMES:IRevRevTome[]=[
    {
        Name:"Tome1",
        RevRevYears:Tome1_Years
    },
]

