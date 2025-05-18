const express = require('express');
const Notification = require('../models/Notification');
const { sendEmailNotification } = require('../services/emailService');
const { sendSmsNotification } = require('../services/smsService');

const router = express.Router();

// Send Notification
router.post('/', async (req, res) => {
    const { userId, type, message } = req.body;

    if (!userId || !type || !message) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const notification = new Notification({ userId, type, message });

    try {
        await notification.save();

        if (type === 'email') {
            await sendEmailNotification(userId, message);
        } else if (type === 'sms') {
            await sendSmsNotification(userId, message);
        }

        res.status(201).json({ success: true, message: 'Notification sent successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get User Notifications
router.get('/:userId', async (req, res) => {
    try {
        const notifications = await Notification.find({ userId: req.params.userId });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
