let exemplo1 = '5' + 1; // ESTOU CONVERTENDO ESSE NUMERO 1 EM UMA INTRING 
console.log(exemplo1);
console.log(typeof exemplo1);

// CONVERTENDO VALORES EXPLICITOS

//String

let num = 124; 
let bool = true;

let numToString = String(num);
console.log(numString, typeof numString); //Converte a variavel que estava em int para string
let boolToString = String(bool1); //Converte a variavel que estava em booleano para string
console.log(numString, typeof boolStringString);

//NUMEROS

let strNUm = "1234";
let strFloat = "12.55";

let strToNUm = Number(strNUm); 
console.log(strToNUm, typeof strToNUm);

let strToInt = parseInt(strToFloat); //AQUI NÃO VAI MuNDAR A PARTE POS A VIRGULA POIS É UM INT
console.log(strToNUm, typeof strToInt);

let strToFloat = parseFloat(strToFloat); // para transformar um tipo float para adicionar a parte decimal tbm
console.log(strToNUm, typeof strToFloat);

let invalidoNUm = Number("hello"); // não da pra converter letras para o tipo int 
console.log(invalidoNUm, typeof invalidoNUm);

//BOOLEAN 

let zero = 0;
let nonEmpySstring = "Hello";

let zeroToBoolean = Boolean(0);
console.log(zeroToBoolean, typeof zeroToBoolean);









