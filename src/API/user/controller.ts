import {UserService} from './service.ts';

export class UserController {
  constructor(private service: UserService) {}

  getSession = async () => await this.service.getSession();
  getUser = async () => await this.service.getUser();
  login = async (email: string, password: string) =>
    await this.service.login(email, password);
  register = async (email: string, password: string, data: object) =>
    await this.service.register(email, password, data);
}
