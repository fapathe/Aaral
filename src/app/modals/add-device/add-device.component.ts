//import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'app/services/device.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Device } from 'app/models/device';
import { Component, Inject, OnInit } from '@angular/core';
import { HelperService } from 'app/services/helper.service';


@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
  data:Device
  devices: Device[]=  [];
    constructor(
    public deviceService:DeviceService,
    public router:Router,public dialogRef: MatDialogRef<AddDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) public d: any,
    private helperService: HelperService
  )
   { 
    this.data=new Device;
    
  }

  ngOnInit(): void {
    console.log("tying to add");
    
  }

 
  addDevice(){
    console.log(this.data);
    //const device = new Device(this.data)
     this.deviceService.addDevice(this.data).subscribe((response) => {
      console.log("device added");
      
      // this.devices.splice(0,0,this.data)
      this.helperService.deviceList.push(this.data)
      console.log( this.helperService.deviceList);
      

      this.dialogRef.close(); 
    

    });
  }
  cancel(){
    this.dialogRef.close();
  }

}
