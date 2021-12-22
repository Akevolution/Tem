import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceLog } from '../models/devicelog.model';

@Injectable({
  providedIn: 'root'
})
export class DevicelogApiService {

  constructor( private http:HttpClient) { }

  getDeviceLog(){
    const url=`http://192.168.0.12:3000/dashboards`;
    return this.http.get<DeviceLog[]>(url);
  }
  
}
