import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentsearchComponent } from './shipmentsearch/shipmentsearch.component';

const routes: Routes = [
  {
    path: '', component: ShipmentsearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
