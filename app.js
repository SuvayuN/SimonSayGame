let sysIpt=[];
let usrIpt=[];
let c=0;
let btns=["box1","box2","box3","box4"];
let start=false;
let level=0;
let hscore=0;
let h3=document.querySelector("h3");
let boxes=document.querySelectorAll(".box");
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        levelup();
    }
})
function levelup(){
    usrIpt=[];
    level++;
    h3.innerText=`level ${level}`;
    let idx=Math.floor(Math.random()*4);
    let rdmBtn=btns[idx];
    sysIpt.push(rdmBtn);
    let btn=document.querySelector(`#${rdmBtn}`);
    btnFlash(btn);
}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
for(box of boxes){
    box.addEventListener("click",function(){
        if(start==true){
            usrIpt.push(this.id);
            btnFlash(this);
            checkAns(usrIpt.length-1);
        }
    })
}
function checkAns(idx){
    if(sysIpt[idx]===usrIpt[idx]){
        if(idx==level-1){
            setTimeout(levelup,1000);
        }
    }
    else{
        h3.innerHTML=`Game over!!Your score was <b>${level-1}</b><br>Press any key to restart the game`;
        if(level-1>hscore){
            hscore=level-1;
        }
        reset();
        h2.innerText=`Highest Score:${hscore}`;
    }
}
function reset(){
    sysIpt=[];
    start=false;
    level=0;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },100);
}

// Functionality for mobile

document.addEventListener("touch",function(){
    if(start==false){
        start=true;
        levelup();
    }
})
for(box of boxes){
    box.addEventListener("touch",function(){
        if(start==true){
            usrIpt.push(this.id);
            btnFlash(this);
            checkAns(usrIpt.length-1);
        }
    })
}