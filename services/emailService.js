const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendEmailNotification = async (email, message) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Notification Alert',
            text: message
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Email sending failed:', error);
    }
};

module.exports = { sendEmailNotification };
