import { DeviceLog } from "./devicelog.model";

export interface Lab{
    _id?:String,
    name:String,
    boardname:String,
    temp:Temp;
    humid:Humid;
    currentTemp:DeviceLog;
    currentHumi:DeviceLog;

}

export interface Temp{
    high:number;
    low:number;
}

export interface Humid{
    high:number;
    low:number;
}