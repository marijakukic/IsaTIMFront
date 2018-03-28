import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
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

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
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

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public registrationService:RegistrationServiceService,
    private router: Router) { }

    ngOnInit(){

      // this.editForm = new FormGroup({
      //   ime: new FormControl(''),
      //   prezime: new FormControl(''),
      //   adresa: new FormControl(''),
      //   mestoStanovanja: new FormControl(''),
      // })

      this.korisnikId = this.registrationService.user.id;
        this.registrationService.getUserDetails(this.korisnikId)
          .subscribe(data=>{
            this.korisnik = data;
            console.log("Ispisi nesto za details front contr");
          })
    }

    saveEdit(){
      this.registrationService.registration(this.korisnik)
      .subscribe(data=>{
        console.log("Ispisi nesto za reg ponovo  front contr");
        console.log(data);
        this.router.navigate(['/homePageForRUser']);
      })
      
    }
    

    close(): void { 
      this.dialogRef.close();
    }

}
