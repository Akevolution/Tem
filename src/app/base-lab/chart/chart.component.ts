import { Component ,OnInit } from "@angular/core";
import * as Highcharts from 'highcharts';
import { webSocket} from 'rxjs/webSocket';
import { of ,Subscription} from 'rxjs';
import { concatMap ,delay } from 'rxjs/operators';


@Component({
    selector:'app-chart',
    templateUrl:'./chart.component.html',
    styleUrls:['./chart.component.scss']

})


export class ChartComponent implements OnInit{

    temp:any;
    temp$:Subscription;

    Highcharts: typeof Highcharts = Highcharts;

    chardata: any[] =[];

    chartOptions:any;
    // wss://ws.coincap.io/prices?assets=bitcoin
    subject = webSocket ('wss://ws.coincap.io/prices?assets=bitcoin')
    ngOnInit(){

        this.temp = this.subject.pipe(
            concatMap(item => of (item).pipe(delay(1000)))
        ).subscribe(data =>{
            this.temp=data;
            this.chardata.push(Number(this.temp.bitcoin))
            this.chartOptions ={
                series:[{
                    data: this.chardata,
                },],

                chart:{
                    type:"line",
                    zoomType:'x'
                },
                title :{
                    text:"Meter",
                },
            };
        })
        
    }
    
}