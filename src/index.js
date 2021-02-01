import validator from "./validator.js";
  //console.log(validator);



document.getElementById("btn-primary").addEventListener("click", validate);
  function validate () {
  
  //Creamos las variables para referenciar los id del html 
  let cardNum = document.getElementById("cardNumber").value;
  let carValid = validator.isValid(cardNum); 
  
  let result = document.getElementById("answer");
  let Card = document.getElementById("dataContainer");
  let validationText = "";
  let revalidate = document.getElementById("return");
  let tc  = document.getElementById("cardImage");


  /*function validate (validationText) {
  //Empezamos con la validación
  if (carValid === true) {
    validationText = "es valida!";
  } else {
    validationText = "no es valido.";
  }
return validationText;
}

 validate(validationText); 
let revalidate = document.getElementById("return");


function mascara (cardNum, Card){
  let mask = validator.maskify(cardNum);

  result.innerText = "¡Tu tarjeta número " + mask + " " + validationText;
  Card.style.display = "none";
  revalidate.style.display = "block";

  return mascara;
}
mascara(Card);*/

if (carValid === true) {
  validationText = "es valida";
} else {
  validationText = "no es valido.";
}

  // Mascara 

  let mask = validator.maskify(cardNum);

  result.innerText = "Tu tarjeta número " + mask + " " + validationText;
  Card.style.display = "none";
  tc.style.display="none";
  revalidate.style.display = "block";
  
} 