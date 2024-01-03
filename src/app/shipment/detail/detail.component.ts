import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { ShipmentService } from 'src/app/shipment.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  detail: any = [];
  currentShipmentDetail: any = {}
  shipment: any
  showDetail = false
  res: any
  constructor(private location: Location, private shipmentService: ShipmentService, private router: Router) {
    let history: any = this.location.getState();
    if (history) {
      this.shipment = history['clickedShipment']
      this.res = history['shipment']
    }

    console.log(this.shipment);

  }
  ngOnInit() {

    this.shipmentService.getDetail(this.shipment.DeliveryMethod).subscribe(res => {
      console.log(res);
      this.detail = res.Shipment;
      // this.currentShipmentDetail = this.detail.filter((x: any) => x.OrderNo == this.shipment.OrderNo)
      // console.log(this.currentShipmentDetail);

    })

  }
  goBack() {
    if (this.res.Shipments.TotalNumberOfRecords != 1)
      this.router.navigate(['/shipment/result'], {
        state: {
          shipment: this.res
        }
      })
    else
      this.router.navigate(['/home'])
  }
  goHome() {
    this.router.navigate(['/home'])
  }
}
