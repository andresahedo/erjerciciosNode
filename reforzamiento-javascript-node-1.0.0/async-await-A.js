
let empleados =[
	{
		id : 1,
		nombre : 'Andy'
	},
	{
		id : 2,
		nombre : 'Lupis'
	},
	{
		id : 3,
		nombre : 'Marianita'
	}
];

let salarios = [
	{
		id : 1,
		salario : 45000
	},
	{
		id : 2,
		salario : 7500
	}
];


let getEmpleadoById = async (id) => {
	let empleadoBD = empleados.find(empleado => empleado.id === id);	
	if(!empleadoBD){
		throw new Error(`No existe un empleado con el ID ${id}`);
	}
	return empleadoBD;
};


let getSalarioByEmpleado = (empleado) => {
	let salarioBD = salarios.find(salario => salario.id === empleado.id);
	if(!salarioBD){
		throw new Error(`El empleado ${empleado.nombre} no tiene salario`);
	}
	return {nombre:empleado.nombre, salario:salarioBD.salario};
}

let getInformacion = async(id) => {
	let empleado = await getEmpleadoById(id);
	let resultado = await getSalarioByEmpleado(empleado);
	return `El empleado ${resultado.nombre} tiene un salario de ${resultado.salario}`;
};

getInformacion(1)
	.then(mensaje => console.log(mensaje))
	.catch((err) => console.log(err));