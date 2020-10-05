import { DataSantiagoService } from './Service/data-santiago.service';
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
import { MaterialModule } from './material.module';
import { ReferenciaPersonalComponent } from './Component/referencia-personal/referencia-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosContactoComponent,
    FooterComponent,
    HistoriaLaboralComponent,
    HistoriaAcademicaComponent,
    InfoPersonalComponent,
    ReferenciaPersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [DataSantiagoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
