// code your solution here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun()
saturdayFun("bathe my dog")
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(routine = "go to the office") {
    return (`This Monday, I will ${routine}.`);
}
mondayWork();

function wrapAdjective(cool = "*") {
    return function(message = "special") {
        return `You are ${cool}${message}${cool}!`;
    }
} 
wrapAdjective("||");