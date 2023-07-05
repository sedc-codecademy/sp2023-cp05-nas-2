let TechCrunchBtn = document.getElementById("TechCrunch");
let containerTechCrunch = document.getElementById("containerTechCrunch");
let EventsBtn = document.getElementById("Events");
let eventsContainer = document.getElementById("eventsContainer");
let registerButton = document.getElementById("registerButton");
let conctactUs = document.getElementById("conctactUs");
let TechCrunchMobile = document.getElementById("TechCrunchMobile");
let EventsMobile = document.getElementById("EventsMobile");
let NewsApi = [];
let EventsApi = [];

var News = [
  {
    newsId: 0,
    title: `Confusion at Twitter continues over Elon Musk's tweet limits`,
    image: `https://ichef.bbci.co.uk/news/976/cpsprodpb/DC6B/production/_130272465_gettyimages-1240294770.jpg.webp`,
    Description: `Confusion at Twitter appears to be continuing after owner Elon Musk introduced limits to the amount of posts users can read in a day.`,
    URL: `https://www.bbc.com/news/technology-66087172`,
    Date: `07-05-2023`,
  },
  {
    newsId: 1,
    title: `Threads: Instagram owner to launch Twitter rival on Thursday`,
    image: `https://ichef.bbci.co.uk/news/976/cpsprodpb/1092F/production/_130278876_threads.jpg.webp`,
    Description: `Facebook owner Meta is launching its new app to rival Twitter and says it will go live on Thursday.`,
    URL: `https://www.bbc.com/news/business-66094072`,
    Date: `07-05-2023`,
  },
  {
    newsId: 2,
    title: `Pokemon Go maker Niantic cuts a quarter of its workforce`,
    image: `https://ichef.bbci.co.uk/news/976/cpsprodpb/6508/production/_130246852_fourpikachus.jpg.webp`,
    Description: `The maker of the Pokemon Go video game, Niantic, says it will cut a quarter of its workforce as the gaming industry faces a slowdown in demand after downloads surged during the pandemic.`,
    URL: `https://www.bbc.com/news/business-66062372`,
    Date: `07-05-2023`,
  },
  {
    newsId: 3,
    title: `The AI trained to recognise waste for recycling`,
    image: `https://ichef.bbci.co.uk/news/976/cpsprodpb/2C63/production/_130236311_gettyimages-1409469474.jpg.webp`,
    Description: `There is a lot of rubbish in the world.`,
    URL: `https://www.bbc.com/news/business-66042169`,
    Date: `07-05-2023`,
  },
  {
    newsId: 4,
    title: `China curbs exports of key computer chip materials`,
    image: `https://ichef.bbci.co.uk/news/976/cpsprodpb/D27F/production/_130278835_gettyimages-1413577536.jpg.webp`,
    Description: `The Chinese government is tightening controls over exports of two key materials used to make computer chips.`,
    URL: `https://www.bbc.com/news/business-66093114`,
    Date: `07-05-2023`,
  },
  {
    newsId: 5,
    title: `Konux gears up to scale its AI + IoT play for optimizing the railways`,
    image: `https://techcrunch.com/wp-content/uploads/2023/06/KONUX_UI_01.jpg?w=1390&crop=1`,
    Description: `Unless you’ve been on an extended digital detox this year, you can’t have missed how a certain flavor of AI hype has been accelerating down the tracks like a runaway train.`,
    URL: `https://techcrunch.com/2023/07/04/konux-db-expansion/`,
    Date: `07-04-2023`,
  },
  {
    newsId: 6,
    title: `The remote work startups that will last aren’t actually remote work startups`,
    image: `https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-594830889.jpg?w=1390&crop=1`,
    Description: `Back in 2020 when the pandemic forced people to work from home, entrepreneurs saw an opportunity to build tools to fuel this new transition to remote work. `,
    URL: `https://techcrunch.com/2023/07/03/remote-work-startups-future/`,
    Date: `07-03-2023`,
  },
  {
    newsId: 7,
    title: `AI is not a panacea for software development`,
    image: `https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-1213838977.jpg?w=1390&crop=1`,
    Description: `How much more productive are developers using AI coding tools?`,
    URL: `https://techcrunch.com/2023/06/30/ai-is-not-a-panacea-for-software-development/`,
    Date: `06-30-2023`,
  },
  {
    newsId: 8,
    title: `How confidential computing could secure generative AI adoption`,
    image: `https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-1399061540.jpg?w=1390&crop=1`,
    Description: `Generative AI has the potential to change everything. It can inform new products, companies, industries, and even economies.`,
    URL: `https://techcrunch.com/2023/06/29/how-confidential-computing-could-secure-generative-ai-adoption/`,
    Date: `06-29-2023`,
  },
  {
    newsId: 9,
    title: `Microsoft seems to think we’re getting a PS5 Slim this year`,
    image: `https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/640x427/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/22015298/vpavic_4278_20201030_0120.jpg`,
    Description: `Microsoft also thinks the handheld PlayStation will be ‘under $300’ when it launches later this year.`,
    URL: `https://www.theverge.com/2023/7/4/23783621/microsoft-playstation-5-slim-model-release-date-pricing`,
    Date: `07-04-2023`,
  },
  {
    newsId: 10,
    title: `It’s clearly time: all the news about the transparent tech renaissance`,
    image: `https://duet-cdn.vox-cdn.com/thumbor/0x0:1600x1464/1920x1757/filters:focal(800x732:801x733):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24763899/jsaux_rgb_back.jpg`,
    Description: `Gadgets, much like fashion, can make style comebacks.`,
    URL: `https://www.theverge.com/23774468/clear-transparent-tech-gadgets-news-announcements-products`,
    Date: `07-05-2023`,
  },
];

News.forEach((x) => {
  containerTechCrunch.innerHTML += cardTechCrunch(x);
});

function cardTechCrunch(data) {
  return `
       <div class="post-box">
    <img id="data.newsId" onclick="fullboxCard(${data.newsId}) " src="${data.image}" class="post-img" alt="..." />
    <div class="datas">
      <a  href=${data.URL} class="post-title"> ${data.title}</a>
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
        <span id="likes_${data.newsId}">0</span>
      </div>
        <div class="likes-down">
        <button onclick="unlikeCounterFn(${data.newsId})">
          <i class="fa fa-thumbs-down"></i>
        </button>
        <span id="unlikes_${data.newsId}">0</span>
      </div>
    </div>
    </div>
  </div>
  `;
}

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

function cardEvents(data) {
  return `<div class="post-box">
    <img src="${data.eventImage}" class="post-img" alt="..." />
    <a href="#" class="post-title"> ${data.eventTitle}</a>
    <span class="post-date">12-may-2023</span>
    <p class="post-description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
      amet natus debitis recusandae corrupti consequuntur eligendi
      ducimus accusantium rerum ab.
    </p>
    <div class="source-name">
      <span class="source-name">BBC</span>
    </div>
  </div>`;
}
