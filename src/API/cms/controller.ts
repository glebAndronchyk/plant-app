import {CMSService} from './service.ts';

export class CMSController {
  constructor(private service: CMSService) {}

  getInfoCards = async () => this.service.getInfoCards();
}
