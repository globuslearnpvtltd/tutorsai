import nodemailer from 'nodemailer';

export default async function generateMail(email,otp){
    try {

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
            subject: "Verification Code",
            text: `Your OTP code is: ${otp}`
        };
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return otp;
    } catch (error) {
        console.error("Error sending email:", error);

    }
}