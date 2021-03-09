class DefaultMap extends Map {// hereda de la clase Map
	constructor(defaultValue){
		super();// llama el costructor de la clase heredada
		this.defaultValue = defaultValue;// crea e inicializa la propiedad
	}
	
	get(key){
		if(this.has(key)){
			return super.get(key);// llama el metodo get de la clase heredada
		}else{
			return this.defaultValue;
		}
	}
}

class Histogram {
	constructor(){
		this.letterCount = new DefaultMap(0);// intancia un objeto de la clase heredada
		this.totalLetters = 0;// crea e inicializa la propiedad
		
	}
	
	add(text){
		text = text.replace(/\s/g, "").toUpperCase();// no conozco la expresión regular
		for(let character of text){// itera cada caracter de text
			let count = this.letterCount.get(character);// llama el metodo de la clase padre
			this.letterCount.set(character, count+1);// asigna un valor en el map
			this.totalLetters++;// incrementa esta propiedad en pasos 1
		}
	}
	
	toString(){
		let entries = [...this.letterCount];// no lo tengo claro, se que los tres puntos trae todas las propiedades del objeto que le sigue
		entries.sort((a, b)=>{
			if(a[1]===b[1]){
				return a[0] < b[0] ? -1 : 1;
			}else{
				return b[1] - a[1];
			}
		});
		
		for(let entry of entries){
			entry[1] = entry[1] / this.totalLetters * 100;
		}
		
		entries = entries.filter(entry => entry[1] >= 1);// filtra
		let lines = entries.map(// map transforma un objeto
	([l,n])=>`${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`);// no lo tengo claro
		return lines.join("\n");// join no lo conozco
	}
}

// esta funcion no la tengo clara
async function histogramFromStdin(){
	process.stdin.setEncoding("utf-8");
	let histogram = new Histogram();
	for await (let chunk of process.stdin) {
		histogram.add(chunk);
	}
	return histogram;
}


//llama la función de arriba e imprime el resultado.
histogramFromStdin().then(histogram => {
	console.log(histogram.toString());
});
