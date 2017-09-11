import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private login: LoginService, private router: Router) {}

  canActivate() {
      let isLoggedIn = this.login.isLoggedIn();
      if(!isLoggedIn){
          this.router.navigate(['']);
      }
      return isLoggedIn;
  }
}