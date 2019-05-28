const teamSalaryPostRequestSchema = {
  title: 'teamSalaryRequestSchema',
  description: 'Array of objects (soccer players) to calculate salary.',
  type: 'array',
  minItems: 1,
  items: {
    type: 'object',
    required: ['nombre', 'nivel', 'goles', 'sueldo', 'equipo'],
    properties: {
      nombre: {
        description: 'Player Name.',
        type: 'string',
      },
      nivel: {
        description: 'Soccer Team Player Level.',
        type: 'string',
        enum: ['A', 'B', 'C', 'Cuauh'],
      },
      goles: {
        description: 'Number of goals during the month.',
        type: 'integer',
        minimum: 0,
      },
      sueldo: {
        description: 'Monthly Salary.',
        type: 'number',
        minimum: 0,
        multipleOf: 0.01,
      },
      bono: {
        description: 'Contract bonus.',
        type: 'number',
        minimum: 0,
        multipleOf: 0.01,
      },
      sueldo_completo: {
        type: 'null',
      },
      equipo: {
        description: 'Soccer Team Name.',
        type: 'string',
      },
    },
  },
};

module.exports = teamSalaryPostRequestSchema;
