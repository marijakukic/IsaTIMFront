import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { TeatarServiceService } from '../teatar-service.service';

@Component({
  selector: 'app-first-for-all-page',
  templateUrl: './first-for-all-page.component.html',
  styleUrls: ['./first-for-all-page.component.css']
})
export class FirstForAllPageComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'adresa', 'promotivniOpis'];
  elementData: Bioskop[];
  bioskop:any;
  dataSource = new MatTableDataSource<Bioskop>(ELEMENT_DATA);
  pozoriste:any;
  dataSource2 = new MatTableDataSource<Bioskop>(ELEMENT_DATA);

  

  constructor(private teatarService:TeatarServiceService) { }

  ngOnInit() {
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

