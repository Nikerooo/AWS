var alturaPersona=85;              //alturaPersona almacena la altura de las personas
var edad=9;                       //edad Almacena la edad de las personas 

edad = prompt("Introduzca la edad: ");
alturaPersona = prompt ("Introduzca la altura del niño en cm: ");

if(edad>=10){
   
   if(alturaPersona>52){
      console.log("¡Subete, chico!");
   }
   else{
      console.log('Lo siento, chico. Tal vez el próximo año:');
   }
}
else{
   console.log("Lo siento, mas adelante");
}



if(edad>10 && alturaPersona>52){
   console.log("¡Subete, chico!");
}else{
   console.log('Lo siento, chico. Tal vez el próximo año:');
}

