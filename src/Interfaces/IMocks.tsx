export interface IRevRevTome{
    Name:string;
    RevRevYears:IRevRevYear[];
}

export interface IRevRevYear{
    Year:string;
    RevRevMonths:IRevRevMonth[];
}

export interface IRevRevMonth{
    Month:string;
    RevRevMonths:IRevRevData[];
}

export interface IRevRevData{
    StartDate:Date;
    EndDate:Date;
    RevRevText:string;
    RevRevImg:string;
    RevRevSourat:string;
    RevRevVerset:string;
}