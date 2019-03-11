import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DCAFormComponent } from './dca-form/dca-form.component';

const routes: Routes = [
	{ path: 'dca_app', component: DCAFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
