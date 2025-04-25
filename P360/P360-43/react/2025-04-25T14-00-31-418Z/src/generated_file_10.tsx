const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});

const sendUrgentFeedbackEmail = async (feedback) => {
    const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: 'customer-service@example.com', // This should be dynamically determined based on the feedback category
        subject: 'Urgent Feedback Received',
        text: `An urgent feedback has been received: ${feedback.content}`
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendUrgentFeedbackEmail };