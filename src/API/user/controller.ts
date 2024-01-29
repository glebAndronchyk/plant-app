import {UserService} from './service.ts';

export class UserController {
  constructor(private service: UserService) {}

  getSession = async () => await this.service.getSession();
  login = async (email: string, password: string) =>
    await this.service.login(email, password);
}
