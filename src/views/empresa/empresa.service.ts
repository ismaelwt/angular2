import { Injectable } from '@angular/core';
import {
    Http, RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { Empresa } from '../../shared/models/empresa';
import { BaseUrl } from '../../base-url';

@Injectable()
export class EmpresaService {

    private url: string = new BaseUrl().getUrl() + 'empresa';
    empresas: Empresa[];

    constructor(private http: Http, private router: Router, private opt: RequestOptions) {
    }

    save(empresa: Empresa) {

        return this.http
            .post(this.url, JSON.stringify(empresa))
            .map((res) => {
                if (res) {
                    return res.json();
                }
            }).catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

    findAll(): Observable<Empresa[]> {

        let opt = new RequestOptions();
        opt.withCredentials = true;


        return this.http.get(this.url)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    findById(id: string): Observable<Empresa> {
        return this.http.get(this.url + '/' + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    deleteById(id: string): Observable<Empresa> {
        return this.http.delete(this.url + '/' + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}