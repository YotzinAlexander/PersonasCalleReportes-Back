const {Schema, model} = require('mongoose');

const ReporteAsignaSchema = Schema ({
    

    id_evento:{
        type: String
    },
    id_corporacion: {
        type: String
    },
    status: {
        type: String
    }


},{
    versionKey:false,
    timestamps: true
});


module.exports = model('ReporteAsigna', ReporteAsignaSchema);