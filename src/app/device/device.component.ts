import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'app/services/device.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDeviceComponent } from 'app/modals/add-device/add-device.component';
import { UpdateDeviceComponent } from 'app/modals/update-device/update-device.component';
import { HelperService } from 'app/services/helper.service';
import { UpdateDevicefComponent } from 'app/modals/update-devicef/update-devicef.component';
import { AddDevicefComponent } from 'app/modals/add-devicef/add-devicef.component';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  devicesMoving:any[]=[];
  devicesFixed:any[]=[];
  devices:any;
  isDeviceFIxed: boolean ;
  isDeviceMoved: boolean ;

  constructor(private deviceService:DeviceService,public dialog: MatDialog,
    private helperService: HelperService) { }

  ngOnInit(): void {
    console.log('device component is loaded');
    
    this.isDeviceMoved = true
    

    console.log('device component is loaded');
    this.deviceService.getDevices().subscribe(
      (data) => {
        // this.devices = data
        // this.helperService.deviceList=data;
        this.devices=this.helperService.deviceList=data; 

    
        this.devices.map(device => {
          //device.deviceType=="moving"? this.devicesMoving.push(device): this.devicesFixed.push(device)
          if(device.deviceType=="moving"){
            this.devicesMoving.push(device)
          }else if(device.deviceType=="fixe"){
            this.devicesFixed.push(device)
          }
        })
      }
    )
      
    }
   
    showFixedPad(){
      this.isDeviceFIxed = true
      this.isDeviceMoved = false
    }
    showMovePad(){
      this.isDeviceMoved = true
      this.isDeviceFIxed = false
    }
    
  
    addM(){
      const dialogRef = this.dialog.open(AddDeviceComponent,{width:"400px"});
  
      dialogRef.afterClosed().subscribe(result => {
        

        console.log(`Dialog result: ${result}`);
      });

    }
    addf(){
      const dialogRef = this.dialog.open(AddDevicefComponent,{width:"400px"});
  
      dialogRef.afterClosed().subscribe(result => {
        

        console.log(`Dialog result: ${result}`);
      });

    }

    goToUpdate(data){
      const dialogRef = this.dialog.open(UpdateDeviceComponent,{width:"400px",  data });
    
        dialogRef.afterClosed().subscribe(result => {
          
          console.log(`Dialog result: ${result}`);
          
        });
      }
    
      deleteDevice(device) {
     // console.log("deleteeee obj",device);
      
        this.deviceService.deleteDevice(device.deviceId).subscribe(Response => {
        // this.getAllDevices();
        console.log("Index",this.devicesMoving.indexOf(device));
        
        this.devicesMoving.splice(this.devicesMoving.indexOf(device),1)
        //this.devicesMoving.pop()
       
        //Update list after delete is successful
       // this.getAllPadlocks();
      }) ;
    } 

    goToUpdatef(data){
      
      const dialogRef = this.dialog.open(UpdateDevicefComponent,{width:"400px",  data });
    
        dialogRef.afterClosed().subscribe(result => {
          
          console.log(`Dialog result: ${result}`);
          
        });

    }
    deletef(device){
      this.deviceService.deleteDevice(device.deviceId).subscribe(Response => {
        // this.getAllDevices();
        console.log("Index",this.devicesFixed.indexOf(device));
        
        this.devicesFixed.splice(this.devicesFixed.indexOf(device),1)

      });
    
  }
}
