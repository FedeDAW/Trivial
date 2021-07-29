import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndiceComponent } from './indice/indice.component';
import { RouterModule, Route, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EtiquetasComponent } from './etiquetas/etiquetas.component';

//Las rutas definidas para cuando solicitan una pagina web que vayan al indice
const APP_ROUTES: Route[] = [
  { path: 'indice', component: IndiceComponent },
  { path: 'etiquetas/:tema', component: EtiquetasComponent },
  { path: 'preguntas/:tema/:etiqueta', component: PreguntasComponent },
  { path: '', redirectTo: '/indice', pathMatch: 'full' },
  { path: '**', redirectTo: '/indice', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, IndiceComponent, PreguntasComponent, EtiquetasComponent],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES),
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
