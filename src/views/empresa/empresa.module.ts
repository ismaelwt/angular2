import { NgModule }       from '@angular/core';
import { CommonModule }       from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertService } from '../../components/toast.component/alert.service';
import { AlertComponent } from '../../components/toast.component/alert.directive';

import { EmpresaComponent } from './empresa.component';
import { EmpresaShowComponent } from './show/empresa-show.component';
import { EmpresaService } from './empresa.service';
import { empresaRouting } from './empresa.routing';



@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
       HttpModule,
      empresaRouting
    ],
    declarations: [
      EmpresaShowComponent,
      EmpresaComponent
    ],
  
    providers: [
        EmpresaService
    ]
    
  })
  export class EmpresaModule {
    static forRoot() {
      return {
        ngModule: EmpresaModule,
        providers: [ EmpresaService]
      }
  }
}