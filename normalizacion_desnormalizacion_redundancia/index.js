const normalizr = require('normalizr');
const normalizar = normalizr.normalize;
const desnormalizar = normalizr.denormalize;
const util = require('util');

const holding = {
	id: "10000",
	empresas: [
	{
		id: "1000",
		nombre: "MiEmpresa SRL",
	gerente: {
		id: "2",
		nombre: "Pablo",
		apellido: "Perez",
		DNI: "15.567.456",
		direccion: "Juncal 342",
		telefono: "155542456",
	},
	encargado: {
		id: "3",
		nombre: "Juan",
		apellido: "Dominguez",
		DNI: "18456789",
		direccion: "D.Alvarez 243",
		telefono: "154567890",
	},
	empleados: [
		{
			id: "1",
			nombre: "Matias",
			apellido: "Rodriguez",
			DNI: "20654345",
			direccion: "Av Cordoba 4566",
			telefono: "1541436677",
		},
		{
			id: "2",
			nombre: "Florencia",
			apellido: "Lopez",
			DNI: "20784678",
			direccion: "Av Santa Fe 3433",
			telefono: "156766556",
		},
		{
			id: "3",
			nombre: "Gabriela",
			apellido: "Perez",
			DNI: "20634455",
			direccion: "Florida 1000",
			telefono: "156756346",
		},
		{
			id: "4",
			nombre: "Miriam",
			apellido: "Palavecino",
			DNI: "165864400",
			direccion: "Mitre 1243",
			telefono: "1565734422",
		},
		{
			id: "5",
			nombre: "Hernan",
			apellido: "Solares",
			DNI: "19454788",
			direccion: "Camarones 1578",
			telefono: "155633567",
		},
		{
			id: "6",
			nombre: "Claudio",
			apellido: "Casco",
			DNI: "2047864455",
			direccion: "Puan 234",
			telefono: "1555673344",
		},
		{
			id: "7",
			nombre: "Gabriel",
			apellido: "Cardozo",
			DNI: "18567890",
			direccion: "Vera 456",
			telefono: "1567453456",
		},
		],
		},
		{
			id: "1001",
			nombre: "TuEmpresa SRL",
			gerente: {
				id: "6",
				nombre: "Julian",
				apellido: "Alvarez",
				DNI: "20434567",
				direccion: "Rio Cuarto 345",
				telefono: "156745666"
		},
			encargado: {
				id: "5",
				nombre: "Lucio",
				apellido: "Gallardo",
				DNI: "20256876",
				direccion: "Montevideo 456",
				telefono: "1535674567"
		},
			empleados: [
			{
					id: "1",
					nombre: "Juan Cruz",
					apellido: "Rodriguez",
					DNI: "18444666",
					direccion: "Corrientes 5600",
					telefono: "156547321"
			},
			{
					id: "2",
					nombre: "Pablo",
					apellido: "Pochettino",
					DNI: "22465987",
					direccion: "San martín 2890",
					telefono: "155645987"
			},
			{
					id: "5",
					nombre: "Ana",
					apellido: "Piermarini",
					DNI: "20456345",
					direccion: "Repetto 1444",
					telefono: "156456789"
			},
			{
					id: "6",
					nombre: "Julia",
					apellido: "Moreno",
					DNI: "204564324",
					direccion: "Nazca 3456",
					telefono: "1566673344"
			},
			{
					id: "7",
					nombre: "Juana",
					apellido: "Martinez",
					DNI: "20764367",
					direccion: "Alvear 345",
					telefono: "1555667755"
			},
			{
					id: "8",
					nombre: "Mario",
					apellido: "Marango",
					DNI: "20998732",
					direccion: "Tanti 456",
					telefono: "154567894"
			}
		]
	},
	{
			id: "1002",
			nombre: "OtraEmpresa SRL",
			gerente: {
				id: "9",
				nombre: "Daniel",
				apellido: "Garrido",
				DNI: "20323456",
				direccion: "Laspiur 567",
				telefono: "1544556677"
		},
			encargado: {
				id: "8",
				nombre: "Matias",
				apellido: "Moreno",
				DNI: "32456786",
				direccion: "Trelles 1267",
				telefono: "156543789"
		},
			empleados: [
			{
					id: "4",
					nombre: "Keila",
					apellido: "Rodriguez",
					DNI: "30456789",
					direccion: "Trelles 1267",
					telefono: "156678943"
			},
			{
					id: "5",
					nombre: "Florencia",
					apellido: "Cerdeña",
					DNI: "26456432",
					direccion: "Acoyte 45",
					telefono: "153456789"
			},
			{
					id: "6",
					nombre: "Gerardo",
					apellido: "Domingo",
					DNI: "32456432",
					direccion: "Lobos 567",
					telefono: "154567890"
			},
			{
					id: "7",
					nombre: "Maria Luz",
					apellido: "Cantero",
					DNI: "20456743",
					direccion: "Tucuman 456",
					telefono: "1566666666"
			},
			{
					id: "9",
					nombre: "Martín",
					apellido: "Capo",
					DNI: "20556677",
					direccion: "Rivadavia 2560",
					telefono: "155555555"
			}
		]
	},
	{
		id: "1003",
		nombre: "TuEmpresa SRL",
		gerente: {
			id: "9",
			nombre: "Jose",
			apellido: "Garrido",
			DNI: "20323456",
			direccion: "Laspiur 567",
			telefono: "1544556677"
	},
		encargado: {
			id: "8",
			nombre: "Gabriela",
			apellido: "Moreno",
			DNI: "32456786",
			direccion: "Trelles 1267",
			telefono: "156543789"
	},
		empleados: [
		{
				id: "4",
				nombre: "Juana",
				apellido: "Rodriguez",
				DNI: "30456789",
				direccion: "Trelles 1267",
				telefono: "156678943"
		},
		{
				id: "5",
				nombre: "Clara",
				apellido: "Cerdeña",
				DNI: "26456432",
				direccion: "Acoyte 45",
				telefono: "153456789"
		},
		{
				id: "6",
				nombre: "Pablo",
				apellido: "Domingo",
				DNI: "32456432",
				direccion: "Lobos 567",
				telefono: "154567890"
		},
		{
				id: "7",
				nombre: "Augusto",
				apellido: "Cantero",
				DNI: "20456743",
				direccion: "Tucuman 456",
				telefono: "1566666666"
		},
		{
				id: "9",
				nombre: "Martína",
				apellido: "Capo",
				DNI: "20556677",
				direccion: "Rivadavia 2560",
				telefono: "155555555"
		}
	]
}
]
}

const empresaSchema = new normalizr.schema.Entity('empresa');
const holdingSchema = new normalizr.schema.Entity('holding', {
	empresas: [empresaSchema]
});

const data_normalizada = normalizar(holding, holdingSchema);

console.log('Antes: ', JSON.stringify(holding).length);
console.log('Después: ', JSON.stringify(data_normalizada).length);

const utils = (objeto) => {
	console.log(util.inspect(objeto, true, 12, true));
}

utils(data_normalizada);