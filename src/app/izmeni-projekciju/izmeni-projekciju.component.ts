import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-izmeni-projekciju',
  templateUrl: './izmeni-projekciju.component.html',
  styleUrls: ['./izmeni-projekciju.component.css']
})
export class IzmeniProjekcijuComponent implements OnInit {

  korisnik: any;

  projekcijaForm: FormGroup;
  terminForm: FormGroup;

  projekcijaID: number;

  projekcija: any;
  sale: any;


  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {
    this.projekcija = {};
    this.projekcijaID = parseInt(this.route.snapshot.paramMap.get('projekcijaID'));


    this.projekcijaForm = new FormGroup({
      datum: new FormControl('',[Validators.required])
    })

    this.terminForm = new FormGroup({
      id: new FormControl('',[Validators.required]),
      salaId: new FormControl('',[Validators.required]),
      salaNaziv: new FormControl('',[Validators.required]),
      vreme: new FormControl('',[Validators.required]),
      cena: new FormControl('',[Validators.required])
    })

    this.registrationService.getProjekcija(this.projekcijaID).subscribe(data=>{
      this.projekcija = data;

      this.registrationService.getSaleFromTeatar(this.projekcija.teatarId).subscribe(data=>{
        this.sale = data;
      })

      this.projekcijaForm = new FormGroup({
        datum: new FormControl(this.projekcija.datum,[Validators.required])
      })
    })

    
    

  }

  save() {
    this.registrationService.editProjekcija(this.projekcija, this.projekcijaForm.value.datum).subscribe(data=>{
      alert("Projekcija uspesno izmenjena!")
      location.reload();
    })
  }

  izmeniTermin(termin) {
    this.terminForm = new FormGroup({
      id: new FormControl(termin.id,[Validators.required]),
      salaId: new FormControl(termin.salaId,[Validators.required]),
      salaNaziv: new FormControl(termin.salaNaziv,[Validators.required]),
      vreme: new FormControl(termin.vreme,[Validators.required]),
      cena: new FormControl(termin.cena,[Validators.required])
    })
  }

  saveTermin() {
    this.registrationService.saveTermin(this.terminForm.value, this.projekcijaID).subscribe(data=>{
      console.log(data);
      alert("Termin uspesno izmenjen!");
      location.reload();
    })
  }

  obrisiTermin(termin) {
    this.registrationService.obrisiTermin(termin).subscribe(data=>{
      console.log(data);
      alert("Termin uspesno obrisan!");
      location.reload();
    })
  }

}
