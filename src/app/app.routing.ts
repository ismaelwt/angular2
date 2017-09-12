import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../views/login/login.component';
import { HomeComponent } from '../views/home/home.component';
import { LoggedInGuard } from '../helper/LoggedInGuard';

const appRoutes: Routes = [
    { path : '', component: LoginComponent, pathMatch: 'full' },
    { path : 'home', component: HomeComponent, canActivate: [LoggedInGuard]},
    { path: '**', redirectTo: '' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});