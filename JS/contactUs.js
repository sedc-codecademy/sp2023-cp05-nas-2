

let contactBtn = document.getElementById('conctactUs');
let conctactUsMobile = document.getElementById('conctactUsMobile');
contactBtn.addEventListener('click',($event)=>{
    $event.preventDefault($event);
    window.location.href = "login.html";
});

conctactUsMobile.addEventListener('click',($event)=>{
    $event.preventDefault($event);
    window.location.href = "login.html";
});