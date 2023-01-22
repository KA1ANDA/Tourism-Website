// TOURS CVLADEBI
let foni = document.getElementById('foni');

let diving = document.getElementById('diving');
let jungle = document.getElementById('jungle');
let climbing = document.getElementById('climbing');

//MODAL 1 IS CVLADEBI
let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let exit = document.getElementById("modal-reset");

//MODAL 2 IS CVLADEBI
let modal = document.getElementById("mymodal2");

let modalButton = document.getElementById("btn-modal2");

let closeWindow = document.getElementsByClassName("daxurva")[0];

let name1 = document.getElementById("name");
let lastName = document.getElementById("lastName");
let emailRegistration = document.getElementById("email2");
let date = document.getElementById("date");
let passwordRegistration = document.getElementById("password2");
let rePass = document.getElementById("re-password");
let submitRegistration = document.getElementById("submit-registration");





///////////////////////////////////////////////////////////////////////////

//MODAL 1 IS FUNQCIEBI

submit.onclick = function(){
    if(!email.value.includes("@") && !password.value ){
     email.style.cssText="border:2px solid red; color:red;"; 
     password.style.cssText="border:2px solid red; color:red";     
    }
    else if(!email.value.includes("@") && password.value){
      email.style.cssText="border:2px solid red; color:red;"; 
      password.style.cssText="border:2px solid green;";   
    }
    else if(email.value.includes("@") && !password.value){ 
      password.style.cssText="border:2px solid red; color:red";
      email.style.cssText="border:2px solid green; ";    
    }
    else{
      email.style.cssText="border:2px solid green; "; 
      password.style.cssText="border:2px solid green;"; 
    }
}



// MODAL 1 - IDAN GASVLISAS DARESETDEBA YVELAFERI

exit.onclick = function(){
  email.value ="";
  password.value = "";
  email.style.cssText="border:none; color:none;"; 
  password.style.cssText="border:none; color:none";  
  console.log("daej");
}




//////////////////////////////////////////////////////////////////



//MODAL 2 IS FUNQCIEBI


//ROCA DAVAJERT IXSNEBA MODALI
modalButton.onclick = function(){
  modal.style.display = "block";
}

// ROCA DAVAJERT X DAIXUREBA MODALI
closeWindow.onclick = function(){
  modal.style.display = "none";
}

//ROCA DAVAWVEBIT MODALIS GARDA NEBISMIER ADGILS

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//MODAL 2 SWORIA/ARASWORIA
submitRegistration.onclick = function(){

  if(!name1.value){
    name1.style.cssText="border:2px solid red; color:red";
  }else{
    name1.style.cssText="border:2px solid green; color:green";
  }


  
  if(!lastName.value){
    lastName.style.cssText="border:2px solid red; color:red";
  }else{
    lastName.style.cssText="border:2px solid green; color:green";
  }


  
  if(!emailRegistration.value.includes("@")){
    emailRegistration.style.cssText="border:2px solid red; color:red";
  }else{
    emailRegistration.style.cssText="border:2px solid green; color:green";
  }


  
  if(!date.value){
    date.style.cssText="border:2px solid red; color:red";
  }else{
    date.style.cssText="border:2px solid green; color:green";
  }
  

  if(passwordRegistration.value!==rePass.value){
    passwordRegistration.style.cssText="border:2px solid red; color:red";
    rePass.style.cssText="border:2px solid red; color:red";
  }else if((passwordRegistration&&rePass).value==""){
    passwordRegistration.style.cssText="border:2px solid red; color:red";
    rePass.style.cssText="border:2px solid red; color:red";
  }
  else{
    passwordRegistration.style.cssText="border:2px solid green; color:green";
    rePass.style.cssText="border:2px solid green; color:green";
  }

}


//////////////////////////////////////////////////////////////////
// TOURS FUNQCIA
diving.addEventListener('mouseover', function () {
  foni.style.backgroundImage = "url('../Sakurso/imgs/sea-background.jpg')";
  foni.style.backgroundSize = "cover";
  foni.style.backgroundAttachment = "fixed";
})



jungle.addEventListener('mouseover', function () {
  foni.style.backgroundImage = "url('../Sakurso/imgs/jungle-background.jpg')";
  foni.style.backgroundSize = "cover";
  
  ;
  
})



climbing.addEventListener('mouseover', function () {
  foni.style.backgroundImage = "url('../Sakurso/imgs/mountain-background.jpg')";
  foni.style.backgroundSize = "cover";
})