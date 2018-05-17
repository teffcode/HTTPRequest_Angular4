import { Injectable } from '@angular/core';
import { Api } from '../../class/api/api';
import { RequestHttpService } from '../../providers/request-http/request-http.service';

@Injectable()
export class UsersService {

  public UsersUrl = Api.API_USERS;

  constructor(public requestHttpService: RequestHttpService) { }

  getUsers(){
    let method = 'GET';
    let url = this.UsersUrl;
    let body;
    let queryParams;

    return this.requestHttpService.requestHttpToServer(method, url, body, queryParams);
  }
}
