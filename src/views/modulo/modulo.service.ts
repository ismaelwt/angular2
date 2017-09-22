import { Injectable } from '@angular/core';
import {
    Http, RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { Modulo } from '../../shared/models/modulo';
import { BaseUrl } from '../../base-url';

@Injectable()
export class ModuloService {

    private url: string = new BaseUrl().getUrl() + 'modulo';
    modulo: Modulo[];

    constructor(private http: Http, private router: Router, private opt: RequestOptions) {
    }

    save(modulo: Modulo, queryParams?: any) {
        let _url = new BaseUrl().getUrl() + 'modulo';

        if (queryParams) {
            for (var key in queryParams) {
                if (queryParams.hasOwnProperty(key)) {
                    _url += '?' + key + '=' + queryParams[key];
                }
            }
        } else {
            _url = new BaseUrl().getUrl() + 'modulo';
        }

        return this.http
            .post(_url, JSON.stringify(modulo))
            .map((res) => {
                if (res) {
                    return res.json();
                }
            }).catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }


    findAll(): Observable<Modulo[]> {

        let opt = new RequestOptions();
        opt.withCredentials = true;


        return this.http.get(this.url)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    findById(id: string): Observable<Modulo> {
        return this.http.get(this.url + '/' + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    deleteById(id: string): Observable<Modulo> {
        return this.http.delete(this.url + '/' + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}