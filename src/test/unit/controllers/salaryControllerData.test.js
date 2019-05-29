const teamData = [
  {
    nombre: 'Juan Perez',
    nivel: 'C',
    goles: 10,
    sueldo: 50000,
    bono: 25000,
    sueldo_completo: null,
    equipo: 'rojo',
  },
  {
    nombre: 'EL Cuauh',
    nivel: 'Cuauh',
    goles: 30,
    sueldo: 100000,
    bono: 30000,
    sueldo_completo: null,
    equipo: 'azul',
  },
  {
    nombre: 'Cosme Fulanito',
    nivel: 'A',
    goles: 7,
    sueldo: 20000,
    bono: 10000,
    sueldo_completo: null,
    equipo: 'azul',

  },
  {
    nombre: 'El Rulo',
    nivel: 'B',
    goles: 9,
    sueldo: 30000,
    bono: 15000,
    sueldo_completo: null,
    equipo: 'rojo',
  },
];

const teamBlueData = [
  {
    nombre: 'EL Cuauh',
    nivel: 'Cuauh',
    goles: 30,
    sueldo: 100000,
    bono: 30000,
    sueldo_completo: null,
    equipo: 'azul',
  },
  {
    nombre: 'Cosme Fulanito',
    nivel: 'A',
    goles: 7,
    sueldo: 20000,
    bono: 10000,
    sueldo_completo: null,
    equipo: 'azul',
  },
];

const playerData = {
  nombre: 'El Rulo',
  nivel: 'B',
  goles: 9,
  sueldo: 30000,
  bono: 15000,
  sueldo_completo: null,
  equipo: 'rojo',
};

const teamDataWrong = [
  {
    nombre: 'Juan Perez',
    nivel: 'c',
    goles: -10,
    sueldo: -50000,
    bono: '25000',
    sueldo_completo: 'null',
    equipo: 'rojo',
  },
];

export {
  teamData, teamBlueData, playerData, teamDataWrong,
};
