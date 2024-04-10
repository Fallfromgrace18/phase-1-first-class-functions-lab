const driverArray=['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers=function([driverArray]){
    return['Antonia','Nuru']
}
const returnLastTwoDrivers=function([driverAray]){
    return['Amari','Mo']
}
let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multipler){
    return function (fare){ 
        return multipler*fare
    }
}
const fareDoubler= createFareMultiplier(2)
const fareTripler=createFareMultiplier(3)

function selectDifferentDrivers(arrayDrivers, driverFunction){
return driverFunction(arrayDrivers)
}

 