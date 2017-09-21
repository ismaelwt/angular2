import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from "@angular/platform-browser";
import { EmpresaService } from "../empresa.service";
import { Empresa } from "../../../shared/models/empresa";
import { Guid } from "../../../helper/guid";
import { Usuario } from "../../../shared/models/usuario";

@Component({
  selector: 'empresa-show-page',
  templateUrl: './empresa-show.component.html',
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
export class EmpresaShowComponent implements OnInit {

  empresa: Empresa;
  usuario: Usuario;
  _message: string;
  private dom: Document;
  edit: boolean = false;



  constructor(
    private router: Router,
    private service: EmpresaService,
    private activeRouter: ActivatedRoute,
    @Inject(DOCUMENT) dom: Document
  ) {
    this.dom = dom;
  }

  ngOnInit() {

    this.activeRouter.params.subscribe(params => {
      let empresaId: string = params['id'];

      if (empresaId) {
        this.edit = true;
        this.service.findById(empresaId).subscribe(empresa => {
          if (empresa) {
            this.empresa = empresa
          }
        });
      }

      this.empresa = new Empresa();
      this.usuario = new Usuario();
    });
  }

  back() {
    this.router.navigate(['empresa']);
  }

  onSubmit() {

    if (this.empresa.email) {
      this._message = "Não se preocupe, o usuario e senha já estão sendo enviados ao e-mail que foi informado, '" + this.usuario.email + "'";
    }

    if (!this.empresa.usuario) {

      this.empresa.usuario = this.usuario;



      this.service.save(this.empresa).subscribe((res) => {
        if (res) {
          this.router.navigate(['empresa']);
        }
      });
    }
  }

  onChange() {

    let _email = 'admin@' + this.empresa.nome.trim();
    _email += '.com';

    while (_email.includes(' ')) {
      _email = _email.replace(' ', '_');
    }

    if (!_email.includes(' ')) {
      this.usuario.email = _email.toLowerCase().replace(' ', '_');
      this.usuario.password = new Guid().generateGuid();
    }
  }

  onCopy(id) {
    var element = null;
    try {
      element = this.dom.getElementById(id);
      element.disabled = false;
      element.select();
      this.dom.execCommand("copy");
      element.disabled = true;
      alert('Copiado');
    }
    finally {
      this.dom.getSelection().removeAllRanges();
      this.dom.getSelection().empty();
    }
  }
}