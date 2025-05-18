const twilio = require('twilio');

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSmsNotification = async (phoneNumber, message) => {
    try {
        await client.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phoneNumber
        });
        console.log('SMS sent successfully');
    } catch (error) {
        console.error('SMS sending failed:', error);
    }
};

module.exports = { sendSmsNotification };
