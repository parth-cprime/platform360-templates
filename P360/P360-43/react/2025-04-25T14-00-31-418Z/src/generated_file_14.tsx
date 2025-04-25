require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { helmet, rateLimit, cors } = require('./middleware/securityConfig');
const authenticateJWT = require('./middleware/auth');
const { submitFeedback } = require('./controllers/feedbackController');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(helmet);
app.use(rateLimit);
app.use(cors);

app.post('/api/feedback', authenticateJWT, submitFeedback);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));