const overlay= document.querySelector('.ovelay');
// const pledge= document.querySelector('.fadeout');
const overlaytwo=document.querySelector('.overlaytwo');
const sho= document.querySelector('.sho');
const vis=document.querySelector('.vis1');
const ovlay=document.querySelector('.over');

var numbers=[1,2,3,4];

function ov(){
    ovlay.style.display="block";
}

function ow(){
    ovlay.style.display="none";
}

function on(){
    overlay.style.display="block";
}
function off(){
    overlay.style.display="none";
}
function onn(iid){
    const pledge =document.querySelector('.fadeout'+iid);
    pledge.style.display="block";
    numbers.map((num) =>{
        if(num!=iid)document.querySelector('.fadeout'+num).style.display="none";
    })
}
function onnn(iid){
    console.log(iid);
    const pledge=document.querySelector('.fadeout'+iid);
    pledge.style.display="none";
    overlaytwo.style.display="block";
}
function offff(){
    overlaytwo.style.display="none";

    overlay.style.display="none";
}

function show(){
    if(sho.style.display=="inline-flex"){
        sho.style.display="none";
        vis.style.display="inline-flex";
    }
    else{
        sho.style.display="inline-flex";
        sho.style.color="#3CB4AC";
        vis.style.display="none";

    }
}