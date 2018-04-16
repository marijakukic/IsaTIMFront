import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-karte-sa-popustom',
  templateUrl: './karte-sa-popustom.component.html',
  styleUrls: ['./karte-sa-popustom.component.css']
})
export class KarteSaPopustomComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  teatarID: number;
  displayedColumns = ['nazivTeatra', 'nazivProjekcije', 'datum', 'vreme', 'salaNaziv', 'mestoNaziv', 'cena', 'cenaSaPopustom', 'rezervisi'];
  dataSource = new MatTableDataSource<any>();
  karte: any;
  korisnik: any;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) {}

  ngOnInit() {

    this.teatarID = parseInt(this.route.snapshot.paramMap.get('teatarID'));

    this.registrationService.getKarteSaPopustom(this.teatarID).subscribe(data=>{
      this.karte = data;
      this.dataSource = new MatTableDataSource<any>(this.karte);
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

  rezervisiKartuSaPopustom(karta) {
    this.registrationService.rezervisiKartuSaPopustom(karta.id, this.korisnik.id).subscribe(data=>{
      alert('Uspesno rezervisana karta sa popustom!');
    })
  }

}
