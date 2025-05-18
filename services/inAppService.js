const notifications = {};

exports.send = async ({ userId, message }) => {
  if (!notifications[userId]) {
    notifications[userId] = [];
  }
  notifications[userId].push({
    message,
    timestamp: new Date(),
    read: false,
  });
  console.log(`In-App Notification to ${userId}: ${message}`);
};
