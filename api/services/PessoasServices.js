const Services = require('./Services.js');
const database = require('../models');

class PessoasServices extends Services {
    constructor() {
        super('Pessoas');
    }
}

module.exports = PessoasServices;