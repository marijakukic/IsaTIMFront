import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fanzona',
  templateUrl: './fanzona.component.html',
  styleUrls: ['./fanzona.component.css']
})
export class FanzonaComponent implements OnInit {

  rekviziti: any;
  polovniRekviziti: any;
  mojiRekviziti: any;

  aktivnaStranica: string;

  teatarID: number;
  korisnikID: number;


  ponudaForm: FormGroup;
  napraviOglasForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {

    this.teatarID = parseInt(this.route.snapshot.paramMap.get('teatarID'));

    this.ponudaForm = new FormGroup({
      cena: new FormControl('',[Validators.required])
    })

    this.napraviOglasForm = new FormGroup({
      naziv: new FormControl('',[Validators.required]),
      opis: new FormControl('',[Validators.required]),
      slika: new FormControl('',[]),
      datum: new FormControl('',[Validators.required])
    })

    this.registrationService.getAllRekvizite(this.teatarID, "nov").subscribe(data=>{
      console.log(data);
      this.rekviziti = data;
    })

    this.registrationService.getAllRekvizite(this.teatarID, "polovan").subscribe(data=>{
      console.log(data);
      this.polovniRekviziti = data;
    })

    this.registrationService.getAllMojeRekvizite(this.teatarID, "polovan").subscribe(data=>{
      console.log(data);
      this.mojiRekviziti = data;
    })

    this.registrationService.getActiveUser().subscribe(data=>{
      this.korisnikID = data.id;
    })

    this.aktivnaStranica = "zvanicnaProdavnica";

  }

  sendPonuda(polovanRekvizitId: string) {
    console.log("Cena za rekvizit " + polovanRekvizitId + " je :");
    var cena = (<HTMLInputElement>document.getElementById(polovanRekvizitId)).value;
    this.registrationService.savePonuda(this.teatarID, this.korisnikID, polovanRekvizitId, cena).subscribe(data=>{
      console.log("Ponuda koja je sacuvana je: ");
      console.log(data);
    })
  }

  findPonuda(polovanRekvizitId) {
    this.registrationService.findPonuda(this.korisnikID, polovanRekvizitId).subscribe(data=>{
      (<HTMLInputElement>document.getElementById(polovanRekvizitId)).value = data.cena;
    })
    
  }

  kupi(rekvizit){
    this.registrationService.saveKupovina(this.teatarID, this.korisnikID, rekvizit.id, rekvizit.cena).subscribe(data=>{
      console.log("Kupovina: ");
      console.log(data);
    })
  }

  napraviOglas() {
     var oglas = this.napraviOglasForm.value;
     this.registrationService.saveOglas(this.teatarID, this.korisnikID, oglas).subscribe(data=>{
      console.log("Kupovina: ");
      console.log(data);
    })

  }

  refresh() {
    this.registrationService.getAllRekvizite(this.teatarID, "nov").subscribe(data=>{
      console.log(data);
      this.rekviziti = data;
    })

    this.registrationService.getAllRekvizite(this.teatarID, "polovan").subscribe(data=>{
      console.log(data);
      this.polovniRekviziti = data;
    })

    this.registrationService.getAllMojeRekvizite(this.teatarID, "polovan").subscribe(data=>{
      console.log(data);
      this.mojiRekviziti = data;
    })
  }

  

}
