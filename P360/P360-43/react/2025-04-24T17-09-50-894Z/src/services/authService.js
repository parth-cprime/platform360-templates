/**
 * Auth Service.
 * This service will handle authentication using jwt
 * It will interact with the user database and provide jwt tokens for authentication
 */

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET;

export class AuthService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async login(username, password) {
    // Fetch user from the database
    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new Error('Authentication failed. User not found.');
    }

    // Check password
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      throw new Error('Authentication failed. Password is incorrect.');
    }

    // Create token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: 86400 // 24 hours
    });

    return { user, token };
  }
}