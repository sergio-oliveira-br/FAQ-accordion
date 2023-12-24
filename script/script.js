function validateEmail(email) 
{
      // Expressão regular para validar o formato do email
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
}

function subscrible()
{

      var emailInput = document.getElementById("text-form");
      var emailError = document.getElementById("emailError");
      var emailValue = emailInput.value.trim();

      if (!validateEmail(emailValue)) 
      {
          emailError.innerHTML = "Oops! Invalid e-mail. \n=[";
      } else 
      {
          // Faça o que for necessário quando o email for válido
          emailError.innerHTML = "";
          alert("Thanks for subscribing!" +
          "\nA confirmation email has been sent to ash@loremcompany.com." + emailValue);
      }
}

//POPUP

window.addEventListener("load", function ()
{
      setTimeout(function open(event)
      {
            document.querySelector(".popup").style.display = "block";
      }, 2000);
});


//CLOSE
document.addEventListener("DOMContentLoaded", 
function()
{
      console.log("DOM Loaded");
  
      document.querySelector("#close").addEventListener("click", 
      function()
      {
            window.location.href = ""; 
             document.querySelector(".popup").style.display = "none"; 
      });
      {
            document.querySelector(".popup").style.display = "none";
      };
});




