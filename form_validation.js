
const submit = document.getElementById("submit");
 
function validateForm() {
        //  <------------------FNAME-------------------------->
    let fname = document.forms["myForm"]["first_name"].value;
    if (fname == "") {
      document.querySelector(".show_error").innerHTML = " ** The user must be filled.";
      document.querySelector(".show_error").style.color = "red";
      return false;
    };
      //  <------------------LNAME-------------------------->
     let lname = document.forms["myForm"]["last_name"].value;
     if (lname == "") {
       document.querySelector(".show_error1").innerHTML = " ** The user must be filled.";
       document.querySelector(".show_error1").style.color = "red";
       return false;
     };
      //  <------------------EMAIL-------------------------->
     let email = document.forms["myForm"]["email"].value;
     if (email == "") {
       document.querySelector(".show_error2").innerHTML = " ** The user must be filled.";
       document.querySelector(".show_error2").style.color = "red";
       return false;
     };
      //  <------------------PHONE-------------------------->
     let ph = document.forms["myForm"]["phone"].value;
     if (ph == "") {
       document.querySelector(".show_error3").innerHTML = " ** The user must be filled.";
       document.querySelector(".show_error3").style.color = "red";
       return false;
     };
      //  <------------------WEBSITE-------------------------->
     let web = document.forms["myForm"]["website"].value;
     if (web == "") {
       document.querySelector(".show_error4").innerHTML = " ** No one selected.";
       document.querySelector(".show_error4").style.color = "red";
       return false;
     }

      };

     //  <------------------SUBMIT-------------------------->
    submit.addEventListener('click', validateForm);

     function RadioButton(IdBaseName, NumberOfButtons) {
         for (x=1;x<=NumberOfButtons;x++) {
            //  <------------------REQUIRED  VALIDATION-------------------------->
         if (document.querySelector("#yes").checked) {
             document.querySelector('.url').innerHTML="**Provide your URL";
             
           
             }
         else if(document.querySelector("#no").checked){ 
             document.querySelector('.url').style.display = "none";
         }else{
            alert("select correct option.");
         }
      
       }
         return false;
     };
     
    

  
  
