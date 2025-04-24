/**
 * useAuth Hook.
 * This hook will provide functions for authentication and user state
 */

import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

export function useAuth() {
  return useContext(AuthContext);
}