import {supabase} from '../index.ts';

export class UserService {
  getSession = async () => await supabase.auth.getSession();
  getUser = async () => await supabase.auth.getUser();
  login = async (email: string, password: string) =>
    await supabase.auth.signInWithPassword({email, password});
  register = async (email: string, password: string, data: object) =>
    await supabase.auth.signUp({email, password, options: {data}});
}
