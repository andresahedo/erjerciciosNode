
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

let getEmpleadoById = (id,callback) => {
	
	let empleadoBD = empleados.find(empleado => empleado.id === id);
	
	if(!empleadoBD){
		callback(`No existe un empleado con el ID ${id}`);
	}else{
		callback(null,empleadoBD);
	}
};

let getSalarioByEmpleado = (empleado,callback) => {
	
	let salarioBD = salarios.find(salario => salario.id === empleado.id);
	
	if(!salarioBD){
		callback(`El empleado ${empleado.nombre} no tiene salario`);
	}else{
		let resultado = {nombre:empleado.nombre, salario:salarioBD.salario};
		callback(null, resultado);
	}
}


getEmpleadoById(
	2,
	(err,empleado) => {
		if(err){
			return console.log(err);
		}
		getSalarioByEmpleado(empleado, (err,resultado) =>{
				if(err){
					return console.log(err);
				}
				
				console.log(resultado);
			} 
		)
	} 
)