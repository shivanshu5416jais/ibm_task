import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ShipmentsearchComponent } from './shipmentsearch/shipmentsearch.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShipmentsearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
