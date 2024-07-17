//Constante da temperatura do dia em kelvin
const kelvin = 293;
//Variavel para receber o valor em celsius
let celsius;
//Variavel para receber o valor em fahrenheit
let fahrenheit;
//Variavel para receber o valor em newton
let newton;

//Calculo de kelvin para celsius
celsius = kelvin - 273;

//Calculo de celsius para fahrenheit
fahrenheit = celsius * (9/5) + 32;
//Usando o metodo do objeto Math para arredondar para baixa a temperatura em fahrenheit
fahrenheit = Math.floor(fahrenheit);

//Calculo de celsius para newton
newton = celsius * (33/100);
//Usando o metodo do objeto Math para arredondar para baixa a temperatura em newton
newton = Math.floor(newton);

//Exibindo temperatura em celsius no console
console.log(`A temperatura é ${celsius} graus Celsius.`);
//Exibindo temperatura em fahrenheit no console
console.log(`A temperatura é ${fahrenheit} graus Fahrenheit.`);
//Exibindo temperatura em newton no console
console.log(`A temperatura é ${newton} graus Newton.`);