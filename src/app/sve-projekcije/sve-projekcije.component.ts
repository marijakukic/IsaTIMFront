import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-sve-projekcije',
  templateUrl: './sve-projekcije.component.html',
  styleUrls: ['./sve-projekcije.component.css']
})
export class SveProjekcijeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  korisnik: any;

  displayedColumns = ['naziv', 'zanr', 'datum', 'operacije'];
  dataSource = new MatTableDataSource<any>();
  projekcije: any;

  teatarID: number;

  constructor(private router: Router,
              public registrationService:RegistrationServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.teatarID = parseInt(this.route.snapshot.paramMap.get('teatarID'));

    this.registrationService.getActiveUser().subscribe(data=>{
      this.korisnik = data;
    })

    this.registrationService.listaAktivnihProjekcijaUTeatru(this.teatarID).subscribe(data=>{
        this.projekcije = data;
        console.log(this.projekcije);

        this.dataSource = new MatTableDataSource<any>(this.projekcije);
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

  izmena(projekcijaId) {
    this.registrationService.omogucenaIzmena(projekcijaId).subscribe(data=>{
      if (data === 1) {
        this.router.navigate(['/izmeniProjekciju', projekcijaId]);
      }
      else {
        alert('Projekciju nije moguce izmeniti jer postoje termini koji su rezervisani!');
      }
    })
  }

  obrisi(projekcijaId) {
    this.registrationService.obrisiProjekciju(projekcijaId).subscribe(data=>{
      if (data==0) {
        alert('Projekciju nije moguce obrisati jer postoje termini koji su rezervisani!');
      }
      else {
        alert('Projekcija uspesno obrisana!');
        this.router.navigate(['/bioskopi']);
      }
    })
  }

}
