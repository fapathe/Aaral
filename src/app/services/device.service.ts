import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from 'app/models/device';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor( private http: HttpClient) { }
  getDevices(){
    return this.http.get<any>(environment.apiUrl+"device/all")
  }
  addDevice(device):Observable<Device>{
    return this.http.post<Device>(environment.apiUrl+"device/add" , device)
}
  getDevice(id):Observable<Device>{
    return this.http.get<Device>(environment.apiUrl+"device/find/"+id)
  }
  updateDevice(id,device):Observable<Device>{
    return this.http.put<Device>(environment.apiUrl+"device/update/"+id, device)
  }
  deleteDevice(id){
    return this.http.delete(environment.apiUrl +"device/delete" + '/'  +id)
  }
}

