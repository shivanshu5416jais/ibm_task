import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShipmentService } from 'src/app/shipment.service';
import { Location } from '@angular/common'


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  allRes: any;
  constructor(private location: Location, private shipmentService: ShipmentService, private router: Router) {

  }
  res: any = { Shipments: {} }
  check: any = {
    'Ready for Backroom Pick': true,
    'Backroom Pick In Progress': true,
    'Ready for Customer Pickup': true,
    'Ready for Packing': true,
    'Packing In Progress': true,
    'Packed': true,
    'Shipped': true,
    'Cancelled': true

  };
  checkList: any = ['Ready for Backroom Pick', 'Backroom Pick In Progress', 'Ready for Customer Pickup', 'Packing In Progress', 'Packed', 'Shipped', 'Cancelled'];
  ngOnInit() {
    let history: any = this.location.getState();
    if (history) {
      this.res = JSON.parse(JSON.stringify(history['shipment']))
      this.allRes = JSON.parse(JSON.stringify(history['shipment']))
    }

  }

  gotodetail(shipment: any) {
    this.router.navigate(['/shipment/detail'], {
      state: { clickedShipment: shipment, shipment: this.res }
    })
  }
  open() {
    //
    const m = document.getElementById('myModal')
    if (m != null) {
      m.style.display = 'block'
      m.style.width = '50vw'
      m.style.margin = '0 auto';
    }
  }
  checkChange(event: any) {
    // this.checked.push(event)
  }
  reset() {
    this.check = {
      'Ready for Backroom Pick': true,
      'Backroom Pick In Progress': true,
      'Ready for Customer Pickup': true,
      'Ready for Packing': true,
      'Packing In Progress': true,
      'Packed': true,
      'Shipped': true,
      'Cancelled': true

    };
    // this.res = this.allRes
  }
  apply() {
    console.log(this.check);
    this.res.Shipments.Shipment = this.allRes.Shipments.Shipment.filter((x: any) => this.check[x["Status"]])
    this.res.Shipments.TotalNumberOfRecords = this.res.Shipments.Shipment.length
    const m = document.getElementById('myModal')
    if (m != null)
      m.style.display = 'none'
  }
  close() {
    const m = document.getElementById('myModal')
    if (m != null)
      m.style.display = 'none'
  }
  goback() {
    this.router.navigate(['/home'])
  }
}
