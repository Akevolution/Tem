import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Device } from "src/app/models/device.model";
import { DeviceJsonApiService } from "src/app/service/device-json.service";
import Dygraph from 'dygraphs';





@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    currentDate = new Date();

    
    deviceData: Device[] = [];

    @ViewChild('graph')
    graphdiv:ElementRef;


    constructor(
        private deviceJson:DeviceJsonApiService,
        private router: Router,
    ) {

    }
    ngOnInit() {
        this.deviceJson.getDevice().subscribe(data=>{
            this.deviceData = data;
        })
        
        new Dygraph(this.graphdiv.nativeElement,
            `Date,Temp,Humid
            20211015,20,53
            20211113,45,25
            20211212,50,65`,
            {
                fillGraph:true
            });
    }
    onClick() {

    }
}