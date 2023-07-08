import { News, events, cardTechCrunch,cardEvents} from "./data.js";
let TechCrunchBtn = document.getElementById("TechCrunch");
let containerTechCrunch = document.getElementById("containerTechCrunch");
let EventsBtn = document.getElementById("Events");
let eventsContainer = document.getElementById("eventsContainer");
let registerButton = document.getElementById("registerButton");
let conctactUs = document.getElementById("conctactUs");
let TechCrunchMobile = document.getElementById("TechCrunchMobile");
let EventsMobile = document.getElementById("EventsMobile");



News.forEach((x) => { debugger 
  console.log(cardTechCrunch(x));
  containerTechCrunch.innerHTML += cardTechCrunch(x);  
});

events.forEach((x) => { 
  eventsContainer.innerHTML += cardEvents(x);
});





