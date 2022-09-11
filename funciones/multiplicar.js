const multiplicar = (num1, num2) => {
   if(num1 === 0 || num2 ===  0) {
       return "No se puede multiplicar por 0. Ingrese otro número.";

   }
   const resultado =num1 * num2;
   return resultado;


}
module.exports =multiplicar;