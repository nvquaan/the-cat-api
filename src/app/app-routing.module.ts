import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnowComponent } from './components/snow/snow.component';

const routes: Routes = [
  {
    path: 'snow',
    component: SnowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
