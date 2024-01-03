import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShipmentService } from 'src/app/shipment.service';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-shipmentsearch',
  templateUrl: './shipmentsearch.component.html',
  styleUrls: ['./shipmentsearch.component.css']
})
export class ShipmentsearchComponent {


  constructor(private router: Router, private shipmentService: ShipmentService) {

  }
  showError: boolean = false;
  onReset(form: any) {
    form.resetForm();
  }
  onSearch(form: NgForm) {
    console.log(form);
    this.shipmentService.getResult().subscribe(res => {

      Object.keys(form['value']).forEach(x => {
        if (form['value'][x]) {
          if (x == "ShipmentNo" || x == "OrderNo") {
            res.Shipments.Shipment = res.Shipments.Shipment.filter((y: any) => form['value'][x].toLowerCase().trim() == y[x].toLowerCase())
          }
          else {
            res.Shipments.Shipment = res.Shipments.Shipment.filter((y: any) => form['value'][x].toLowerCase().trim() == y['BillToAddress'][x].toLowerCase())

          }
          res.Shipments.TotalNumberOfRecords = res.Shipments.Shipment.length
        }
      })
      // console.log(res);

      if (res.Shipments.TotalNumberOfRecords == 1)
        this.router.navigate(['/shipment/detail'], {
          state: { shipment: res.Shipments.Shipment }
        })
      else if (res.Shipments.TotalNumberOfRecords)
        this.router.navigate(['/shipment/result'], {
          state: { shipment: res }
        })
      else
        this.showError = true
    }
    )
  }
}
