const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    return (drivers.slice(0,2))
}

const returnLastTwoDrivers = function(){
    return (drivers.slice(2, ))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return integer;
}
function createFareMultiplier(fare, integer){
    return function fareQuintupler(){
        return fare*5
    }
}
let integer = 10
function fareDoubler(){
    return integer*2;
}
let fare = 12
function fareTripler(){
    return fare*3;
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    arrayOfDrivers = drivers; 
    return returnFirstTwoDrivers();
}