import { NgModule } from "@angular/core";
import { Routes,RouterModule} from "@angular/router";
import { ChartComponent } from "./chart/chart.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LabComponent } from "./lab/lab.component";


const routes : Routes =[

    {
        path:'lab' , component:LabComponent
    },
    {
        path:'dashboard',component:DashboardComponent
    },
    {
        path:'chart',component:ChartComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class BaselabRoutingModule { }