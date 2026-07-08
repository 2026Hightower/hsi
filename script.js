function showMission(){

alert("Mission:\nImprove the financial stability of each member through saving, investment and community empowerment.");

}

function showVision(){

alert("Vision:\nImplement ideas that benefit people and positively impact the community and the country.");

}

function copyDetails(){

const text=
`Hightower Smart Investors

Paybill: 522522

Account: 1353482715

KCB Bank Kenya`;

navigator.clipboard.writeText(text);

toast("Bank details copied.");

}

function toast(message){

let t=document.getElementById("toast");

t.innerHTML=message;

t.style.display="block";

setTimeout(()=>{
t.style.display="none";
},3000);

}

function counter(id,end,speed){

let count=0;

let obj=document.getElementById(id);

let timer=setInterval(function(){

count++;

obj.innerHTML=count;

if(count>=end){

clearInterval(timer);

}

},speed);

}

counter("members",100,25);

counter("saving",1000,2);

counter("years",10,200);

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

let ripple=document.createElement("span");

ripple.classList.add("ripple");

this.appendChild(ripple);

let x=e.clientX-e.target.offsetLeft;

let y=e.clientY-e.target.offsetTop;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

setTimeout(()=>{

ripple.remove();

},600);

});

});