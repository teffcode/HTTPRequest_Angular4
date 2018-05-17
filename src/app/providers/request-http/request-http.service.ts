import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http/src/params';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestHttpService {

  /** 
   * Constructor Method
   * @param http
   */
  constructor(public http: HttpClient) { }

  /**
   * Method to HTTP request 
   * @param type -> request type
   * @param url 
   * @param body 
   * @param queryString -> aditional params
   */
  requestHttpToServer(type: string, url: string, body: any, queryString: HttpParams): Observable<any> {
    return this.http.request(type, url,
      {
        body: body,
        observe: "response",
        params: queryString
      })
  }

}
