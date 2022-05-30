const Services = require('./Services.js');
const database = require('../models');

class ExperienciasServices extends Services {
    constructor() {
        super('Experiencias');
    }
}

module.exports = ExperienciasServices;