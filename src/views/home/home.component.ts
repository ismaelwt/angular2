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
              <button type="button" class="btn btn-primary" (click)="goToCompany()">Cadastro de Empresas</button>
            </div>
            <div class="col-lg-4">
              <button type="button" class="btn btn-primary">Cadastro de Grupo de Modulos</button>
            </div>
            <div class="col-lg-4">
              <button type="button" class="btn btn-primary">Cadastro De Modulos</button>
            </div>
          </div>
          <br/>
          <div class="row">
          <div class="col-lg-4">
            <button type="button" class="btn btn-primary">Cadastro de Modulos</button>
          </div>
          <div class="col-lg-4">
            <button type="button" class="btn btn-primary">Cadastro de Programas</button>
          </div>
          <div class="col-lg-4">
            <button type="button" class="btn btn-primary">Cadastro de Usuarios</button>
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

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToCompany(){
    this.router.navigateByUrl('empresa');
  }
}