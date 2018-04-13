import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  korisnik: any;

  displayedColumns = ['naziv', 'tip', 'sala', 'nazivFilma', 'nazivMesta'];
  dataSource = new MatTableDataSource<any>();
  history:any;

  constructor(private router: Router,
              public registrationService:RegistrationServiceService) { }

  ngOnInit() {

    this.registrationService.getActiveUser().subscribe(data=>{
      this.korisnik = data;
    })

    this.registrationService.istorijaPoseta().subscribe(data=>{
        this.history = data;
        console.log(this.history);

        this.dataSource = new MatTableDataSource<any>(this.history);
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

}
