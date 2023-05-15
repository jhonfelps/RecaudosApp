import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { recaudosComponent } from './recaudos/recaudos.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { FormComponent } from './recaudos/form.component';
import { DetalleComponent } from './recaudos/detalle/detalle.component';

const routes: Routes = [
  {path: '', redirectTo: '/recaudos', pathMatch: 'full'},
  {path: 'recaudos', component: recaudosComponent},
  {path: 'recaudos/page/:page', component: recaudosComponent},
  {path:'directiva', component:DirectivaComponent},
  {path: 'recaudos/form', component: FormComponent},
  {path: 'recaudos/form/:id', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
