import { Injectable } from '@angular/core';
import {
    Http, RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { GrupoDeModulo } from '../../shared/models/grupo-de-modulo';
import { BaseUrl } from '../../base-url';

@Injectable()
export class GrupoDeModuloService {

    private url: string = new BaseUrl().getUrl() + 'grupo-de-modulo';
    GrupoDeModulos: GrupoDeModulo[];

    constructor(private http: Http, private router: Router, private opt: RequestOptions) {
    }

    save(grupoDeModulo: GrupoDeModulo, queryParams?: any) {
        let _url = new BaseUrl().getUrl() + 'grupo-de-modulo';

        if (queryParams) {
            for (var key in queryParams) {
                if (queryParams.hasOwnProperty(key)) {
                    _url += '?' + key + '=' + queryParams[key];
                }
            }
        } else {
            _url = new BaseUrl().getUrl() + 'grupo-de-modulo';
        }

        return this.http
            .post(_url, JSON.stringify(grupoDeModulo))
            .map((res) => {
                if (res) {
                    return res.json();
                }
            }).catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }


    findAll(): Observable<GrupoDeModulo[]> {

        let opt = new RequestOptions();
        opt.withCredentials = true;


        return this.http.get(this.url)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    findById(id: string): Observable<GrupoDeModulo> {
        return this.http.get(this.url + '/' + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    deleteById(id: string): Observable<GrupoDeModulo> {
        return this.http.delete(this.url + '/' + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}