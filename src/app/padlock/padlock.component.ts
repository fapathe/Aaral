import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddPadlockComponent } from 'app/modals/add-padlock/add-padlock.component';
import { UpdatePadlockComponent } from 'app/modals/update-padlock/update-padlock.component';
import { Padlock } from 'app/models/padlock';
import { PadlockService } from '../Services/padlock.service';


@Component({
  selector: 'app-padlock',
  templateUrl: './padlock.component.html',
  styleUrls: ['./padlock.component.css']
})
export class PadlockComponent implements OnInit {
  padlocks:any
  searchId ='';

  constructor(private padlockService:PadlockService ,private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('padlock component is loaded');
    // this.getAllPadlocks();
    this.padlockService.getPadlocks().subscribe(
      (data) => {
        this.padlocks=data;        
      },
      
      err => {
        console.log(err);      
      },
      () =>{
        console.log('all data is emited');
        
      }
    )

  }
  getAllPadlocks(){
    this.padlockService.getPadlocks().subscribe(response => {
     console.log(response);
     this.padlocks = response;
   }) 
 }

  add(){
      const dialogRef = this.dialog.open(AddPadlockComponent,{width:"400px"});
  
      dialogRef.afterClosed().subscribe(result => {
        
        console.log(`Dialog result: ${result}`);
      });
    }

    delete(item) {
      console.log(item);
      
      this.padlockService.deletePadlock(item.padlockId).subscribe(Response => {
       
        //Update list after delete is successful
        this.getAllPadlocks();
      }) ;
    }
  

  goToUpdate(data){
    const dialogRef = this.dialog.open(UpdatePadlockComponent,{width:"400px",  data });
  
      dialogRef.afterClosed().subscribe(result => {
        
        console.log(`Dialog result: ${result}`);
        
      });
    }

  }
 


