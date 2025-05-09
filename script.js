let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice"); 
const msg=document.querySelector("#para"); 
const user=document.querySelector("#user");
const comp=document.querySelector("#comp");

const computer=()=>{
    const option=["rock","paper","scissors"];
    const random=Math.floor(Math.random()*3);
    
    return option[random];
    
}
const winner=(userwin,cid,compchoice)=>{
    if(userwin){
        userScore++;
        user.innerText=userScore;
        console.log("you win");
        msg.innerText=`Your ${cid} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        comp.innerText=computerScore;
        console.log("computer wins");
        msg.innerText=` ${compchoice} beats your ${cid}`;
        msg.style.backgroundColor="red";
    }
}
const draw=()=>{
    console.log("its a draw!");
    msg.innerText="its a draw";
    msg.style.backgroundColor="";
}

const game=(cid)=>{
    console.log("userchoice=",cid);
    const compchoice=computer();
    console.log("chomputerchoice=",compchoice);
    if(cid===compchoice){
        draw();
    }
    else{
        let userwin=true;
        if(cid==="rock"){
            userwin=compchoice==="paper" ? false : true;
        }
        else if (cid==="paper"){
            userwin=compchoice==="scissors" ? false : true;
        }
        else if (cid==="scissors"){
            userwin=compchoice==="rock" ? false : true;
        }
        winner(userwin,cid , compchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",(e)=>{
        const cid=choice.getAttribute("id");
        game(cid);
});});