import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const role = {
    values: ['ADMIN', 'USER'],
    message: '{VALUE} rol no valido'
};

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El email es necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Contraseña obligatoria']
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: 'USER', enum: role
    },
    status: {
        type: Boolean,
        default: true
    }
});

export default model('User', UserSchema);