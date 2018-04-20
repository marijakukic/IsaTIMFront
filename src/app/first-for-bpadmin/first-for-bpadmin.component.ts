import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';
import { TeatarServiceService } from '../teatar-service.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogOverviewExampleDialog } from '../setting-ruser/setting-ruser.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-first-for-bpadmin',
  templateUrl: './first-for-bpadmin.component.html',
  styleUrls: ['./first-for-bpadmin.component.css']
})
export class FirstForBpadminComponent implements OnInit {

  
  korisnik : any;
  editForm : FormGroup;
  korisnikId: number;

  aktivan: string;
  lozinka1: string;
  lozinka2: string;

  constructor(private router: Router,
    public registrationService:RegistrationServiceService,
    private teatarService:TeatarServiceService,
    public dialog:MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    @Optional() public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) { }

  ngOnInit() {
    this.registrationService.getActiveUser().subscribe(data=>{
      this.korisnik = data;
    })


    this.aktivan = "promenaPodataka";
    this.lozinka1 = "";
    this.lozinka2 = "";
    this.korisnik = {};

  }

  odjaviSe() {
    this.registrationService.odjaviSe().subscribe(data=>{
      this.router.navigate(['/']);
    })
  }

  podesavanja() {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  saveEdit(){
    this.registrationService.editUser(this.korisnik).subscribe(data=>{
      this.dialogRef.close();
      location.reload();

    })
    
  }

  saveEditLozinka(korisnik: any){
    korisnik = this.korisnik;
    korisnik.lozinka = this.lozinka1;
    this.registrationService.editUser(korisnik).subscribe(data=>{
      console.log("Promenjena lozinka je: " + data.lozinka);
      this.dialogRef.close();
      location.reload();
    })
  }

  close(): void { 
    this.dialogRef.close();
  }

}
