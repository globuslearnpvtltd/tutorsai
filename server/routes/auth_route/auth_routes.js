import { Router } from "express";
import { login, signup, verify_otp, forget_password_request, forgotPassword, googleSignUp, googleSignIn } from "../../controllers/auth_controller/auth.controller.js";

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/verify-otp',verify_otp);
router.post('/forget-password',forget_password_request);
router.post('/forgotPassword',forgotPassword);
router.post('/googleSignUp',googleSignUp);
router.post('/googleSignIn',googleSignIn)

export default router;