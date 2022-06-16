import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Padlock } from 'app/models/padlock';
import { PadlockService } from 'app/Services/padlock.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-padlock',
  templateUrl: './add-padlock.component.html',
  styleUrls: ['./add-padlock.component.css']
})
export class AddPadlockComponent implements OnInit {
  data:any
  padlocks:any

  constructor(
    public padlockservice : PadlockService,
    public router:Router,public dialogRef: MatDialogRef<AddPadlockComponent>,
    @Inject(MAT_DIALOG_DATA) public d: any
  ) {
    this.data= new Padlock();
   }

  ngOnInit() {
    console.log('Specific padlock component is loaded');

  }

  getAllPadlocks(){
    this.padlockservice.getPadlocks().subscribe(response => {
     console.log(response);
     this.padlocks = response;
   }) 
 }
  submitForm() {
    console.log(this.data);
    
    this.padlockservice.addPadlock(this.data).subscribe((response) => {
      this.dialogRef.close();
      this.getAllPadlocks();
    });



}
cancel(){
  this.dialogRef.close();
}
}
