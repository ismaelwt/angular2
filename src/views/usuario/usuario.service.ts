import { Injectable } from '@angular/core';
import {
    Http, RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { Usuario } from '../../shared/models/usuario';
import { BaseUrl } from '../../base-url';

@Injectable()
export class UsuarioService {

    private url: string = new BaseUrl().getUrl() + 'usuario';
    Usuarios: Usuario[];

    constructor(private http: Http, private router: Router, private opt: RequestOptions) {
    }

    save(Usuario: Usuario) {

        return this.http
            .post(this.url, JSON.stringify(Usuario))
            .map((res) => {
                if (res) {
                    return res.json();
                }
            }).catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

    findAll(): Observable<Usuario[]> {

        let opt = new RequestOptions();
        opt.withCredentials = true;


        return this.http.get(this.url)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    findById(id: string): Observable<Usuario> {
        return this.http.get(this.url + '/' + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    deleteById(id: string): Observable<Usuario> {
        return this.http.delete(this.url + '/' + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}