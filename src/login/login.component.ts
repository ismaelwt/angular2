import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../shared/models/user';
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
  
  user:User;
  errorMessage:string = undefined;

  constructor(private service: LoginService){}

  ngOnInit(){
    this.user = new User();
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