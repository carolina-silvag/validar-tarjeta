var userTarjeta= prompt('Ingrese numeros de tarjeta');
isValidCard(validateNumber(userTarjeta))

/* he creado la funcion validateNumber para ver si el numero ingresedo es solamente un numero,
de lo contrario que vuelva a decir que se ingrese numeros valido*/
function validateNumber(userTarjeta){
	var valit = [];
	var numberTarjeta = userTarjeta.split('').reverse().join(''); // convertir los numero ingresados en posicion de atras hacia adelante
	var number = '0123456789';
	if(numberTarjeta.length == 0){              //comprobar si es vacio, si cumple la condicion de ser igual a cero
		return validateNumber(prompt('Ingrese numeros validos')); //volver a preguntar para que se ingrese un numeros validos
	}
	for(var i=0; i< numberTarjeta.length; i++){     //recorrer todos lo numeros
		if(number.indexOf(numberTarjeta[i]) == -1){ //si el numero no se encuentra en la variable number sera igual a menos uno
				return validateNumber(prompt('Ingrese numeros validos'));//vuelve a preguntar para que ingrese numeros validos
		}else{
			valit.push(numberTarjeta[i])  //agrega a valit los numeros validos
		}	
	}
	return valit;
}

/* funcion pedida en ejercicio 2 para ver si la tarjeta es valida, utilizar logaritmo
luhn */
function isValidCard(number){
	var sum = 0;
	for(var i=0; i<number.length; i++){               
		if((i+1)%2 ==0 && parseInt(number[i])*2 >9){ //para sumar numeros que sean mayores a 9 debes cunplir las condiciones
			var str = (parseInt(number[i])*2)+'' ;   //lo converti en un number, ya que era un string y lo multiplique por 2, luego sume '', para que fuera strung de nuevo
			sum += parseInt(str[0])+parseInt(str[1]) //sume ambos numeros, utilize parseInt para tranformarlo a numero otra vez
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
		return isValidCard(validateNumber(prompt('Ingrese numeros validos')));
	}
}