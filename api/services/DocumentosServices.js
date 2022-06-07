const Services = require('./Services.js');
const database = require('../models');

class DocumentosServices extends Services {
    constructor() {
        super('Documentos');
    }
}

module.exports = DocumentosServices;