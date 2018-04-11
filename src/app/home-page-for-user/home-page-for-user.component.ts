import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';
import { TeatarServiceService } from '../teatar-service.service';
import { MatTableDataSource, MatPaginator, Sort, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-for-user',
  templateUrl: './home-page-for-user.component.html',
  styleUrls: ['./home-page-for-user.component.css']
})
export class HomePageForUserComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  korisnik: any;

  displayedColumns = ['naziv', 'adresa', 'promotivniOpis', 'rezervacija'];
  elementData: Bioskop[];
  dataSource = new MatTableDataSource<Bioskop>(ELEMENT_DATA);
  pozoriste:any;
  bioskop:any;
  dataSource2 = new MatTableDataSource<Bioskop>(ELEMENT_DATA);

  constructor(private router: Router,
              public registrationService:RegistrationServiceService,
              private teatarService:TeatarServiceService) { }

  ngOnInit() {

    this.registrationService.getActiveUser().subscribe(data=>{
      this.korisnik = data;
    })

    this.teatarService.listaBioskopa()
      .subscribe(data=>{
        this.bioskop = data;
        console.log(this.bioskop);
        console.log(data.promotivniOpis) 
        console.log("Ispisi nesto");

        this.dataSource = new MatTableDataSource<Bioskop>(this.bioskop);
        this.dataSource.sort = this.sort;
       
    })

    this.teatarService.listaPozorista()
    .subscribe(data=>{
      this.pozoriste = data;
      console.log(this.pozoriste);
      console.log("Ispisi nesto");

      this.dataSource2 = new MatTableDataSource<Bioskop>(this.pozoriste);
      this.dataSource2.sort = this.sort;
     
  })
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource2.sort = this.sort;
  }

  rezervisi(teatarId) {
    this.router.navigate(['/reservation', teatarId]);
  }



}


const ELEMENT_DATA: Bioskop[] = [
  {naziv: '', adresa:'', promotivniOpis:''}
];
  
export interface Bioskop {
  naziv: string;
  adresa: string;
  promotivniOpis: string;
}