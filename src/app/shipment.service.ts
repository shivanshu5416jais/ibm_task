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
  getDetail() {
    return this.http.get<any>('assets/detail.json')
  }
}
