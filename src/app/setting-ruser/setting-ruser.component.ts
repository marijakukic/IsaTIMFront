import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatTableDataSource } from '@angular/material';
import { RegistrationServiceService } from '../registration-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-ruser',
  templateUrl: './setting-ruser.component.html',
  styleUrls: ['./setting-ruser.component.css']
})
export class SettingRuserComponent implements OnInit {

  ime: string;
  prezime: string;
  mestoStanovanja: string;
  adresa: string;
  korisnikId: number;

  imeS: string;
  prezimeS: string;

  korisnik:any;
  prijatelj:any;


  constructor(public dialog:MatDialog,public registrationService:RegistrationServiceService) { }

  ngOnInit() {

    this.registrationService.getActiveUser().subscribe(data=>{
      console.log(data.id);
      this.korisnikId = data.id;
    })
  }

  edit(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { ime: this.ime, prezime: this.prezime }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.prezime = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  korisnik : any;
  editForm : FormGroup;
  korisnikId: number;

  aktivan: string;
  lozinka1: string;
  lozinka2: string;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public registrationService:RegistrationServiceService,
    private router: Router) { }

    ngOnInit(){

      this.aktivan = "promenaPodataka";
      this.lozinka1 = "";
      this.lozinka2 = "";
      this.korisnik = {};

      this.registrationService.getActiveUser().subscribe(data=>{
        this.korisnikId = data.id;
        this.korisnik = data;      
      })

      
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



