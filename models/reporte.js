const { Schema, model } = require('mongoose');

const ReporteSchema = Schema ({

    folio_llamada: {
        type: String,
        require: true
    },
    fecha_llamada: {
        type: String,
        require: true
    },
    hora_llamada: {
        type: String,
        require: true
    },
    motivo_telefonista: {
        type: String,
        require: true
    },
    colonia: {
        type: String,
        require: true
    },
    calle: {
        type: String,
        require: true
    },
    entre_calle: {
        type: String,
        require: true
    },
    cordenada_y: {
        type: String,
        require: true
    },
    cordenada_x: {
        type: String,
        require: true
    },
    numero_telefono: {
        type: String,
        require: true
    },
    descripcion_llamada: {
        type: String,
        require: true
    },
    municipio: {
        type: String,
        require: true
    },
    rezonamiento: {
        type: String,
    },
    editado: {
        type: String,
        require: true
    },
    instituciones: {
        type: Array,
        // ref: 'Corporaciones'
    },
    razonamiento: {
        type: String,
    },
    estatus: {
        type: String,
    }
    
    

})


module.exports = model('Reporte', ReporteSchema); 




// "00105101000014346894",
// "01/01/2023",
// "21:56:28",
// "PERSONA EN SITUACION DE CALLE",
// "COL ASENTAMIENTOS HUMANOS",
// "LUCIO CABAÑAS",
// "RUBEN JARAMILLO",
// "23.99836682073914",
// "-104.67209874148939",
// "6182312449",
// "MARIA REPORTA QUE ESTA UNA MUJER DE ASPECTO INDIGENTE QUE SE QUEDA EN LA VIA PUBLICA, MENCIONA QUE ESTA EN UNA PUERTA BLANCA, YA TIENE MUCHO TIEMPO QUE SE QUEDA EN EL LUGAR. DEJO LLAMADA A GPO. ESMERALDA **SE GENERA REPORTE POR FALLAS DEL SISTEMA**  \nDENUNCIANTE: MARIA HERNANDEZ   6182312449 (CELULAR)",
// "DURANGO"