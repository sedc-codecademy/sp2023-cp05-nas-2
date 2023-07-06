import { News, events, cardTechCrunch,cardEvents } from "./data.js";
let TechCrunchBtn = document.getElementById("TechCrunch");
let containerTechCrunch = document.getElementById("containerTechCrunch");
let EventsBtn = document.getElementById("Events");
let eventsContainer = document.getElementById("eventsContainer");
let registerButton = document.getElementById("registerButton");
let conctactUs = document.getElementById("conctactUs");
let TechCrunchMobile = document.getElementById("TechCrunchMobile");
let EventsMobile = document.getElementById("EventsMobile");



News.forEach((x) => {
  containerTechCrunch.innerHTML += cardTechCrunch(x);
});

events.forEach((x) => {
  eventsContainer.innerHTML += cardEvents(x);
});

let likeCounter = {};
let unlikeCounter = {}; 
 function likeCounterFn(id) {
  if (!likeCounter[id]) {
    likeCounter[id] = 0;
  }
  likeCounter[id]++;
  let likes = document.getElementById(`likes_${id}`);
  likes.innerText = likeCounter[id];
}

   function unlikeCounterFn(id) {
  if (!unlikeCounter[id]) {
    unlikeCounter[id] = 0;
  }
  unlikeCounter[id]++;
 let unlikes = document.getElementById(`unlikes_${id}`);
  unlikes.innerText = unlikeCounter[id];
}