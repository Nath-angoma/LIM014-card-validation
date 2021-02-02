const validator = {
  isValid: function (creditCardNumber) {
   // console.log(creditCardNumber);
    let inverCard = creditCardNumber.split("").reverse();
     // console.log(inverCard);
    // creamos una variable para guardar en un array 
    const total = [];
    let position=0;
    //console.log(inverCard);
    //i = es la posición / e = es el valor
    // val = valor del elemento / i=indice del elemento 
    inverCard.forEach((val, i) => {
      // aplicamos un mod para saber si la posicion es par o impat  es exacta 
      if (i % 2 == 0) {
         // e = multiplica por 2 los valores de las posiciones i
         position = val * 2;
        // verificar las posiciones
        //console.log(position);
        if (position >= 10) {
          total.push(
            position
            .toString()  // convierte en una cadena 
              .split("")  // lo separa por caracter
              .reduce((acc,item ) =>  parseInt(acc) + parseInt(item))
               
          );
          //console.log(total)
        } else{
          total.push(position);
          // .push añade un valor a un array
          //console.log(total);
        }
      } else{
        total.push(parseInt(val));
        // capta los número que estaban en posiciones impares
        //console.log(total);
      }
    });

    const totalSum = total.reduce((acc, item) =>{
      return acc= acc + item

    }, 0);
    //console.log(totalSum);
    // toma de inicio a fin el valor total y lo suma todo
    if (totalSum % 10 === 0) {
      // si termina en 0 retorna en true, si no, en false
      return true;
      
    } else {
      return false;
    }
    
  },

  maskify: (creditCardNumber) => {
    let masked = "" ;
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i <= creditCardNumber.length - 5) {
        masked = masked + "#";
        //console.log(maskify);
      } else {
        masked = masked + creditCardNumber[i];
        //console.log(maskify);
      }
      //result.innerText = "¡Tu tarjeta número " + maskify + " es válida !";
    }

    return masked;

    /*let numero = creditCardNumber.slice(11,15);
    maskify += numero;
    
    return maskify;*/



  },
};

export default validator;
