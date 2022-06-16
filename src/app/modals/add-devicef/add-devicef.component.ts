import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Device } from 'app/models/device';
import { DeviceService } from 'app/Services/device.service';
import { HelperService } from 'app/services/helper.service';




@Component({
  selector: 'app-add-devicef',
  templateUrl: './add-devicef.component.html',
  styleUrls: ['./add-devicef.component.css']
})
export class AddDevicefComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDevicefComponent>,
    public deviceService:DeviceService,
    @Inject(MAT_DIALOG_DATA) public data: Device,
    private helperService: HelperService,
    ) { }

  ngOnInit(): void {
  }
  
    addDevicef(){
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

  
  cancelf(){
    this.dialogRef.close(); 
  }

}
