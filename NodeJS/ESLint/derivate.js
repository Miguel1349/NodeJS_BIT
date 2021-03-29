// Derivada de una función f(x) = x^b
const derivada = (b, m) => {
    return b * Math.pow(m, b - 1);
};

console.log(derivada(1));
console.log(derivada(3, -2));
console.log(derivada(4, -3));