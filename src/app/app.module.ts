import { BrowserModule } from '@angular/platform-browser';
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


//components
import { NavBarComponent } from '../components/nav-bar.component/nav-bar.component'

//not-found
import { NotFoundComponent } from "../views/not-found/not-found.component";
import { AlertComponent } from '../components/toast.component/alert.directive'
import { AlertService } from '../components/toast.component/alert.service'



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
    NotFoundComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouting,
    FormsModule,
    EmpresaModule
  ],
  providers: [
    LoginService,
    AlertService,
    { provide: XHRBackend, useClass: ExtendedXHRBackend },
    { provide: BrowserXhr, useClass: CustomBrowserXhr },
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
