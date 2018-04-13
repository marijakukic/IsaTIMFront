import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { RegistrationServiceService } from '../registration-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prijatelji',
  templateUrl: './prijatelji.component.html',
  styleUrls: ['./prijatelji.component.css']
})
export class PrijateljiComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ime: string;
  prezime: string;
  mestoStanovanja: string;
  adresa: string;
  korisnikId: number;

  imeS: string;
  prezimeS: string;

  displayedColumns = ['ime', 'prezime', 'zahtev'];
  displayedColumnsPrijateljstvo = ['imeP', 'prezimeP', 'operacija'];
  korisnik:any;
  prijatelji:any;
  dataSource = new MatTableDataSource<any>();
  dataSourcePrijateljstvo = new MatTableDataSource<any>();

  constructor(public dialog:MatDialog,public registrationService:RegistrationServiceService) { }
  

  ngOnInit() {

    this.registrationService.getActiveUser().subscribe(data=>{
      console.log(data.id);
      this.korisnikId = data.id;

      this.registrationService.listaPrijatelja(data.id).subscribe(
        data => {
          this.prijatelji = data;
          this.dataSourcePrijateljstvo = new MatTableDataSource<any>(this.prijatelji);
          this.dataSourcePrijateljstvo.sort = this.sort;
          this.dataSourcePrijateljstvo.paginator = this.paginator;
        }
      )
  
      this.registrationService.getAllUsersExceptMe(data.id, this.imeS, this.prezimeS).subscribe(
        data => {
          this.dataSource = new MatTableDataSource<any>(data);
        }
      )

    })

  }

  ngAfterViewInit() {
    this.dataSourcePrijateljstvo.paginator = this.paginator;
    this.dataSourcePrijateljstvo.sort = this.sort;
    this.registrationService.getActiveUser().subscribe(data=>{
      this.korisnik = data;
      this.korisnikId = data.id;
    })

    

  }

  posaljiZahtev(receiver) {
    this.registrationService.sendFriendRequest(this.korisnikId, receiver).subscribe(
      data => {
        console.log(data);
        location.reload();
      }
    )
  }

  prihvatiZahtev(decision, receiver) {
    this.registrationService.acceptOrRefuseFriendRequest(this.korisnikId, receiver, decision).subscribe(
      data => {
        console.log(data);
        location.reload();
      }
    )
  }

  obrisiPrijatelja(decision, receiver) {
    this.registrationService.acceptOrRefuseFriendRequest(this.korisnikId, receiver, decision).subscribe(
      data => {
        console.log(data);
        location.reload();
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
        this.dataSource = new MatTableDataSource<any>(data);
      }
    )
  }

}


