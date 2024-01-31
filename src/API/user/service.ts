import {supabase} from '../index.ts';
import {UserMetadata} from '@app_types/api/user_metadata.ts';

export class UserService {
  getSession = async () => await supabase.auth.getSession();
  getUser = async () => await supabase.auth.getUser();
  login = async (email: string, password: string) =>
    await supabase.auth.signInWithPassword({email, password});
  register = async (
    email: string,
    password: string,
    phone: string,
    metadata: UserMetadata,
  ) => {
    const resp = await supabase.auth.signUp({
      email,
      password,
      phone,
      options: {data: {firstName: metadata.firstName}},
    });

    return resp;
  };
}
