
let aLink = document.querySelectorAll("aside");
let fullBoxContainer = document.getElementsByClassName('full-post-container')[0];
for(let i =0; i<=aLink.length; i++){
  aLink[i].addEventListener("click", () => {
    console.log('test');
    fullBoxContainer.innerHTML = fullboxCard(News[i]);
  });
}


function fullboxCard(News) {
  return `
  <div class="full-post container" id="containerTechCrunch">
                <div class="full-post-box">
                  <img src="../CSS/images/programming.jpg" class="post-img" alt="..." />
                  <div class="full-datas">
                    <a href="#" class="full-post-title"> ${News.title}</a>
                    <span class="post-date">12-may-2023</span>
                    <p class="full-post-description">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt, aliquid, ea perferendis illum fuga quod minima inventore aperiam, harum ipsum voluptate? A, amet! Aliquam amet praesentium quas ipsam vero repellendus consequatur cumque dignissimos rerum, hic unde sequi sunt dolorem, assumenda quo ad minima eveniet repudiandae ex eos! Sequi laudantium ratione enim laborum repellat, cum distinctio ipsa ex, ab quo dolore, quisquam reprehenderit? Nesciunt, perferendis odit sed sunt ab, reiciendis officia modi reprehenderit fuga quo tempore vero quod necessitatibus. Nihil maiores eligendi velit impedit itaque sit iure aperiam adipisci harum officiis, illo sint voluptatibus ut animi aspernatur necessitatibus iste quod id optio non similique quibusdam, officia magnam consequuntur? Quasi officia magni repellat ratione quibusdam assumenda nesciunt expedita libero inventore alias mollitia nisi excepturi illo officiis voluptatibus quaerat ipsa voluptatum, rem ullam laborum? Dolorum, ea atque doloremque explicabo dicta sequi unde voluptates beatae incidunt eius asperiores dolor quia quis. Vero, voluptatibus?
                    </p>
                    <div class="source-name">
                      <span class="source-name">BBC</span>
                    </div>
                    <div class="likes">
                    <div class="likes-up">
                      <button onclick="likeCounterFn">
                        <i class="fa fa-thumbs-up"></i>
                      </button>
                      <span id="likes">0</span>
                    </div>
                      <div class="likes-down">
                      <button onclick="unlikeCounterFn">
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
