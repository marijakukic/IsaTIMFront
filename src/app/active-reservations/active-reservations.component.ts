import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-active-reservations',
  templateUrl: './active-reservations.component.html',
  styleUrls: ['./active-reservations.component.css']
})
export class ActiveReservationsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  korisnik: any;

  displayedColumns = ['naziv', 'tip', 'sala', 'nazivFilma', 'nazivMesta', 'otkazi'];
  dataSource = new MatTableDataSource<any>();
  reservations:any;

  constructor(private router: Router,
              public registrationService:RegistrationServiceService) { }

  ngOnInit() {

    this.registrationService.getActiveUser().subscribe(data=>{
      this.korisnik = data;
    })

    this.registrationService.aktivneRezervacije().subscribe(data=>{
        this.reservations = data;
        console.log(this.reservations);

        this.dataSource = new MatTableDataSource<any>(this.reservations);
        this.dataSource.sort = this.sort;
       
    })

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.registrationService.getActiveUser().subscribe(data=>{
      this.korisnik = data;
    })
  }

  otkazi(rezervacija) {
    this.registrationService.otkaziRezervaciju(rezervacija).subscribe(data=>{
      if (data.id == 0) {
        alert('Rezervaciju nije moguce otkazati 30min pre pocetka!');
      }
      else {
        this.refresh();
      }
    })
  }

  refresh() {
    this.registrationService.getActiveUser().subscribe(data=>{
      this.korisnik = data;
    })

    this.registrationService.aktivneRezervacije().subscribe(data=>{
        this.reservations = data;
        console.log(this.reservations);

        this.dataSource = new MatTableDataSource<any>(this.reservations);
        this.dataSource.sort = this.sort;
       
    })
  }

}
