
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


let getEmpleadoById = (id) => {
	
	return new Promise(
		(resolve, reject) => {
			let empleadoBD = empleados.find(empleado => empleado.id === id);	
			if(!empleadoBD){
				reject(`No existe un empleado con el ID ${id}`);
			}else{
				resolve(empleadoBD);
			}
	
		}
	);
	
};


let getSalarioByEmpleado = (empleado) => {
	return new Promise(
		(resolve,reject) =>{
			let salarioBD = salarios.find(salario => salario.id === empleado.id);
	
			if(!salarioBD){
				reject(`El empleado ${empleado.nombre} no tiene salario`);
			}else{
				let resultado = {nombre:empleado.nombre, salario:salarioBD.salario};
				resolve(resultado);
			}
		} 
	);
}

getEmpleadoById(4).then(
	empleado =>{
		console.log(empleado);
		return getSalarioByEmpleado(empleado);
	}
).then(
	resultado =>{
		console.log(resultado);
	}
).catch( err => console.log(err));
