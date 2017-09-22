import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoDeModuloComponent } from './grupo-de-modulo.component'
import { GrupoDeModuloShowComponent } from './show/grupo-de-modulo-show.component'

import { LoggedInGuard } from '../../helper/LoggedInGuard';

const grupoDeModulosRoutes: Routes = [
    { path : 'grupo-de-modulo', component: GrupoDeModuloComponent, canActivate: [LoggedInGuard]}, 
    { path: 'grupo-de-modulo/add', component: GrupoDeModuloShowComponent, canActivate: [LoggedInGuard]},
    { path: 'grupo-de-modulo/:id', component: GrupoDeModuloShowComponent, canActivate: [LoggedInGuard]}
];

export const grupoDeModuloRouting: ModuleWithProviders = RouterModule.forChild(grupoDeModulosRoutes);