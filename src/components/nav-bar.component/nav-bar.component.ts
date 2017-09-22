import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../views/login/login.service';
import { Usuario } from '../../shared/models/usuario';
import { EmpresaService } from "../../views/empresa/empresa.service";

@Component({
  selector: 'nav-bar',
  template: `
    <div class="cls1">
      <header>
      <nav class="navbar navbar-default navbar-color">
        <div class="container-fluid">
          <div class="navbar-header user-nav">
            <a class="navbar-brand">
              <span>{{user.nome}}</span>
            </a>
            <a class="navbar-brand">
            <span (click)="logout()">Logout</span>
          </a>
          </div>
        </div>
      </nav>
      </header>
    </div>
  `,
  styles: [`

    .navbar-color {
      background-color: #a7a7a7 !important;
      border-color: transparent !important;
    }

    .user-nav{
      float:right;
      
    }
    .cls1 {
        position: fixed;
        left:0;
        width: 100%;
        top: 0;
        z-index: 10000;
    }
  `]
})
export class NavBarComponent implements OnInit { 
  user:Usuario;  
  constructor(private service: LoginService){}

    ngOnInit(){
      this.user = new Usuario();
      this.user.nome = localStorage.getItem('username');
    }

    logout() {
      this.service.logout();
    }
  }