import {UserService} from './service.ts';
import {UserMetadata} from '@app_types/api/user_metadata.ts';

export class UserController {
  constructor(private service: UserService) {}

  getSession = async () => await this.service.getSession();
  getUser = async () => await this.service.getUser();
  login = async (email: string, password: string) =>
    await this.service.login(email, password);
  register = async (
    email: string,
    password: string,
    phone: string,
    metadata: UserMetadata,
  ) => await this.service.register(email, password, phone, metadata);
}
