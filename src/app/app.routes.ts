import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/componentes/home/home.component';
import { ContratacionesComponent } from './componentes/contrataciones/contrataciones.component';


const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contrataciones', component: ContratacionesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing= RouterModule.forRoot(app_routes, {useHash: true});