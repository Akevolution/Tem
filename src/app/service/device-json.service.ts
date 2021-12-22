import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';


@Injectable({
  providedIn: 'root'
})
export class DeviceJsonApiService {

  constructor( private http:HttpClient) { }

  getDevice(){
    const url=`http://localhost:3000/times`;
    return this.http.get<Device[]>(url);
  }
  
  editDevice(device: Device,id: number) {
    const url = `http://localhost:3000/times`;
    return this.http.put(`${url}/${id}`, device);

}
}