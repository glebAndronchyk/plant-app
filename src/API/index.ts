import {createClient} from '@supabase/supabase-js';
import {UserController, UserService} from './user';
import EncryptedStorage from 'react-native-encrypted-storage';

const projectUrl = process.env.PROJECT_URL;
const apiKey = process.env.SUPABASE_API_KEY;

if (!projectUrl || !apiKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(projectUrl, apiKey, {
  auth: {
    storage: EncryptedStorage,
  },
});

export const {user} = {
  user: new UserController(new UserService()),
};
