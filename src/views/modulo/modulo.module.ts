import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModuloComponent } from './modulo.component'
import { ModuloShowComponent } from './show/modulo-show.component'
import { ModuloService } from './modulo.service'

import { moduloRouting } from './modulo.routing'

@NgModule({
  imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        moduloRouting
    ],
   declarations: [
        ModuloShowComponent,
        ModuloComponent
    ],
    exports: [ModuloComponent, ModuloShowComponent],
    providers: [
        ModuloService
    ]
})
export class ModuloModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ModuloModule,
            providers: [ModuloService]
        }
    }
}