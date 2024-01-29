import {supabase} from '../index.ts';

export class UserService {
  getSession = async () => await supabase.auth.getSession();
  login = async (email: string, password: string) =>
    await supabase.auth.signInWithPassword({email, password});
}
