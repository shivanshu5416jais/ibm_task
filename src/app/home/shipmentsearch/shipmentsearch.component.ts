import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShipmentService } from 'src/app/shipment.service';
import { NgForm } from '@angular/forms'
import { ResultComponent } from 'src/app/shipment/result/result.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-shipmentsearch',
  templateUrl: './shipmentsearch.component.html',
  styleUrls: ['./shipmentsearch.component.css']
})
export class ShipmentsearchComponent {


  constructor(private router: Router, private shipmentService: ShipmentService, translate: TranslateService) {
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
  showError: boolean = false;
  //reset form
  onReset(form: any) {
    form.resetForm();
  }
  onSearch(form: NgForm) {
    // getting all result then applying filter logic
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
      //navigating to detail screen if 1 record else navigate to result screen
      if (res.Shipments.TotalNumberOfRecords == 1)
        this.router.navigate(['/shipment/detail'], {
          state: { shipment: res }
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
