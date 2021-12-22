import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BaselabRoutingModule } from "./base-lab-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LabComponent } from "./lab/lab.component";
import { MaterialModule } from "../material.module";
import { ChartComponent } from "src/app/base-lab/chart/chart.component";
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DashboardComponent,
        LabComponent,
        ChartComponent
    ],
    imports: [
        CommonModule,
        BaselabRoutingModule,
        MaterialModule,
        HighchartsChartModule,
        FormsModule,
        ReactiveFormsModule
    ]
})


export class BaselabModule { }