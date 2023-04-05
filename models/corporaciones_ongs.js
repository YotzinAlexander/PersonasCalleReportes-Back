const {Schema, model } = require('mongoose');

const CorporacionesOngs = Schema({
    institucion: {
        type: String,
        require: true
    },
    municipio: {
        type: String,
        require: true
    },
    active:{
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }



},{
    versionKey: false,
    timestamps: true
})



module.exports = model('CoporacionesOng', CorporacionesOngs );
