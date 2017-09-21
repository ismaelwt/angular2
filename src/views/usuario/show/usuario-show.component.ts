import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from "@angular/platform-browser";
import { UsuarioService } from "../usuario.service";
import { Usuario } from "../../../shared/models/usuario";
import { Empresa } from "../../../shared/models/empresa";


@Component({
    selector: 'usuario-show-page',
    templateUrl: './usuario-show.component.html',
    styles: [`
    .cmp {
      padding:50px;  
      width: 100%;
    }
    .alert-password{
      font-size: 10px;
      color: rgb(236, 86, 86);;
      font-weight: bold;
    }

    .copy-link:hover {
      color: rgba(71, 67, 214, 0.91);
      cursor: pointer !important;
    }
    .div-copy {
      padding: 0;
      margin-top: 8px;
      margin-left: -6px;
      margin-right: -30px;
    }
  
  `]
})
export class UsuarioShowComponent implements OnInit {

    usuario: Usuario;
    empresa:Empresa;
    _message: string;
    queryParam: any;
    private dom: Document;
    edit: boolean = false;



    constructor(
        private router: Router,
        private service: UsuarioService,
        private activeRouter: ActivatedRoute,
        @Inject(DOCUMENT) dom: Document
    ) {
        this.dom = dom;
    }

    ngOnInit() {

        this.activeRouter.params.subscribe(params => {
            let usuarioId: string = params['id'];

            if (usuarioId) {
                this.edit = true;
                this.queryParam = { id: usuarioId };
                this.service.findById(usuarioId).subscribe(usuario => {
                    if (usuario) {
                        this.usuario = usuario
                        this.empresa = this.usuario.Empresa
                    }
                });
            }
            this.usuario = new Usuario();
        });
    }

    back() {
        this.router.navigate(['usuario']);
    }

    onSubmit() {
        this.service.save(this.usuario, this.queryParam).subscribe((res) => {
            if (res) {
                this.router.navigate(['usuario']);
            }
        });
    }
}