import UserModel from '../models/UserModel.js';

import bcrypt from 'bcrypt';
const saltrounds = 10;

export const createNewUser = async (req, res) => {

    const body = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    console.log(body)

    body.password = bcrypt.hashSync(req.body.password, saltrounds);

    try{
        const newUser = await User.create(body);
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error){
        return res.status(500).json({
            message: 'Ocurrio un error',
            error
        });
    }
};