import { Component, OnInit} from '@angular/core';
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
export class LoginComponent implements OnInit{
  
  user:Usuario;
  errorMessage:string = undefined;

  constructor(private service: LoginService){}

  ngOnInit(){
    this.user = new Usuario();
  }

  logar () {
    this.service.login(this.user).subscribe(res => {
      this.errorMessage = res;
    });
  }

  close(){
    this.errorMessage = undefined; 
  }
}