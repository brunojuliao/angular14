import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwindComponent } from './twind/twind.component';

const routes: Routes = [
  { path: 'twind', component: TwindComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
