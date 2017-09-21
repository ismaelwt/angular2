import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component'
import { UsuarioShowComponent } from './show/usuario-show.component'

import { LoggedInGuard } from '../../helper/LoggedInGuard';

const usuarioRoutes: Routes = [
    { path : 'usuario', component: UsuarioComponent, canActivate: [LoggedInGuard]}, 
    { path: 'usuario/add', component: UsuarioShowComponent, canActivate: [LoggedInGuard]},
    { path: 'usuario/:id', component: UsuarioShowComponent, canActivate: [LoggedInGuard]}
];

export const usuarioRouting: ModuleWithProviders = RouterModule.forChild(usuarioRoutes);