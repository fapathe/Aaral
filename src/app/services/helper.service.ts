import { Injectable } from '@angular/core';
import { Device } from 'app/models/device';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  deviceList:any[]=[]

  constructor() { }
}
