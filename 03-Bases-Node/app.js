
const { crearArchivo } = require('./multiplicar/multiplicar');
let argv = process.argv;

let base = argv[2].split('=')[1];


/*
crearArchivo(base)
	.then(archivo => console.log(`Se ha creado el archivo ${archivo}`))
	.catch(err => console.log(err));
*/
console.log(base);