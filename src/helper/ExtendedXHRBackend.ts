import { Injectable } from '@angular/core';
import { Request, XHRBackend, BrowserXhr, ResponseOptions, XSRFStrategy, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExtendedXHRBackend extends XHRBackend {

  constructor(browserXhr: BrowserXhr, private baseResponseOptions: ResponseOptions, 
    xsrfStrategy: XSRFStrategy) {
    super(browserXhr, baseResponseOptions, xsrfStrategy);
  }

  createConnection(request: Request) {
    let token = localStorage.getItem('token');
    request.headers.set('x-access-token', `${token}`);
    request.headers.set('Content-Type', 'application/json');
    let xhrConnection = super.createConnection(request);
    xhrConnection.response = xhrConnection.response.catch((error: Response) => {
      if (error.status === 401 || error.status === 403) {
        console.log('acesso não autorizado');
        localStorage.removeItem('token');
      }
      return Observable.throw(error);
    });
    return xhrConnection;
  }
  
}