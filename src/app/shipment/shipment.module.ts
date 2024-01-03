import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentRoutingModule } from './shipment-routing.module';
import { ResultComponent } from './result/result.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResultComponent,
    DetailComponent

  ],
  imports: [
    CommonModule,
    ShipmentRoutingModule,
    FormsModule
  ]
})
export class ShipmentModule { }
