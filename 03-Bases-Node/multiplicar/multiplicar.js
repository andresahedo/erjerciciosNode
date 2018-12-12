const fs = require('fs');

crearArchivo = async (base) => {
	let nombreArchivo = `tabla-${base}.txt`
	let ruta = `./tablas/`;
	let data = '';

	for(let i=1;i<=10;i++){
		data += `${base} * ${i} = ${base*i}\n`;
	}
	
	fs.writeFile(`./tablas/tabla-${base}.txt`, data, 'utf8' ,(err) => {
			if (err) throw err;
		}
	);
	
	return nombreArchivo;
};

module.exports = {
	crearArchivo
}