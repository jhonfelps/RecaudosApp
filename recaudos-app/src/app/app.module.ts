import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { recaudosComponent } from './recaudos/recaudos.component';
import { FormComponent } from './recaudos/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator/paginator.component';
import { recaudoService } from './recaudos/recaudo.service';
import { DirectivaComponent } from './directiva/directiva.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';
import { DetalleComponent } from './recaudos/detalle/detalle.component';
import { NgbdSortableHeader } from './directiva/sortable.directiva';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    recaudosComponent,
    DirectivaComponent,
    FormComponent,
    PaginatorComponent,
    DetalleComponent,
    NgbdSortableHeader,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [recaudoService,{ provide: 'DD.MM.YYYY', useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
