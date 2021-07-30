import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FootComponent } from './foot/foot.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PresentacionComponent,
    HabilidadesComponent,
    ContactoComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
