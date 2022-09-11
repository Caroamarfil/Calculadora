const sumar = require ("./funciones/sumar");
const restar = require ("./funciones/restar");
const dividir =require ("./funciones/dividir");
const multiplpicar =require ("./funciones/multiplicar");
const multiplicar = require("./funciones/multiplicar");

const s1 = 50
const s2 = 6

const suma = sumar (s1, s2);
console.log( s1, "+", s2, "=", suma);

const resta = restar (s1, s2);
console.log( s1, "-", s2, "=", resta);

const d1 = 50
const d2 = 6
const d3 = 0

const division = dividir (d1, d2);
console.log( d1, "/", d2, "=", division);

constDivisionPorCero = dividir (d1, d3);
console.log( d1, "/", d3, "=", constDivisionPorCero);

const m1 = 50
const m2 = 6
const m3 = 0

const multiplicacion = multiplicar (m1, m2);
console.log( m1, "*", m2, "=", multiplicacion);

constMultiPorCero = multiplicar (m1, m3);
console.log( m1, "*", m3, "=", constMultiPorCero);