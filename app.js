//--------------------------------------------USER PASSWORD------------------------------------------------------//

let username = prompt("Ingresá tu nombre de usuario");
let password = prompt("Ingresá tu contraseña");
let password2 = prompt("Volvé a ingresar tu contraseña");
let checkedPassword = password === password2;
let danger = false;

if (username === "agustin" && checkedPassword) {
  alert("Iniciaste sesión con tu cuenta " + username);
  let service = prompt(
    "Que servicio desea pagar? Gas - Luz - Agua - Internet"
  ).toLowerCase();
  switch (service) {
    case "gas":
      alert("Pagaste gas");
      break;
    case "luz":
      alert("Pagaste luz");
      break;
    case "agua":
      alert("Pagaste agua");
      break;
    case "internet":
      alert("Pagaste internet");
      break;
    default:
      alert("Debes elegir un servicio válido");
  }
} else if (username === "agustin" && !checkedPassword) {
  alert("Tus contraseñas no coinciden");
  danger = true;
} else {
  alert("Ese usuario no existe XD");
  danger = false;
}

if(danger){
    alert('Ojito ' + username + ', alguien intento acceder con tu cuenta')
}

//------------------------------------------------------BUSCADOR de PALABRAS-------------------------------------------------//

let text = ('Este es el After Class de Control de Flujos').toLowerCase()
let search = prompt('Qué palabra desea buscar?').toLowerCase()
let search2 = prompt('Qué otra palabra desea buscar?').toLowerCase()

if(text.includes(search) && text.includes(search2)){
    alert(`El texto si incluye la palabra "${search}" y la palabra "${search2}"`)
}else if(text.includes(search) || text.includes(search2)){
    alert('Una de las palabras se encontró en el texto')
}else{
    alert('Las palabras que buscaste no se encontraron en el texto')
}

//-----------------------------------------------------FIZZBUZZ-------------------------------------------------//

for(let number = 1; number <= 100; number++){
    if(number % 3 == 0 && number % 5 == 0){
     console.log(`${number} FizzBuzz`)
    } else if(number % 3 == 0){
     console.log(`${number} Fizz`)
    } else if(number % 5 == 0){
     console.log(`${number} Buzz`)
    } else {console.log(`${number}`)}
}
