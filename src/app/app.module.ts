import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from '../views/login/login.component';
import { HomeComponent } from '../views/home/home.component';

import { ExtendedXHRBackend } from '../helper/ExtendedXHRBackend';
import { LoggedInGuard } from '../helper/LoggedInGuard';
import { LoginService } from '../views/login/login.service';

//components
import { NavBarComponent } from '../components/nav-bar.component/nav-bar.component'



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
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouting,
    FormsModule
  ],
  providers: [
    LoginService,
    { provide: XHRBackend, useClass: ExtendedXHRBackend },
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
