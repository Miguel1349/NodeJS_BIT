class ErrorDeContrasena extends Error {

  constructor(codigo, descripcion, parametro) {
    super(`${codigo} - ${descripcion} : ${parametro} `);
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.parametro = parametro;
  }

}

function NuevaContrasena(newpss, numSeg) {
  let ContraseñaDeSeguridad = '';
  let user = "edgAdm7";
  // EXCEPCIONES
  if (newpss.length < 6) throw new ErrorDeContraseña(-2, "El String de entrada, mínimo tiene que tener 6 caracters", newpss);
  if (newpss.length > 10) throw new ErrorDeContraseña(-3, "El String de entrada, máximo tiene que tener 10 caracters", newpss);
  ContraseñaDeSeguridad = newpss;
  if (numSeg == null) throw new ErrorDeContraseña(-4, "el numero de seguridad es obligatorio", newpss);
  // ARRAYS TIPO
  let more = new Uint8Array([12 * numSeg, 234 / numSeg, 45 - numSeg]);
  const reducer = (accumulator, currentValue) => accumulator + currentValue+ blindNum.numero2();  //***************************************MODULE
    let sumTipo = more.reduce (reducer);
  ContraseñaDeSeguridad = ContraseñaDeSeguridad + sumTipo;
  //  SET MAP
  let setP = new Set();
  setP.add("Per");
  setP.add("Cam");
  setP.add("Per");
  setP.add("Cel");

  let setR = new Set();
  setR.add("Mna");
  setR.add("Jut");
  setR.add("Flo");
  setR.add("Roa");

  let MapDir = new Map();
  MapDir.set("1", setP);
  MapDir.set("2", setR);


  if (numSeg % 2 == 0) {
    let setA = MapDir.get("1");
    let myArr1 = Array.from(setA);
    ContraseñaDeSeguridad = ContraseñaDeSeguridad + myArr1[blindNum.numero1()]; //***************************************MODULE
  } else {
    let setB = MapDir.get("2");
    let myArr2 = Array.from(setB);
    ContraseñaDeSeguridad = ContraseñaDeSeguridad + myArr2[blindNum.numero1()]; //****************************************MODULE
  }
  // EXPRESIONES REGULARES
  if (numSeg % 5 == 0) {
    ContraseñaDeSeguridad = ContraseñaDeSeguridad.replace(/\d{3}/, ".").replace(/\w{2}/, "#");
  } else {
    ContraseñaDeSeguridad = ContraseñaDeSeguridad.replace(/\d{2}/, ";").replace(/\w{3}/, "!");
  }
  //FECHAS
  let now = new Date();    //  fecha de creacion de la contraseña
  let newMonth = now.getMonth() + 1;
  let fechaVencimiento = new Date(now);
  fechaVencimiento.setMonth(now.getMonth() + 3);   // fecha de vencimiento
  //INTER API
  let costoCOP = ContraseñaDeSeguridad.length * 1000;
  let cosrtUSD = costoCOP / 3557.75;

  let cosrtEUR = costoCOP / 4238.76;
  let euros = Intl.NumberFormat("es", { style: "currency", currency: "EUR" });
  let dolares = Intl.NumberFormat("es", { style: "currency", currency: "USD" });
  let pesos = Intl.NumberFormat("es", { style: "currency", currency: "COP" });
  let arabic = Intl.NumberFormat("ar",{useGrouping:false}).format;
  let indi = Intl.NumberFormat("hi-IN-u-nu-deva").format;
  //SERIALIZACION DEL OBJETO DE RESPUESTA
  let objResultadoSERZ = { Contraseña: ContraseñaDeSeguridad, fechas: [now, fechaVencimiento, fechaVencimiento.toUTCString()], valorMoneda: [pesos.format(costoCOP), dolares.format(cosrtUSD), euros.format(cosrtEUR)] };
  let serializacionRes = JSON.stringify(objResultadoSERZ);
  let deserializacionRes = JSON.parse(serializacionRes);
  //console.log("DESERIALIZACION \n");
  //console.log(deserializacionRes); // objeto
  //RESPOSE URL - API URL URL
  let RESPONSEurl = new URL("ftp://"+user+":"+ContraseñaDeSeguridad+"@ftp.NodeJs.com/");
  let urlApi = new URL("https://MDNnApi.com");
  let PGPpss = blindNum.initNum2(ContraseñaDeSeguridad);
  urlApi.searchParams.append("Historial",user);
  urlApi.searchParams.append("pssEncrip",PGPpss);
  // urlApi.searchParams.append("Costo",indi);    LA URL no acepta caracteres especiales
    urlApi.search;
  return "* Contraseña  Sugerida: " + ContraseñaDeSeguridad + "\n- Fecha de creacion: " + now + "\n-Fecha de vencimiento: " + fechaVencimiento + "\n-Fecha de vencimiento universal time" + fechaVencimiento.toUTCString() + "\n-------------------------------------\n TOTAL DE LA SUGERENCIA : su transaccion tiene un valor de : Pesos Colombianos -> " + pesos.format(costoCOP) + "\n                                                                valor en : Dolares ->" + dolares.format(cosrtUSD) + "\n                                                                valor en : Euros -> " + euros.format(cosrtEUR) +"\n                                                                En numeros arabicos  -> " + arabic(costoCOP) +"\n                                                                En numeros indios  -> " +indi(costoCOP)+"\n-------------------------------------\n SERIALIZACION DE LA RESPUESTA \n" + serializacionRes+"\n-------------------------------------\n **** URL DE CONEXION ****  \n "+RESPONSEurl.toString() +"\n " +urlApi.toString();
}
const modules = {};
function require(moduleName) {
    return modules[moduleName];
}
modules['blindNum.js'] = (function () {
    const exports = {};
    exports.numero1 = function ( ) { return Math.trunc(Math.random() * (3 - 0) + 0);};
    exports.numero2 = function ( ) { let m = blindNum.numero1(); return Math.trunc(Math.random() * (90 - 10) + 10);};
    exports.initNum = function ( ) { return Math.trunc(Math.random() * (9999 - 1) + 1)+blindNum.numero2();};
    exports.initNum2 = function (ps) { return ps.replace(/\w*/g,".")+blindNum.numero2() ;}; 
    return exports;
}());
const blindNum = require('blindNum.js');
setTimeout(()=>{console.log("Opcion 1...");} ,1000  );
setTimeout(()=>{console.log("Opcion 2...");} ,2000  );
let clock = setInterval(()=> {
try {
  console.log(NuevaContrasena('EdH.Yiopol',blindNum.initNum()));   //**********************************************************MODULE
} catch (error) {
  console.error("ErrorDeContraseña");
  console.error("codigo : " + error.codigo);
  console.error(error.descripcion);
  console.error("contraseña digitada: " + error.parametro);
  //console.error(error.stack);
}
},1000);  

setTimeout (()=>{clearInterval(clock);},3000);    // ************************************ TIMER
  
  
  