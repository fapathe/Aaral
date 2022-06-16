import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Device } from 'app/models/device';
import { DeviceService } from 'app/services/device.service';


@Component({
  selector: 'app-update-devicef',
  templateUrl: './update-devicef.component.html',
  styleUrls: ['./update-devicef.component.css']
})
export class UpdateDevicefComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateDevicefComponent>,public deviceService:DeviceService,
    @Inject(MAT_DIALOG_DATA) public data: Device) { }


  ngOnInit(): void {
  }
  updateDevice(){
    this.deviceService.updateDevice(this.data.deviceId,this.data).subscribe(response => {
      this.dialogRef.close();
    })
    

  }
  cancel(){
    this.dialogRef.close();
  }

}
