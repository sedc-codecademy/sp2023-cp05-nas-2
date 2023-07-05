let aLink = document.querySelectorAll("aside");
aLink[i].addEventListener("click", () => {
  console.log(News[i].newsId);
  console.log(News[i].title);
  containerTechCrunch.innerHTML = fullboxCard(News[i]);
});

function fullboxCard(News) {
  return `
  <div class="full-post container" >
  <div class="full-post-box">
    <img src="${News.image} " />
    <div class="full-datas">
      <a href="#" class="full-post-title"> ${News.title}</a>
      <span class="post-date">${News.date}</span>
      <p class="full-post-description">
       ${News.Description}
      </p>
      <div class="source-name">
        <span class="source-name">BBC</span>
      </div>
      <div class="likes">
      <div class="likes-up">
        <button onclick="likeCounterFn(${News.newsId})">
          <i class="fa fa-thumbs-up"></i>
        </button>
        <span id="likes">0</span>
      </div>
        <div class="likes-down">
        <button onclick="likeCounterFn(${News.newsId})">
          <i class="fa fa-thumbs-down"></i>
        </button>
        <span id="unlikes">0</span>
      </div>
    </div>
    </div>
  </div>
  </div>
 `;
}
