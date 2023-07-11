import { News, events } from "./data.js";
let latestBtn = document.getElementById("TechCrunch");
let containerTechCrunch = document.getElementById("containerTechCrunch");
let EventsBtn = document.getElementById("Events");
let eventsContainer = document.getElementById("eventsContainer");
let registerButton = document.getElementById("registerButton");
let contactUs = document.getElementById("contactUs ");
let TechCrunchMobile = document.getElementById("TechCrunchMobile");
let EventsMobile = document.getElementById("EventsMobile");
const latestPageWrapper = document.querySelector(".page-wrapper.latest");
const eventsPageWrapper = document.querySelector(".page-wrapper.events");

News.forEach((x) => {
  containerTechCrunch.innerHTML += cardTechCrunch(x);
});

events.forEach((x) => {
  eventsContainer.innerHTML += cardEvents(x);
});

latestBtn.addEventListener("click", () => {
  latestPageWrapper.classList.remove("hidden");
  eventsPageWrapper.classList.add("hidden");
  cardTechCrunch();
});
EventsBtn.addEventListener("click", () => {
  latestPageWrapper.classList.add("hidden");
  eventsPageWrapper.classList.remove("hidden");
  cardTechCrunch();
});
function cardTechCrunch(data) {
  let likeCount =
    parseInt(localStorage.getItem(`likeCount_${data.newsId}`)) || 0;
  let dislikeCount =
    parseInt(localStorage.getItem(`dislikeCount_${data.newsId}`)) || 0;
  return `
        <div class="post-box">
      <img id="data.newsId" onclick="fullboxCard(${data.newsId}) " src="${data.image}" class="post-img" alt="..." />
      <div class="datas">
        <a  href="fullBox.html" class="post-title"> ${data.title}</a>
        <span class="post-date">${data.Date}</span>
        <p class="post-description">
       ${data.Description}
       </p>
        <div class="source-name">
         <span class="source-name">BBC</span>
       </div>
        <div class="likes">
        <div class="likes-up">
          <button onclick="likeCounterFn(${data.newsId})">
            <i class="fa fa-thumbs-up"></i>
          </button>
          <span id="likes_${data.newsId}">${likeCount}</span>
        </div>
          <div class="likes-down">
          <button onclick="unlikeCounterFn(${data.newsId})">
           <i class="fa fa-thumbs-down"></i>
          </button>
          <span id="unlikes_${data.newsId}">${dislikeCount}</span>
        </div>
      </div>
      </div>
    </div>
    `;
}
function cardEvents(data) {
  let likeCount =
    parseInt(localStorage.getItem(`likeCount_${data.eventsId}`)) || 0;
  let dislikeCount =
    parseInt(localStorage.getItem(`dislikeCount_${data.eventsId}`)) || 0;
  return `
         <div class="post-box">
      <img id="data.eventsId" onclick="fullboxCard(${data.eventsId}) " src="${data.image}" class="post-img" alt="..." />
      <div class="datas">
        <a  href="fullBox.html" class="post-title"> ${data.title}</a>
        <span class="post-date">${data.Date}</span>
        <p class="post-description">
        ${data.Description}
        </p>
        <div class="source-name">
          <span class="source-name">BBC</span>
       </div>
        <div class="likes">
        <div class="likes-up">
            <i onclick="likeCounterFn(${data.eventsId})" class="fa fa-thumbs-up"></i>
          
          <input id="likes_${data.eventsId}">${likeCount}</input>
        </div>
          <div class="likes-down">
          <button onclick="unlikeCounterFn(${data.eventsId})">
            <i class="fa fa-thumbs-down"></i>
          </button>
          <span id="unlikes_${data.eventsId}">${dislikeCount}</span>
        </div>
      </div>
      </div>
    </div>
    `;
}

function likeCounterFn(eventsId) {
  let likeCount = parseInt(localStorage.getItem(`likeCount_${eventsId}`)) || 0;
  likeCount++;
  localStorage.setItem(`likeCount_${eventsId}`, likeCount);
  const likesElement = document.getElementById(`likes_${eventsId}`);
  likesElement.textContent = likeCount;
}

function unlikeCounterFn(eventsId) {
  let dislikeCount =
    parseInt(localStorage.getItem(`dislikeCount_${eventsId}`)) || 0;
  dislikeCount++;
  localStorage.setItem(`dislikeCount_${eventsId}`, dislikeCount);
  const unlikesElement = document.getElementById(`unlikes_${eventsId}`);
  unlikesElement.textContent = dislikeCount;
}
