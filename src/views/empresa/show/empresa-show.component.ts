import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from "@angular/platform-browser";
import { EmpresaService } from "../empresa.service";
import { Empresa } from "../../../shared/models/empresa";
import { ValidationsMessage } from "../../../shared/models/validations-message";
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
  _queryParams: any;


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
        this._queryParams = { id: empresaId };
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

    if(this.beforeSave()) {

      if (!this.empresa.usuario) {

      this.empresa.usuario = this.usuario;

      this.service.save(this.empresa, this._queryParams).subscribe((res) => {
        if (res) {
          this.router.navigate(['empresa']);
        }
      });
    }

    }

    /*if (this.empresa.email) {
      this._message = "Não se preocupe, o usuario e senha já estão sendo enviados ao e-mail que foi informado, '" + this.usuario.email + "'";
    }*/
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


  beforeSave() {
        
        let mensagens = new Array<ValidationsMessage>();

        if(!this.empresa.nome){
          let validation = new ValidationsMessage('Favor inserir um nome', true);
          mensagens.push(validation);
        }
        if(!this.empresa.cnpj){
         let validation = new ValidationsMessage('Favor inserir um cnpj', true);
          mensagens.push(validation); 
        }
        if(!this.empresa.cidade){
           let validation = new ValidationsMessage('Favor inserir uma cidade', true);
          mensagens.push(validation);  
        }
        if(!this.empresa.endereco){
          let validation = new ValidationsMessage('Favor inserir um endereço', true);
          mensagens.push(validation); 
        }
        if(!this.empresa.cep){
          let validation = new ValidationsMessage('Favor inserir um cep', true);
          mensagens.push(validation); 
        }
        if(!this.empresa.bairro){
          let validation = new ValidationsMessage('Favor inserir um bairro', true);
          mensagens.push(validation); 
        }
        if(!this.empresa.numero){
           let validation = new ValidationsMessage('Favor inserir um numero', true);
          mensagens.push(validation); 
        }
        if(!this.empresa.ddd){
          let validation = new ValidationsMessage('Favor inserir um DDD', true);
          mensagens.push(validation); 
        }
        if(!this.empresa.telefone){
          let validation = new ValidationsMessage('Favor inserir um Telefone', true);
          mensagens.push(validation); 
        }
        if(!this.empresa.email){
          let validation = new ValidationsMessage('Favor inserir um email', true);
          mensagens.push(validation); 
        }
        if(!this.empresa.complemento){
           let validation = new ValidationsMessage('Favor inserir um complemento', true);
          mensagens.push(validation); 
        }

        console.log(mensagens);

        if (mensagens.length > 0) {
          return false;
        }else {
          return true;
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