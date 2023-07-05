let OldNewsBBtn = document.getElementById('OldNews');

let OldNewsArray = [];

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

const yesterdayNews = OldNewsArray.filter(
  (item) => new Date(item.date).toDateString() === yesterday.toDateString()
);

OldNewsArray.push(...yesterdayNews);


OldNewsBBtn.addEventListener('click',($event)=>{
  $event.preventDefault($event)
  containerTechCrunch.innerHTML='';
  console.log('test');
  OldNewsArray.forEach((element) => {
    containerTechCrunch.innerHTML += cardTechCrunch(element);
  });

});