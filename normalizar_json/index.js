const normalizr = require('normalizr');
const normalizar = normalizr.normalize;
const desnormalizar = normalizr.denormalize;

// Data
const empresa = {
	id: '1000',
	nombre: 'MiEmpresa SRL',
	gerente: {
		id: '2',
		nombre: 'Pablo',
		apellido: 'Perez',
		DNI: '15.567.456',
		direccion: 'Juncal 342',
		telefono: '155542456',
	},
	encargado: {
		id: '3',
		nombre: 'Juan ',
		apellido: 'Dominguez',
		DNI: '18456789',
		direccion: 'D.Alvarez 243',
		telefono: '154567890',
	},
	empleados: [
		{
			id: '1',
			nombre: 'Matias',
			apellido: 'Rodriguez',
			DNI: '20654345',
			direccion: 'Av Cordoba 4566',
			telefono: '1541436677',
		},
		{
			id: '2',
			nombre: 'Florencia',
			apellido: 'Lopez',
			DNI: '20784678',
			direccion: 'Av Santa Fe 3433',
			telefono: '156766556',
		},
		{
			id: '3',
			nombre: 'Gabriela',
			apellido: 'Perez',
			DNI: '20634455',
			direccion: 'Florida 1000',
			telefono: '156756346',
		},
		{
			id: '4',
			nombre: 'Miriam',
			apellido: 'Palavecino',
			DNI: '165864400',
			direccion: 'Mitre 1243',
			telefono: '1565734422',
		},
		{
			id: '5',
			nombre: 'Hernan',
			apellido: 'Solares',
			DNI: '19454788',
			direccion: 'Camarones 1578',
			telefono: '155633567',
		},
		{
			id: '6',
			nombre: 'Claudio',
			apellido: 'Casco',
			DNI: '2047864455',
			direccion: 'Puan 234',
			telefono: '1555673344',
		},
		{
			id: '7',
			nombre: 'Gabriel',
			apellido: 'Cardozo',
			DNI: '18567890',
			direccion: 'Vera 456',
			telefono: '1567453456',
		},
	],
};

const gerenteSchema = new normalizr.schema.Entity('gerente');
const encargadoSchema = new normalizr.schema.Entity('encargado');
const empleadosSchema = new normalizr.schema.Entity('empleados', {
	gerente: gerenteSchema,
	encargado: encargadoSchema
});

const empresaSchema = new normalizr.schema.Entity('empresa', {
	empleados: [empleadosSchema]
});

const data_normalizada = normalizar(empresa, empresaSchema);
console.log('Data normalizada', JSON.stringify(data_normalizada));

const data_denormalizada = desnormalizar(data_normalizada.result, empresaSchema, data_normalizada.entities);
console.log('Data desnormalizada', JSON.stringify(data_denormalizada));
console.log('Length data desnormalizada', JSON.stringify(data_denormalizada).length);