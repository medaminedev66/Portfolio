function checkvalidation(sentencef) {
   let size = sentencef.length
   var lowercase = sentencef.toLowerCase()
   if(lowercase===sentencef){
        return false  }
    else{
          return true
    }
} 

function validateEmail(email,input){
    const msg = input.parentNode.querySelector("small");
    if (checkvalidation(email))
    {
	     msg.innerText = "The email should be in lower case";
	     input.className = "error";
	     return false;
    }
    else{
        return true;
    }

}

const form = document.querySelector("#contactme")


form.addEventListener('submit', function(event){
    console.log("clicked")
    let email = form.elements['email'].value
    if (!validateEmail(email, form.elements['email'])) {
        event.preventDefault();
    }   
})
