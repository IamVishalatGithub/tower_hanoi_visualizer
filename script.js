let myLogs = document.getElementById("logs");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function startTower(){
    
    const disks = document.getElementById("disks-input").value;
    for(var i = disks; i < 5; i++){
        document.getElementById("tower-one").children[i].style.display = "none";
    }

    document.getElementById("moves").innerText = ("min moves : " + (1>>disks)-1);
    if(disks > 5){
        alert("Maximum 5 disks are allowed");
        return;
    } 
    else{
        sleep(1000).then(()=>{move(disks, "tower-one", "tower-three", "tower-two")});
    }

}

function printss(disks, from, to){
    document.getElementById(from).children[disks-1].style.display = "none";
    document.getElementById(to).children[disks-1].style.display = "block";
    
    myLogs.innerText += (disks +" from " + from + " to " + to + "\n");

}

let t = 0;
function move(disks, from, to, helper){

        
    if(disks == 0) return;
    move(disks-1, from, helper, to);
    t += 800;
    sleep(t).then(()=>{printss(disks, from, to)});
    move(disks-1, helper, to, from);
}


const restartBtn = document.getElementById("restart-btn");
function handleClick(){
    history.go();
}

restartBtn.addEventListener("click", handleClick);