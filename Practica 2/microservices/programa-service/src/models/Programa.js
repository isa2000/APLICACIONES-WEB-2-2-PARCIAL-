const { model, Schema } = require('mongoose');

const ProgramaSchema = Schema(   {
    descripcion:{
        type: String,
        required: [ true, 'La descripcion deben ser requerida'],
    }
}
);

module.exports = model('Programa', ProgramaSchema );
