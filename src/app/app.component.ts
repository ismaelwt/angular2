import { Component } from '@angular/core';
import { LoginService } from '../views/login/login.service'
import { EmpresaService } from "../views/empresa/empresa.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public user: LoginService, private empresaService: EmpresaService) { }  
}
