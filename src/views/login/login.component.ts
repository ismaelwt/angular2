import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http } from '@angular/http';
import { Usuario } from '../../shared/models/usuario';
import { LoginService } from './login.service';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styles: [`
    .login-page {
      padding: 50px !important;
      overflow:hidden;
    }
    
    input .form-control:focus {
      border-color: red;
    }
  `]
})
export class LoginComponent implements OnInit {

  user: Usuario;
  location: any;
  errorMessage: string = undefined;

  constructor(private service: LoginService, private activeRoute:ActivatedRoute) {}

  ngOnInit() {
    this.user = new Usuario();

    /*if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        console.log(position.coords);
      });
    }*/
  }

  logar() {
    this.service.login(this.user).subscribe(res => {
      this.errorMessage = res;
    });
  }

  close() {
    this.errorMessage = undefined;
  }
}