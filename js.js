document.getElementById("button").onclick = function(){
     if (document.getElementById("password").value == "" && document.getElementById("email").value == ""){
        window.alert("you need to insert your password and email");
    } 
    else if(document.getElementById("email").value == "")
        {
        window.alert("you need to enter your email ")
    }
    else if(document.getElementById("password").value == ""){
        window.alert("you need to enter your password ")
    }
    
    else{
    let ex = document.getElementById("box");
    let sec = document.getElementById("sec");

    ex.style.display ="none";
    sec.style.display ="block";
    }








}
document.getElementById("log").onclick = function(){
    if(document.getElementById("email1").value == document.getElementById("email").value && document.getElementById("password").value == document.getElementById("password1").value )
        {let sec = document.getElementById("sec");
    sec.style.display ="none";
    // window.alert("thank you");
let vid = document.getElementById("vid");
vid.style.display = "flex";
vid.style.justifyContent = "center";




}
    else
   
        { window.alert("insert the previous email and password correctly");

        }
    
    }