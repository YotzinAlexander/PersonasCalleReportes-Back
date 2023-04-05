const {Schema, model} = require('mongoose');


const Razonamiento_corporacion = Schema({
    
    id_evento: {
        type: String,
    },
    id_corporacion: {
        type: String,
    },
    razonamiento: {
        type: String,
    },
    uType: {
        type: String,
    }

},{
    versionKey:false,
    timestamps: true
});




module.exports = model('Razonamiento', Razonamiento_corporacion);