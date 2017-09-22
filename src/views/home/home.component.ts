import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  template: `
    <div class="cmp">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-4">
              <button type="button" class="btn btn-primary" *ngIf="root" (click)="goToCompany()">Cadastro de Empresas</button>
            </div>
            <div class="col-lg-4">
              <button type="button" class="btn btn-primary" (click)="goToUsers()">Cadastro de Usuarios</button>
            </div>
            <div class="col-lg-4">
              <button type="button" class="btn btn-primary" (click)="goToGrupoDeModulo()">Cadastro De Grupo de Modulos</button>
            </div>
          </div>
          <br/>
          <div class="row">
          <div class="col-lg-4">
            <button type="button" class="btn btn-primary" (click)="goToModulo()">Cadastro De Modulos</button>
          </div>
          <div class="col-lg-4">
            <button type="button" class="btn btn-primary">Cadastro de Programas</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cmp {
      padding:50px;  
      width: 100%;
    }
  `]
})
export class HomeComponent implements OnInit {

  root:boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
    
    let t = <boolean> localStorage.getItem('root');
      
     if (!t == false) {
       this.root = false;
     }
  }

  goToCompany(){
    this.router.navigateByUrl('empresa');
  }


  goToUsers(){
    this.router.navigateByUrl('usuario');
  }

  goToGrupoDeModulo(){
    this.router.navigateByUrl('grupo-de-modulo');
  }

  goToModulo() {
   this.router.navigateByUrl('modulo'); 
  }
}