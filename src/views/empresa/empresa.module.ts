import { NgModule, ModuleWithProviders }       from '@angular/core';
import { CommonModule }       from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    exports: [EmpresaComponent, EmpresaShowComponent],
    providers: [
        EmpresaService
    ]
    
  })
  export class EmpresaModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: EmpresaModule,
        providers: [ EmpresaService]
      }
  }
}