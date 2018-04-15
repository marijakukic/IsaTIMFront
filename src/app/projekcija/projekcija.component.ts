import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TeatarServiceService } from '../teatar-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-projekcija',
  templateUrl: './projekcija.component.html',
  styleUrls: ['./projekcija.component.css']
})
export class ProjekcijaComponent implements OnInit {

  filmID: number;
  film: any;
  teatarID: number;
  teatri: any;
  sale: any;
  projekcijaID: number;
  projekcija: any;

  projekcijaForm: FormGroup;
  terminForm: FormGroup;

  aktivanKorak: number;

  constructor(  private router: Router, 
                private route: ActivatedRoute, 
                private registrationService: RegistrationServiceService,
                private teatarService: TeatarServiceService
              ) { }

  ngOnInit() {

    this.filmID = parseInt(this.route.snapshot.paramMap.get('filmID'));

    this.aktivanKorak = 1;

    this.projekcijaForm = new FormGroup({
      teatarId: new FormControl('',[Validators.required]),
      datum: new FormControl('',[Validators.required])
    })

    this.terminForm = new FormGroup({
      salaId: new FormControl('',[Validators.required]),
      vreme: new FormControl('',[Validators.required]),
      cena: new FormControl('',[Validators.required])
    })


    this.registrationService.getFilm(this.filmID).subscribe(data=>{
      this.film = data;
      if (this.film.tip === "film") {
        this.teatarService.listaBioskopa().subscribe(data=>{
          this.teatri = data;
        })
      }
      else {
        this.teatarService.listaPozorista().subscribe(data=>{
          this.teatri = data;
        })
      }
    })

  }

  getSale() {
    this.registrationService.getSaleFromTeatar(this.projekcijaForm.value.teatarId).subscribe(data=>{
      this.sale = data;
    })
  }
  saveProjekcija() {
    this.registrationService.saveProjekcija(this.projekcijaForm.value, this.film).subscribe(data=>{
      this.projekcijaID = data.id;
      this.projekcija = data;
      alert("Projekcija uspesno sacuvana!");
      console.log(data);
      this.aktivanKorak = 2;
    })
  }

  saveTermin() {
    this.registrationService.saveTermin(this.terminForm.value, this.projekcijaID).subscribe(data=>{
      console.log(data);
      alert("Termin uspesno sacuvan!")
    })
  }
  

}
