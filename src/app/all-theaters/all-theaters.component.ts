import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';
import { TeatarServiceService } from '../teatar-service.service';

@Component({
  selector: 'app-all-theaters',
  templateUrl: './all-theaters.component.html',
  styleUrls: ['./all-theaters.component.css']
})
export class AllTheatersComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  korisnik: any;

  displayedColumns = ['naziv', 'adresa', 'promotivniOpis', 'rezervacija'];
  dataSource = new MatTableDataSource<any>();
  pozoriste:any;

  constructor(private router: Router,
              public registrationService:RegistrationServiceService,
              private teatarService:TeatarServiceService) { }

  ngOnInit() {

    this.registrationService.getActiveUser().subscribe(data=>{
      this.korisnik = data;
    })

    this.teatarService.listaPozorista().subscribe(data=>{
        this.pozoriste = data;
        console.log(this.pozoriste);
        console.log(data.promotivniOpis) 
        console.log("Ispisi nesto");

        this.dataSource = new MatTableDataSource<any>(this.pozoriste);
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

  rezervisi(teatarId) {
    this.router.navigate(['/reservation', teatarId]);
  }

  posjetiFanZonu(teatarId) {
    this.router.navigate(['/fanzona', teatarId]);
  }

  pretrazi(naziv) {
    this.teatarService.listaSearch(naziv, "pozoriste").subscribe(data=>{
      this.pozoriste = data;

      this.dataSource = new MatTableDataSource<any>(this.pozoriste);
      this.dataSource.sort = this.sort;
     
    })
  }

  konfiguracija(teatarId) {
    this.router.navigate(['/sala', teatarId]);
  }

  izmena(teatarId) {
    this.router.navigate(['/izmeniTeatar', teatarId]);
  }

  aktivneProjekcije(teatarId) {
    this.router.navigate(['/sveProjekcije', teatarId]);
  }

  rezervisiKarteSaPopustom(teatarId) {
    this.router.navigate(['/karteSaPopustom', teatarId]);
  }

  fanZonaAdmin(teatarId) {
    this.router.navigate(['/uredjivanjeFanzone', teatarId]);
  }

}
