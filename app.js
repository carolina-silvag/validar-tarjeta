
var userTarjeta = prompt('Ingrese numeros de tarjeta');

// llamando a la funciones
isValidCard(validateNumber(userTarjeta));

// funcion validar que sean numeros
function validateNumber(userTarjeta) {
  var valit = [];
  var numberTarjeta = userTarjeta.split('').reverse().join(''); 
  console.log(numberTarjeta);
  var number = '0123456789';
  if (numberTarjeta.length === 0) {             
    return validateNumber(prompt('Ingrese numeros validos')); 
  }
  for (var i = 0; i < numberTarjeta.length; i++) {     
    if (number.indexOf(numberTarjeta[i]) === -1) { 
      valit.push(numberTarjeta[i]); 
      return validateNumber(prompt('Ingrese numeros validos'));
    } 
  }
  return valit;
}

// funcion validar numeros tarjeta
function isValidCard(number) {
  var sum = 0;
  for (var i = 0; i < number.length; i++) {               
    if ((i + 1) % 2 === 0 && parseInt(number[i]) * 2 > 9) { 
      var str = (parseInt(number[i]) * 2) + '' ;   
      sum += parseInt(str[0]) + parseInt(str[1]); 
    } else if ((i + 1) % 2 === 0) {             
      sum += parseInt(number[i]) * 2;
    } else {
      sum += parseInt(number[i]); 
    }
  }
  if (sum % 10 === 0) {             
    return alert('Tarjeta Valida');
  } else {                       
    alert('Tarjeta Invalida');
    return isValidCard(validateNumber(prompt('Ingrese numeros validos')));
  }
}
