import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ProfileSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    
    img: {
        type: String,
        required: [true, 'La imagen es necesaria']
    },

    description: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    }
});

export default model('Profile', ProfileSchema);