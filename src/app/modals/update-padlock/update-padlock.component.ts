import { Component, Inject, OnInit } from '@angular/core';
import { Padlock } from 'app/models/padlock';
import { PadlockService } from 'app/Services/padlock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddPadlockComponent } from '../add-padlock/add-padlock.component';

@Component({
  selector: 'app-update-padlock',
  templateUrl: './update-padlock.component.html',
  styleUrls: ['./update-padlock.component.css']
})
export class UpdatePadlockComponent implements OnInit {
  id:number;
  // data:Padlock

  constructor(public padlockService:PadlockService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public dialogRef: MatDialogRef<AddPadlockComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Padlock) {
    // this.data=new Padlock()
    
   }

  ngOnInit(): void {
    console.log('Fapathe Fallll',this.data.padlockId);
    
    
    
  }
  update() {
    //Update item by taking id and updated data object
    this.padlockService.updatePadlock(this.data.padlockId, this.data).subscribe(response => {
      this.dialogRef.close();
    })
  }
  cancel(){
    this.dialogRef.close();

  }

}
