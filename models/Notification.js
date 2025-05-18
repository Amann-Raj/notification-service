const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    type: { type: String, enum: ['email', 'sms'], required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ['sent', 'pending'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Notification', NotificationSchema);
