'use strict'

import Profile from '../models/ProfileModel.js';

export const createNewProfile = async(req, res) => {
        const { name, description, img } = req.body;

        try {
            const newProfile = await new Profile({ name, description, img });
            await newProfile.save();
            res.status(200).json(newProfile);
        } catch (error) {
            return res.status(500).json({
                message: 'Error', 
                error
            });
        };
};

export const getProfile = async(req, res) => {
    
    try {
        const profile = await Profile.find()
        res.json(profile)
    }catch (error) {
        return res.status(400).json({
            message: 'Error',
            error
        });
    };
};
