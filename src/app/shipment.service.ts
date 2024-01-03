import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(private http: HttpClient) {

  }
  getResult() {
    return this.http.get<any>('assets/result.json')
  }
  getDetail(DM: any) {
    if (DM == "PICK")
      return this.http.get<any>('assets/detailPick.json')
    else
      return this.http.get<any>('assets/detailShp.json')
  }
}
