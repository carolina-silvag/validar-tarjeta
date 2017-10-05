pasos para tarjeta de credito valida

-Crear una variable para ingresar numero de tarjeta, utilizar un prompt (solo deben ser numeros)
-Crear un funcion llamada validateNmuber, para validar el numero ingresado y dejar los numero validos en un array, para ser utilizados con mas comodidad.
-Crear una variable vacia del tipo array, donde estaran los numeros validos.
-Crear una variable que contenga los numero ingresado en orden desde atras hacia adelante.
-Crear una variable con todos los numero validos.
-Luego preguntar con un if si es vacio, de no ser vacio, preguntar si cada numero se encuentras en numeros validos, si se cumple una de ambos if, volver a preguntar para que ingrese numeros validos.
-De lo contrario que guarde los numeros en la variable vacia array.
Por ultimo retornar los numeros validos en un array.

-Crear un function isValidCard que me validara la tarjeta, entregando si es una tarjeta valida o no es valida, de no ser valida debe volver a preguntar para ingresar numeros validos de una tarjeta.
-Crear una variable vacia donde se sumara todos los numeros validos.
-Luego con un for recorrer todos los numeros del array, y con un if preguntar si es una posicion par tomando desde 1 a 9, por lo cual, 0 en realidad era uno, 1 en realidad era 2 y asi sucesivamente hasta 10, ademas tenia que cumplir con la condicion de que si ese numero multiplicado por 2 era mayor a 9, entonces debia separarlo (tranformarlo en string para tener el numero en posicion cero y uno) y luego volver a tranformar en un number con parseInt y sumarlo a la variable vacia.(mejor explicado con el logaritmo de luhn).
-Si era menor a 9 y posicion par entonces que lo multiplicar por 2 y lo sumara a la variable vacia. 
-De lo contrario solo sumar el numero a la variable vacia
-Por ultimo, preguntar si el resto de la suma dividido por 10 es cero entonces rectornar 'tarjeta valida', de lo contrario retornar 'tarjeta invalida' y volver a preguntar para ingresar un numero valido.





