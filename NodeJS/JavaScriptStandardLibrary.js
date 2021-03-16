/*
 * Set Class: Un set es una colección de valores como lo es una matríz. Sin embargo
 * a diferencia de las matrices los sets no estan ordenados ni indexados y no permiten
 * duplicados. Un valor es miembro de un set o no es miembro. No es posible preguntar
 * cuantas veces aparece un valor un conjunto
*/

let setOne = new Set();// set vacio
let setTwo = new Set([1, setOne]);
let setThree = new Set(setOne);// un nuevo set que copia los elementos de setOne
let setFour = new Set("Mississipi");// Colocaremos 4 elementos: "M", "i", "s", "p"
console.log(setFour.size);
setOne.add(1);
setOne.add(1);
setOne.add(true);
setOne.add([1, 2, 3]);
setOne.add("prueba");
console.log(setOne.size);
setOne.delete(1);
console.log(setOne.size);
setOne.delete("prueba");
console.log(setOne.size);
setOne.clear();
console.log(setOne.size);
setOne.add("a").add("b").add("c");
console.log(setOne.size);

// Verificación de si un valor es miembro del set
let digitsPrimes = new Set([2, 3, 5, 7]);
console.log(digitsPrimes.has(2));
console.log(digitsPrimes.has("2"));
console.log(digitsPrimes.has(70));

// Bucles con Sets
let sum = 0;
for (let prime of digitsPrimes) {
    sum += prime;    
}
console.log(sum);

// Conversión a matrices
console.log([...digitsPrimes]);
console.log(Math.max(...digitsPrimes));

// foreach
let product = 1;
digitsPrimes.forEach(prime => product *= prime);
console.log(product);

/*
 * Map Class: Representa un conjunto de valores conocidos como claves, donde cada clave
 * tiene otro valor asociado(o mapeado), un map es como una matríz pero en lugar de
 * usar indices secuanciales como claves, nos permite usar valores arbitrarios
 */
let mapOne = new Map();//empty map
let mapTwo = new Map([// Map con claves string y valores enteros
    ["one", 1],
    ["two", 2]
]);
let mapThree = new Map(mapTwo);// copia de mapTwo
let obj = {x: 1, y: 2};
let mapFour = new Map(Object.entries(obj));// igual a definirlo como mapTwo
let mapFive = new Map();
console.log(mapFive.size);
mapFive.set("one", 1);
mapFive.set("two", 2);
console.log(mapFive.size);
console.log(mapFive.get("one"));
mapFive.set("one", true);
console.log(mapFive.get("one"));
console.log(mapFive.has("one"));
console.log(mapFive.has("true"));
mapFive.delete("one");
console.log(mapFive.size);
mapFive.clear();
console.log(mapFive.size);
mapFive.set("one", 1).set("two", 2).set("three", 3);
console.log(mapFive.size);
let mapSix = new Map();
mapSix.set({}, 1);
mapSix.set({}, 2);
console.log(mapSix.size);
console.log(mapSix.get({}));
mapSix.set("one", undefined);
console.log(mapSix.get("one"));
console.log(mapSix.get("two"));
let mapSeven = new Map();
mapSeven.set("one", 1).set("two", 2).set("three", 3);
console.log([...mapSeven]);
for(let [key, value] of mapSeven) {
    console.log(`llave ${key} - valor ${value}`);
}
console.log([...mapSeven.keys()]);
console.log([...mapSeven.values()]);
console.log([...mapSeven.entries()]);
mapSeven.forEach((key, value) => console.log(`llave ${key} - valor ${value}`));

/*
 * Typed Arrays: Los elementos de un typed Array son todos números y permiten especificar
 * el tipo y el tamaño de los números que se almacenaran en la raíz, se debe especificar
 * de una raíz con tipo cuando se crea y esa longitud no puede cambiar. Los elementos de
 * una matríz con tipo siempre se inicializan en 0(cero)
 */
let bytes = new Uint8Array(1024);// 1024 bytes
let matrix = new Float64Array(9);// Matríz 3x3
let point = new Int16Array(3);// un punto en un espacio de 3d
let rgba = new Uint8ClampedArray(4);// un valor de pixel de rgba de 4 bites
let white = Uint8ClampedArray.of(255, 255, 255, 0);// color blanco
let ints = Uint32Array.from(white);// los mismos 4 números como enteros

console.log(Uint8Array.of(1.23, 2.99, 45000));

// Referencia opaca
let buffer = new ArrayBuffer(1024 * 1024);
console.log(buffer.byteLength);
let asBytes = new Uint8Array(buffer);
let asInt = new Int32Array(buffer);

/*
 * Regular Expressions: Una expresión regular es un objeto de describe un patrón textual
 */
let patrern1 = /s$/i;// i - indica ignorar si es mayúscula o minúscula
/*
 * Utilizando constructor de RegExp
 * signo $ metacaracter especial, debe coincidir con el final de una cadena. Termina en s
 */
let pattern2 = new RegExp(("s$"));
/*
 * Caracteres especiales en una expresión regular.
 * [^, $, *, ., +, ?, =, !, :, |, /, \, (), [], {}]
 * \: Utilizado para que coincida el caracter \g
 * .: Cualquier carácter excepto nueva línea u otro terminador de línea Unicode. O, si la 
 * expresión regular usa la marca s, entonces un punto coincide con cualquier carácter,
 * incluidos los terminadores de línea.
 * Clases de caracteres:
 * Una clase de caracter coincide con cualquier caracter que contenga
 * (? = p): Una afirmación de anticipación positiva. Requiere que los siguientes caracteres
 * coincidan con el patrón p, pero no los incluyas en la coincidencia.
 * (?!p): Una afirmación de anticipación negativa. Requiere que los siguientes caracteres no
 * coincidan con el patrón p.
 * ^: Haga coincidir el comienzo de la cadena o, con la bandera m, el comienzo de una línea.
 * $: Haga coincidir el final de la cadena y, con la bandera m, el final de una línea.
 * \b: Coincide con el límite de una palabra. Es decir, haga coincidir la posición entre un
 * carácter \w: y un carácter \W o entre un carácter \w y el principio o el final de una cadena.
 * (Tenga en cuenta, sin embargo, que [\b] coincide con retroceso).
 * \B: Coincidir con una posición que no sea un límite de palabras.
 */
let pattern3 = /[abc]/; // Coincide con cualquiera de las letras.
let pattern4 = /[^abc]/; // coincide con cualquier caracter que que no este entre los []
let pattern5 = /[a-z]/;// Coincide con las letras en minúscula
let pattern6 = /[a-zA-Z]/;// Coincide con todas las letras mayúsculas y minúsculas
let pattern7 = /[a-zA-Z0-9]/;// Coincide con todas las letras mayúsculas y minúsculas y los números
let pattern8 = /[...]/; // Coincide con cualquier caracter entre corchetes
let pattern9 = /[^...]/; // Coincide con cualquier caracter que no este entre corchetes

/*
 * Repeticiones
 * Son patrones mas complejos que utilizan una sintaxís que específica cúantas veces se puede
 * repetir un elemento
 * {n, m}: Coincide con el elemento anterior n veces pero no mas de m veces
 * {n, }: Coincide con el elemnto anterior n o mas veces
 * {n}: n apariciones del elemento anterior
 * ?: 0 o 1 apariciones del elemento anterior
 * +: Una o mas ocurrencias del elemento anterior
 * *: 0 o mas ocurrencias del elemento anterior
 * \w: Cualquier carácter de palabra ASCII. Equivalente a [a-zA-Z0-9_].
 * \W: Cualquier carácter que no sea un carácter de palabra ASCII. Equivalente a [^a-zA-Z0-9_].
 * \s: Cualquier carácter de espacio en blanco Unicode.
 * \S: Cualquier carácter que no sea un espacio en blanco Unicode.
 * \d: Cualquier dígito ASCII. Equivalente a [0-9].
 * \D: Cualquier carácter que no sea un dígito ASCII. Equivalente a [^0-9].
 * [\b]: Un retroceso literal (caso especial).
 */
let pattern10 = /\d/; // Coincide con un dígito entre 0 y 9
let pattern11 = /\d\d/; // Coincide con dos dígito entre 0 y 9
let pattern12 = /\d{2,4}/;// Coincide entre 2 y cuatro dígitos
let pattern13 = /\w{3}\d?/;// tres letras y un dígito opcional
let pattern14 = /\s+java\s+/; // Coincide con java 1 o más espacios antes y después
let pattenr15 = /[^(]*/; // Coincide con 0 o mas caracteres que no sean parentesis abiertos

/*
 * Flags:
 * g: Significa global, se usa para encontrar todas las coincidencias dentro de una cadena
 * i: No diferencia entre mayúsculas y minúsculas
 * m: Buscar la coincidencia en modo multilinea
 * s: Es útil cúando se trabaja con texto que incluye nuevas líneas
 * u: Significa unicode. Esto hace que la expresión regular coincida con los puntos de unicode
 * completos en lugar de coincidir con los de 16 bits, si no se usa las expresiones regulares
 * no funcionaran bien con texto que incluya emojis o otro tipo de caracter especial
 * y: indica que la expresión regular es sticky y debe coincidir al principio de una cadena 
 * o al primer caracter que sigue a la coincidencia anterior
 */

/*
 * Métodos de string para coincidencia de patrones
 * search: Toma un argumento de expresiones y devuelve la primera subcade encontrada o -1 si
 * no se encuentra, ignora la bandera g, ya que no admite búsquedas globales
 * replace: Búsca y reemplaza una cadena
 * match: 
 */
console.log("JavaScript".search(/Script/ui));
console.log("Python".search(/Script/ui));
console.log("javascript".replace(/javascript/gi, "JavaScript"));

let times = "15 times 15 is 225";
// transforma los digitos en exadecimal
console.log(times.replace(/\d+/gu, n => parseInt(n).toString(16)));
let text = "7 plus 8 equals 15";
console.log(text.match(/\d+/g));
let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let text2 = "visit my blog https://es.wikipedia.org/wiki/Criba_de_Erat%C3%B3stenes";
let match = text2.match(url);
let fulUrl, protocol, host, path;
if(match != null) {
    fulUrl = match[0];
    protocol = match[1];
    host = match[2];
    path = match[3];
}

console.log(`fulUrl: ${fulUrl}`);
console.log(`protocol: ${protocol}`);
console.log(`host: ${host}`);
console.log(`path: ${path}`);
console.log(match.index);
console.log(match.groups);
console.log(match.input);

// Metodo Split: divide la cadena utilizando un separador
console.log("1, 2, 3".split(","));
console.log("1, 2, 3, \n4, 5".split(/\s*,\s*/));

/*
 * Dates and Times.
 * Es la API de javascript para manejar fechas y horas.
 */

let now = new Date();// fecha de la maquina
console.log(now);
let epoch = new Date(0);// milisegundos desde 1970
console.log(epoch);
// especifica la fecha [año], [enero], [día], [hora 3, 4, 5]
let century = new Date(2100, 0, 1, 2, 3, 4, 5);
console.log(century);
// UTC: Tiempo universal coordinado
let utc = Date.UTC(2100, 0, 1);// Devuelve el tiempo en milisegundos
console.log(utc);

let utc2 = new Date(Date.UTC(2100, 0, 1));// Convierte milisegundos a fecha
console.log(utc2);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMilliseconds);
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());
console.log(now.getTimezoneOffset());
console.log(now.getUTCDate());
console.log(now.getUTCDay());
console.log(now.getUTCFullYear());
console.log(now.getUTCHours());
console.log(now.getUTCMilliseconds());
console.log(now.getUTCMinutes());
console.log(now.getUTCMonth());
console.log(now.getUTCSeconds());

now.setFullYear(2100);
console.log(now);

//UTC puede variar segun el meridiano
let startTime = Date.now();
let endTime = Date.now();
console.log(startTime - endTime);

// Formato de fechas
let fechaText = now.toString();
console.log(fechaText);
console.log(now.toUTCString());
console.log(now.toISOString());// año-mes-dia horas:minustos:segundos.milisegundos
console.log(now.toLocaleString());
console.log(now.toDateString());
console.log(now.toLocaleString());
console.log(now.toLocaleTimeString());
// Transformación en cadena
let transform = Date.parse('2012/06/23');
console.log(transform);

/**
 * Excepciones
 * La clase error -> throw
 * Se crea el objeto, ubicación en la pila y se recomienda ubicarlo antes del throw
 */
class HTTPErrors extends Error {

    constructor(status, description, url) {
        super(`${status} ${description}: ${url}`);
        this.status = status;
        this.description = description;
        this.url = url;
    }

    get name() {
        return 'Http Error';
    }

}

let error = new HTTPErrors(404, 'Not Found', 'https://wwww.example.com.co.mx');
console.log(error.status);
console.log(error.name);
console.log(error.message);

/**
 * Serializaciones:
 * Transforma datos en bytes o caracteres para transmitirlos mediante los protocolos http
 * la mejor forma para serializar estructuras de datos es utilizando JSON
 * JSON permite manejar dtos del tipo cadenas, números, matrices y objetos javascript
 * No admite Maps, Sets, RegExp, Typed Arrays y Dates.
 * JSON.stringify(), con este metodo se puede serializar un JSON.
 * JSON.parse(...), para deserializar
 */
let object = {
    s: "",
    n: 0,
    a: [true, false, null]
};
let serializacion = JSON.stringify(object);
console.log(serializacion);
let deserializar = JSON.parse(serializacion);
console.log(deserializar);

console.log(JSON.stringify(object, null, 2));// recomendados dos espacios de sangria


/**
 * API de Internacionalización:
 * Nos permite formatear números, tambien con formatos de moneda
 */
let euro = Intl.NumberFormat("es", {style: "currency", currency: "EUR"});
console.log(euro.format(10));

let data = [0.05, 0.75, 1];
let formData = Intl.NumberFormat(
    undefined,
    {
        style: "percent",
        maximumFractionDigits: 1,
        maximumFractionDigits: 1
    }
).format;

console.log(data.map(formData));

// Número en Arabe
let arabic = Intl.NumberFormat("ar", {useGrouping: false}).format;
console.log(arabic(12345678910));

// Números Indios
let indi = Intl.NumberFormat("hi-IN-u-nu-deva").format;
console.log(indi(12345678910));

let date = new Date("2021-03-16T08:54:15Z");
console.log(date);
console.log(Intl.DateTimeFormat("en-US").format(date));
console.log(Intl.DateTimeFormat("fr-FR").format(date));
console.log(Intl.DateTimeFormat("es-ES").format(date));

// Deletrear fechas
let opts = {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric"
};
console.log(Intl.DateTimeFormat("en-US", opts).format(date));

// Dígitos del tiempo
let optsH = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    hourCicle: "h24"// h11: media noche 0, h12: media noche 12, h23: media noche 0 y 11 las 23, h24: media noche 24
};
console.log(Intl.DateTimeFormat("en-US", optsH).format(date));

// Otros Calendarios
console.log(Intl.DateTimeFormat("en-u-ca-hebrew", opts).format(date));

let opts2 = {
    year: "numeric",
    era: "narrow"
};
console.log(Intl.DateTimeFormat("en-u-ca-hebrew", opts2).format(date));
console.log(Intl.DateTimeFormat("en-u-ca-buddhist", opts2).format(date));
console.log(Intl.DateTimeFormat("en-u-ca-chinese", opts2).format(date));

/**
 * API de URL
 * Sirve para el manejo de las URL
 */
/*let url2 = new URL("https://example.com:8080/path/name?q=term#fragment");
console.log(url2.href);
console.log(url.origin);
console.log(url.protocol);
console.log(url.host);
console.log(url.hostName);
console.log(url.port);
console.log(url.pathName);
console.log(url.search);
console.log(url.hash);

let url3 = new URL("ftp://admin:1337!@ftp.example.com/");
console.log(url3.username);
console.log(url3.password);
console.log(url3.protocol);

let url4 = new URL("https://example.com");
url4.pathname = 'api/search';
url4.search = 'q=test';
console.log(url4.toString());

let url5 = new URL("https://example.com/search");
console.log(url5.search);
console.log(url5.searchParams.append("q", "test"));
console.log(url5.search);
url5.searchParams.set("q", "x");
console.log(url5.search);
console.log(url5.searchParams.get("q"));
console.log(url5.searchParams.has("q"));
console.log(url5.searchParams.getAll());
console.log(url5.searchParams.sort());
console.log(url5.search);
console.log([...url5.searchParams]);
*/
/**
 * Timers
 * Son funciones que solcitan al navegador que invoque cierta función después de cierto tiempo
 */

setTimeout(() => console.log("Ready..."), 1000);
setTimeout(() => console.log("Set..."), 2000);
setTimeout(() => console.log("Go..."), 3000);

let clock = setInterval(() => {
    console.clear();
    console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => clearInterval(clock), 10000);
 