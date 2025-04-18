// Error handling middleware

module.exports = (err, req, res, next) => {
    res.status(500).send({ error: 'An error occurred, please try again later' });
};