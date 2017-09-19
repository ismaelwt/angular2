import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../views/login/login.component';
import { HomeComponent } from '../views/home/home.component';
import { LoggedInGuard } from '../helper/LoggedInGuard';
import { NotFoundComponent } from "../views/not-found/not-found.component";

const appRoutes: Routes = [
    { path : '', component: LoginComponent },
    { path : 'home', component: HomeComponent, canActivate: [LoggedInGuard]},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '/404'}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});