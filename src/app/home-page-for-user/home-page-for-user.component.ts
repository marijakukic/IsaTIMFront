import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';
import { TeatarServiceService } from '../teatar-service.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-home-page-for-user',
  templateUrl: './home-page-for-user.component.html',
  styleUrls: ['./home-page-for-user.component.css']
})
export class HomePageForUserComponent implements OnInit {

  korisnik: any;

  displayedColumns = ['id', 'naziv', 'adresa', 'promotivniOpis'];
  elementData: Bioskop[];
  dataSource = new MatTableDataSource<Bioskop>(ELEMENT_DATA);
  pozoriste:any;
  bioskop:any;
  dataSource2 = new MatTableDataSource<Bioskop>(ELEMENT_DATA);

  constructor(public registrationService:RegistrationServiceService,
              private teatarService:TeatarServiceService) { }

  ngOnInit() {

    this.korisnik = this.registrationService.user;


    this.teatarService.listaBioskopa()
      .subscribe(data=>{
        this.bioskop = data;
        console.log(this.bioskop);
        console.log(data.promotivniOpis) 
        console.log("Ispisi nesto");

        this.dataSource = new MatTableDataSource<Bioskop>(this.bioskop);
       
    })

    this.teatarService.listaPozorista()
    .subscribe(data=>{
      this.pozoriste = data;
      console.log(this.pozoriste);
      console.log("Ispisi nesto");

      this.dataSource2 = new MatTableDataSource<Bioskop>(this.pozoriste);
     
  })
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}


const ELEMENT_DATA: Bioskop[] = [
  {id: '1', naziv: '', adresa:'', promotivniOpis:''}
];
  
export interface Bioskop {
  id: string;
  naziv: string;
  adresa: string;
  promotivniOpis: string;
}
