let ride;
function scuberGreetingForFeet(ride){
  if (ride <= 400){
    return "This one is on me!"
  } else if (ride <= 2000){
    return "That will be twenty bucks."
  } else if (ride <= 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}
let city;
function ternaryCheckCity(city){
  if (city == "NYC"){
    return "Ok, sounds good.";
  }else{
    return "No go.";
  }
}
let tip;
function switchOnCharmFromTip(tip){
  switch (tip){
    case "generous": return "Thank you so much.";
    case "not as generous": return "Thank you.";
    default:
      return "Bye.";
  }
}