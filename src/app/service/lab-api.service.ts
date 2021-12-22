import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lab } from '../models/lab.model';

@Injectable({
  providedIn: 'root'
})
export class LabApiService {
 

  constructor(
    private http: HttpClient,
  ) { }

  getLog() {
    const url = `http://192.168.0.12:3000/labs`;
    return this.http.get<Lab[]>(url);
  }

  editLog(lab: Partial<Lab>, id: any) {
    const url = `http://192.168.0.12:3000/labs`;
    return this.http.patch<{ id: string }>(`${url}/${id}`, lab);


  }
}
