import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Device } from 'app/models/device';
import { DeviceService } from 'app/Services/device.service';


@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {
  

  constructor(public dialogRef: MatDialogRef<UpdateDeviceComponent>,
    public deviceService:DeviceService,
    @Inject(MAT_DIALOG_DATA) public data: Device) { }

  ngOnInit(): void {
    console.log('Fapathe Fallll',this.data.deviceId);
    
  }
  update() {
    //Update item by taking id and updated data object
    this.deviceService.updateDevice(this.data.deviceId,this.data).subscribe(response => {
      this.dialogRef.close();
    })
    
  }
  cancel(){
    this.dialogRef.close();

  }


  }


