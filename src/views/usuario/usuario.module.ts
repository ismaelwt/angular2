import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsuarioComponent } from './usuario.component';
import { UsuarioShowComponent } from './show/usuario-show.component';
import { UsuarioService } from './usuario.service';
import { usuarioRouting } from './usuario.routing';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        usuarioRouting
    ],
    declarations: [
        UsuarioShowComponent,
        UsuarioComponent
    ],
    exports: [UsuarioComponent, UsuarioShowComponent],
    providers: [
        UsuarioService
    ]

})
export class UsuarioModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UsuarioModule,
            providers: [UsuarioService]
        }
    }
}