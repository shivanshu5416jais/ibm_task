import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShipmentService } from 'src/app/shipment.service';
import { Location } from '@angular/common'
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  allRes: any;
  constructor(private location: Location, private shipmentService: ShipmentService, private router: Router, translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
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
      if (this.res.Shipments.TotalNumberOfRecords > 10) {
        this.res.Shipments.Shipment = this.res.Shipments.Shipment.slice(0, 10)
      }
      this.allRes = JSON.parse(JSON.stringify(history['shipment']))
    }

  }
  //loading 10 data in UI a first 
  @HostListener("window:scroll", [])
  onScroll(): void {
    console.log("ssssss");

    if ((window.innerHeight + window.scrollY + 10) >= document.body.offsetHeight) {
      if (this.res.Shipments.TotalNumberOfRecords - this.res.Shipments.Shipment.length > 10)
        this.res.Shipments.Shipment.push(...this.allRes.Shipments.Shipment.slice(this.res.Shipments.Shipment.length, this.res.Shipments.Shipment.length + 10))
      else
        this.res.Shipments.Shipment = this.allRes.Shipments.Shipment

    }
  }
  //navigating to detail
  gotodetail(shipment: any) {
    this.router.navigate(['/shipment/detail'], {
      state: { clickedShipment: shipment, shipment: this.allRes }
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
  //resetting checkboxes model
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
  //applying filters
  apply() {
    this.res.Shipments.Shipment = this.allRes.Shipments.Shipment.filter((x: any) => this.check[x["Status"]])
    this.res.Shipments.TotalNumberOfRecords = this.res.Shipments.Shipment.length
    const m = document.getElementById('myModal')
    if (m != null)
      m.style.display = 'none'
  }
  //cllose modal
  close() {
    const m = document.getElementById('myModal')
    if (m != null)
      m.style.display = 'none'
  }
  goback() {
    this.router.navigate(['/home'])
  }
}
