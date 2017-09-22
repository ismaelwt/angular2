import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GrupoDeModuloComponent } from './grupo-de-modulo.component';
import { GrupoDeModuloShowComponent } from './show/grupo-de-modulo-show.component';
import { GrupoDeModuloService } from './grupo-de-modulo.service';
import { grupoDeModuloRouting } from './grupo-de-modulo.routing';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        grupoDeModuloRouting
    ],
    declarations: [
        GrupoDeModuloShowComponent,
        GrupoDeModuloComponent
    ],
    exports: [GrupoDeModuloComponent, GrupoDeModuloShowComponent],
    providers: [
        GrupoDeModuloService
    ]

})
export class GrupoDeModulo {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: GrupoDeModulo,
            providers: [GrupoDeModuloService]
        }
    }
}