// Util to configure security settings for the application

import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

export const securityConfig = () => {
    // Helmet configuration
    const helmetConfig = helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'"],
                styleSrc: ["'self'", "'unsafe-inline'"],
                imgSrc: ["'self'", "data:", "https:"],
                connectSrc: ["'self'"]
            }
        }
    });

    // Rate limiting configuration
    const rateLimitConfig = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // limit each IP to 100 requests per windowMs
    });

    // CORS configuration
    const corsConfig = cors({
        origin: process.env.ALLOWED_ORIGINS?.split(',') || [],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    });

    return { helmetConfig, rateLimitConfig, corsConfig };
};