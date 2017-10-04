var userTarjeta= prompt('Ingrese numeros de tarjeta');
isValidCard(validateNmuber(userTarjeta))

/* he creado la funcion validateNumber para ver si el numero ingresedo es solamente un numero,
de lo contrario que vuelva a decir que se ingrese numeros valido*/
function validateNmuber(userTarjeta){
	var valit = [];
	var numberTarjeta = userTarjeta.split('').reverse().join('');
	var number = '0123456789';
	if(numberTarjeta.length == 0){
		return validateNmuber(prompt('Ingrese numeros validos'));
	}
	for(var i=0; i< numberTarjeta.length; i++){
		if(number.indexOf(numberTarjeta[i]) == -1){
				return validateNmuber(prompt('Ingrese numeros validos'));
		}else{
			valit.push(numberTarjeta[i])
		}	
	}
	return valit;
}

/* funcion pedida en ejercicio 2 para ver si la tarjeta es valida*/
function isValidCard(number){
	var sum = 0;
	for(var i=0; i<number.length; i++){
		if((i+1)%2 ==0 && parseInt(number[i])*2 >9){ //para sumar numeros que sean mayores a 9 debes cunplir las condiciones
			var str = (parseInt(number[i])*2)+'' ;   //lo convertir en un number ya que era un string y lo multiplique luego sume '', para que fuera strung de nuevo
			sum += parseInt(str[0])+parseInt(str[1]) //sume ambos numeros
		}
		else if((i+1)%2 ==0){            //ya que por condicion anterior no son mayores a 9 entonces todos los que estan en posicion par son multiplicado
			sum += parseInt(number[i])*2
		}		
		else{
			sum += parseInt(number[i]) //de lo contrario se conserva el mismo	
		}
	}
	if(sum%10 == 0){             // si el resto entre la suma y 10 es igual a cero entra
		return alert('tarjeta valida');
	}
	else{                        //de lo contrario es una tarjeta invalida y debe volver a preguntar
		alert('tarjeta invalida')
		return isValidCard(validateNmuber(prompt('Ingrese numeros validos')));
	}
}