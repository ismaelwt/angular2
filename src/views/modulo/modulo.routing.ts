import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuloComponent } from './modulo.component'
import { ModuloShowComponent } from './show/modulo-show.component'

import { LoggedInGuard } from '../../helper/LoggedInGuard';

const moduloRoutes: Routes = [
    { path : 'modulo', component: ModuloComponent, canActivate: [LoggedInGuard]}, 
    { path: 'modulo/add', component: ModuloShowComponent, canActivate: [LoggedInGuard]},
    { path: 'modulo/:id', component: ModuloShowComponent, canActivate: [LoggedInGuard]}
];

export const moduloRouting: ModuleWithProviders = RouterModule.forChild(moduloRoutes);