const over=document.querySelector('.overlay2');
const hideForDesktop=document.querySelector('.hide-for-desktop');

function on(){
    console.log('click');
    over.style.display="block";
    hideForDesktop.style.display="none";
}
function off(){
    console.log('click');
    over.style.display="none";
    hideForDesktop.style.display="block";
}