import { createLearner, findUserByEmail } from "../../repositories/Learner/learner.repository.js";
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { NotFoundError, BadRequestError, CustomError } from '../../utils/error_handling/errors.js';
import { generateOTP } from "../../utils/helpers/generateotp.js";
import generateMail from "../../utils/helpers/sendmail.js";
import { createToken } from "../../repositories/Token/token.repository.js";


const randomToken = () => {
    return crypto.randomBytes(48).toString('hex');
}

export const signup = async (req, res, next) => {
    try {

        const { name, email, mobile, password } = req.body;
        const existingUser = await findUserByEmail(email);

        if (existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 404;
            throw error;
        } else {
            const otp = await generateOTP();
            const emails = await generateMail(email, otp);

            req.session.userData = { name, email, mobile, password, otp };
            console.log(req.session.userData);

            res.json({ success: 'OTP sent successfully' });
        }
    } catch (error) {
        next(error);
    }
}


export const verify_otp = async (req, res, next) => {
    try {
        const { otp } = req.body;
        console.log(req.session);

        if (req.session.userData?.otp !== otp) {
            return res.status(400).send({ message: 'Invalid OTP' });
        }

        const { name, email, mobile, password } = req.session.userData;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const existingUser = await createLearner(name, email, mobile, hashedPassword);
        if (!existingUser) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        delete req.session.userData;

        const token = jwt.sign({ _id: existingUser._id }, process.env.TOKEN_SECRET);

        res.send({ user: existingUser, token });
    } catch (error) {
        next(error);
    }
};




export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(password);
        const existingUser = await findUserByEmail(email);

        if (!existingUser) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }
        console.log(existingUser.password);
        console.log(password);
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        console.log(passwordMatch);
        if (!passwordMatch) {
            const error = new Error('Incorrect Password');
            error.statusCode = 404;
            throw error;
        }
        console.log("hai");
        const token = jwt.sign({ _id: existingUser._id }, process.env.TOKEN_SECRET);

        res.json({ user: existingUser, token });
    } catch (error) {
        next(error);
    }
}



export const forget_password_request = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await findUserByEmail(email);

        if (!user) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        } else {
            let randomtokens = randomToken();
            let createdToken = await createToken(user._id, randomtokens)
            const link = `${process.env.BASE_URL}/student/password-reset/${user._id}/${createdToken.token}`;

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                requireTLS: true,
                auth: {
                    user: process.env.USER_NAME,
                    pass: process.env.USER_PASSWORD
                }
            });
            const mailOptions = {
                from: process.env.USER_NAME,
                to: email,
                subject: "Reset Password",
                text: `We have recieved your request for reset password. Click ${link} to reset your password.`
            };
            const info = await transporter.sendMail(mailOptions);

            console.log("Email sent: " + info.response);

            return { success: "Email sent successfully" };
        }
    } catch (error) {
        next(error);
    }
}





export const forgotPassword = async (req, res, next) => {
    try {
        const { userId, token, password } = req.body;
        const getToken = await findToken(userId, token);
        if (!token) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        if (user && getToken) {
            user.password = hashedPassword
            await user.save();
            await getToken?.deleteOne();
        }
        res.json({user})
    } catch (error) {
        next(error);
    }
}



export const googleSignUp = async (req, res, next) => {
    try {
        const decodedData = jwt.decode(req.body.credential);
        const { name, email, jti } = decodedData;

        const existingUser = await findUserByEmail(email);

        if (existingUser) {
            const error = new Error('User Already Exist');
            error.statusCode = 404;
            throw error;
        } else {
            let password = ''
            let mobile = ''
            let newUser = await createLearner(name, email, mobile, password);
            const token = jwt.sign({ _id: newUser._id }, process.env.TOKEN_SECRET);
            res.send({ user: newUser, token });
        }
    } catch (error) {
        next(error);
    }
}



export const googleSignIn = async (req, res, next) => {
    try {
        const decodedData = jwt.decode(req.body.credential);
        const { name, email, jti } = decodedData;
        const existingUser = await findUserByEmail(email);

        if (!existingUser) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }
        const token = jwt.sign({ _id: existingUser._id }, process.env.TOKEN_SECRET);

        res.send({ user: existingUser, token });
    } catch (error) {
        next(error);
    }
}
