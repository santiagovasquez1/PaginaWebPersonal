import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosContactoComponent } from './Component/datos-contacto/datos-contacto.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HistoriaLaboralComponent } from './Component/historia-laboral/historia-laboral.component';
import { HistoriaAcademicaComponent } from './Component/historia-academica/historia-academica.component';
import { InfoPersonalComponent } from './Component/info-personal/info-personal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DatosContactoComponent,
    FooterComponent,
    HistoriaLaboralComponent,
    HistoriaAcademicaComponent,
    InfoPersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
