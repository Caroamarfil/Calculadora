const dividir = (divisor, dividendo) => {
    if(divisor === 0 || dividendo ===  0) {
        return "No se puede dividir por 0. Ingrese otro número.";

    }
    const resultado =divisor / dividendo;
    return resultado;
 
 
 }
 module.exports =dividir;