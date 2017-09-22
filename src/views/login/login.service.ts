import { Injectable } from '@angular/core';
import {
  Http, RequestOptions, Headers
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { Usuario } from '../../shared/models/usuario';
import { BaseUrl } from '../../base-url';

@Injectable()
export class LoginService {

  private url: string = new BaseUrl().getUrl() + 'auth/';

  private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loggedIn: Observable<boolean> = this._loggedIn.asObservable();


  constructor(private http: Http, private router: Router, private opt: RequestOptions) {
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return headers;
  }

  login(usuario: Usuario) {



    return this.http
      .post(this.url + 'login', JSON.stringify(usuario))
      .map((res) => {
        var token = res.headers.get('x-access-token');

        if (token) {

          this._loggedIn.next(true);
          localStorage.setItem('token', token);

          if (res.json()) {
            localStorage.setItem('username', res.json().nome);
            localStorage.setItem('email', res.json().email);
            localStorage.setItem('empresaId', res.json().EmpresaId);
            localStorage.setItem('root', res.json().Empresa._isRoot);
            this.router.navigate(['/home']);
          }
        } else {
          return res.json();
        }
      }).catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  logout() {
    return this.http
      .post(this.url + 'logout', {})
      .map((res) => {

        localStorage.clear();
        this._loggedIn.next(false);
        this.router.navigate(['']);

      }).catch((error: any) => Observable.throw(error.json() || 'Server error'))
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');

    if (token) {
      this._loggedIn.next(true);
    } else {
      this._loggedIn.next(false);
    }

    return this._loggedIn.getValue();
  }

}