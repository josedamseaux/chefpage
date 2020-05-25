import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MatButtonModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

// rutas

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './componentes/home/home.component';
import { ContratacionesComponent } from './componentes/contrataciones/contrataciones.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContratacionesComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    app_routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
