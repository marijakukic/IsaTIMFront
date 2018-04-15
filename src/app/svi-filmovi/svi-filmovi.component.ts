import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-svi-filmovi',
  templateUrl: './svi-filmovi.component.html',
  styleUrls: ['./svi-filmovi.component.css']
})
export class SviFilmoviComponent implements OnInit {

  korisnik: any;

  displayedColumns = ['tip', 'naziv', 'zanr', 'trajanje', 'imeReditelja', 'spisakGlumaca', 'operacije'];
  dataSource = new MatTableDataSource<any>();
  filmovi:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private registrationService:RegistrationServiceService) { }

  ngOnInit() {

    this.registrationService.getActiveUser().subscribe(data=>{
      this.korisnik = data;
    })

    this.registrationService.sviFilmovi().subscribe(data=>{
        this.filmovi = data;

        this.dataSource = new MatTableDataSource<any>(this.filmovi);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
       
    })


  }

  izmeniFilm(filmID) {
    this.router.navigate(['/izmeniFilm', filmID]);
  }

  dodajProjekciju(filmID) {
    this.router.navigate(['/projekcija', filmID]);
  }

}
