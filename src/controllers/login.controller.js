import User from '../models/UserModel.js';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({
                message: 'Email incorrecto'
            });
        };

        if(!bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({
                message: 'Contraseña incorrecta'
            });
        }

        const token = jwt.sign({
            data: user
        }, process.env.PORT.TOKEN_SECRET || 'secret_token', {
            expiresIn: 60 * 60 * 24 * 30
        });

        res.json({
            user,
            token
        });

    }catch(error) {
        return res.status(400).json({
            message: 'Ocurrió un error',
            error
        })
    }
}