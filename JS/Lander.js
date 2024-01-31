let ele = document.querySelector("#MenuBarRes");
ele.addEventListener("click",(eve)=>{
    if(document.getElementById("SMB").style.width==="200px"){
        document.getElementById("SMB").style.width="0px";
    }
    else{
        document.getElementById("SMB").style.width="200px";
    }
      
})