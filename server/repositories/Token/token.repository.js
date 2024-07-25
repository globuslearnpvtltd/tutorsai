
import mongoose from "mongoose";
import Token from '../../models/tokens/forgot.token.js'

export const createToken = async (userId, token) => {
    try {
        const token = new Token({
            userId: userId,
            token: token
        })
        return await token.save();
    } catch (error) {
        console.log(error);
    }
}



export const findToken = async (userId, token) => {
    try {
        return await Token.findOne({ userId: userId, token: token });
    } catch (error) {
        throw error;
    }
};