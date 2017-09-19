import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresa.component'
import { EmpresaShowComponent } from './show/empresa-show.component'

import { LoggedInGuard } from '../../helper/LoggedInGuard';

const empresaRoutes: Routes = [
    { path : 'empresa', component: EmpresaComponent, canActivate: [LoggedInGuard]}, 
    { path: 'empresa/add', component: EmpresaShowComponent, canActivate: [LoggedInGuard]},
    { path: 'empresa/:id', component: EmpresaShowComponent, canActivate: [LoggedInGuard]}
];

export const empresaRouting: ModuleWithProviders = RouterModule.forChild(empresaRoutes);