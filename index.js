// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <= 199) {
    return "This one is on me!";
  } else if (distance >199 && distance < 2501) {
    return "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  return greeting = (city == 'NYC') ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
  case 'generous':
    'Thank you so much.';
    break;
  case 'not as generous':
    'Thank you.';
    break;
  default:
    return 'Bye.';
  }
}
