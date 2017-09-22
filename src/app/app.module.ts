import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, BrowserXhr } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from '../views/login/login.component';
import { HomeComponent } from '../views/home/home.component';

import { ExtendedXHRBackend } from '../helper/ExtendedXHRBackend';
import { LoggedInGuard } from '../helper/LoggedInGuard';
import { CustomBrowserXhr } from '../helper/CustomBrowserXhr';



import { LoginService } from '../views/login/login.service';


//modulos 
import { EmpresaModule } from "../views/empresa/empresa.module";
import { UsuarioModule } from "../views/usuario/usuario.module";
import { GrupoDeModulo } from "../views/grupo-de-modulo/grupos-de-modulo.module";
import { ModuloModule } from '../views/modulo/modulo.module';

//components
import { NavBarComponent } from '../components/nav-bar.component/nav-bar.component'

//not-found
import { NotFoundComponent } from "../views/not-found/not-found.component";
import { appRouting } from '../app/app.routing';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    appRouting,
    FormsModule,
    UsuarioModule.forRoot(),
    EmpresaModule.forRoot(),
    GrupoDeModulo.forRoot(),
    ModuloModule.forRoot()
  ],
  providers: [
    LoginService,
    { provide: XHRBackend, useClass: ExtendedXHRBackend },
    { provide: BrowserXhr, useClass: CustomBrowserXhr },
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
