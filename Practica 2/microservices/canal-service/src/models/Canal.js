const { model, Schema } = require('mongoose');

const CanalSchema = Schema(   {
    nombre:{
        type: String,
        required: [ true, 'El nombre deben ser requerido'],
       
    },
    id:{
        type: String,
        required: [ true, 'La identificacion deben ser requerida'],
    }
}
);

module.exports = model('Canal', CanalSchema );
