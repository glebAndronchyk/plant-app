import {createClient} from '@supabase/supabase-js';
import {UserController, UserService} from './user';
import EncryptedStorage from 'react-native-encrypted-storage';
import {Database} from '@app_types/generated/api.ts';

const projectUrl = process.env.PROJECT_URL;
const apiKey = process.env.SUPABASE_ACCESS_TOKEN;

if (!projectUrl || !apiKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(projectUrl, apiKey, {
  auth: {
    storage: EncryptedStorage,
  },
});

export const {user} = {
  user: new UserController(new UserService()),
};
