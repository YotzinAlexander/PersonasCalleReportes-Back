const {Schema, model } = require('mongoose');

const UserSchema = Schema ({

    name: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    corporacion: {
        type: String    
    },
    uType: {
        type:String,
        require: true
    }

},{
    versionKey:false,
    timestamps: true
});

module.exports = model('User', UserSchema); 