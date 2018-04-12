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

  displayedColumns = ['ime', 'prezime', 'zahtev'];
  displayedColumnsPrijateljstvo = ['ime', 'prezime', 'operacija'];
  elementData: Korisnik[];
  korisnik:any;
  prijatelj:any;
  dataSource = new MatTableDataSource<Korisnik>(ELEMENT_DATA);
  dataSourcePrijateljstvo = new MatTableDataSource<Prijateljstvo>(ELEMENT_DATA_PRIJATELJSTVO);

  constructor(public dialog:MatDialog,public registrationService:RegistrationServiceService) { }

  ngOnInit() {

    this.registrationService.getActiveUser().subscribe(data=>{
      console.log(data.id);
      this.korisnikId = data.id;

      this.registrationService.listaPrijatelja(data.id).subscribe(
        data => {
          this.dataSourcePrijateljstvo = new MatTableDataSource<Prijateljstvo>(data);
        }
      )
  
      this.registrationService.getAllUsersExceptMe(data.id, this.imeS, this.prezimeS).subscribe(
        data => {
          this.dataSource = new MatTableDataSource<Korisnik>(data);
        }
      )

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

  posaljiZahtev(receiver) {
    this.registrationService.sendFriendRequest(this.korisnikId, receiver).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  prihvatiZahtev(decision, receiver) {
    this.registrationService.acceptOrRefuseFriendRequest(this.korisnikId, receiver, decision).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  obrisiPrijatelja(decision, receiver) {
    this.registrationService.acceptOrRefuseFriendRequest(this.korisnikId, receiver, decision).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  pretrazi(imeS, prezimeS) {
    if (imeS == "") {
      imeS = "undefined";
    }
    if (prezimeS == "") {
      prezimeS = "undefined";
    }
    this.registrationService.getAllUsersExceptMe(this.korisnikId, imeS, prezimeS).subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Korisnik>(data);
      }
    )
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

      this.registrationService.getActiveUser().subscribe(data=>{
        this.korisnikId = data.id;
        this.registrationService.getUserDetails(data.id).subscribe(data=>{
          this.korisnik = data;
          console.log("Ispisi nesto za details front contr");
        })       
      })

      
    }

    saveEdit(){
      this.registrationService.editUser(this.korisnik)
      .subscribe(data=>{
        console.log("Ispisi nesto za reg ponovo  front contr");
        console.log(data);
        this.router.navigate(['/homePageForRUser']);
        this.dialogRef.close();
      })
      
    }

    close(): void { 
      this.dialogRef.close();
    }

}

const ELEMENT_DATA: Korisnik[] = [
  {ime: '', prezime:''}
];

const ELEMENT_DATA_PRIJATELJSTVO: Prijateljstvo[] = [
  {receiver: null, prijatelji: null}
];
  

export interface Prijateljstvo {
  receiver: Korisnik;
  prijatelji: boolean;
}

export interface Korisnik {
  ime: string;
  prezime: string;
}

