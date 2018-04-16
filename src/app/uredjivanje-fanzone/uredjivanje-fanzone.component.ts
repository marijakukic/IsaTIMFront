import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-uredjivanje-fanzone',
  templateUrl: './uredjivanje-fanzone.component.html',
  styleUrls: ['./uredjivanje-fanzone.component.css']
})
export class UredjivanjeFanzoneComponent implements OnInit {

  rekviziti: any;
  rekvizitiZaOdobravanje: any;
  

  aktivnaStranica: string;

  teatarID: number;
  korisnikID: number;


  ponudaForm: FormGroup;
  napraviRekvizitForm: FormGroup;
  izmeniRekvizitForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {

    this.teatarID = parseInt(this.route.snapshot.paramMap.get('teatarID'));

    this.napraviRekvizitForm = new FormGroup({
      naziv: new FormControl('',[Validators.required]),
      opis: new FormControl('',[Validators.required]),
      slika: new FormControl('',[]),
      cena: new FormControl('',[Validators.required]),

    })

    this.izmeniRekvizitForm = new FormGroup({
      id: new FormControl('',[Validators.required]),
      teatarId: new FormControl('',[Validators.required]),
      naziv: new FormControl('',[Validators.required]),
      opis: new FormControl('',[Validators.required]),
      slika: new FormControl('',[]),
      cena: new FormControl('',[Validators.required]),
      stanje: new FormControl('',[Validators.required])
    })

    this.registrationService.getAllRekvizite(this.teatarID, "nov").subscribe(data=>{
      console.log(data);
      this.rekviziti = data;
    })

    this.registrationService.getAllRekviziteZaOdobravanje(this.teatarID).subscribe(data=>{
      console.log(data);
      this.rekvizitiZaOdobravanje = data;
    })

    this.aktivnaStranica = "sviNoviRekviziti";

  }

  saveRekvizit() {
    var oglas = this.napraviRekvizitForm.value;
    this.registrationService.saveRekvizit(this.teatarID, oglas).subscribe(data=>{
      alert("Rekvizit uspesno sacuvan");
      this.aktivnaStranica = "sviNoviRekviziti";
      location.reload();
    })
  }

  ponisti(polovanRekvizit) {
    this.registrationService.ponistiRekvizit(polovanRekvizit).subscribe(data=>{
      alert("Oglas za rekvizit ponisten!");
      location.reload();
    })
  }

  odobri(polovanRekvizit) {
    this.registrationService.odobriRekvizit(polovanRekvizit).subscribe(data=>{
      alert("Oglas za rekvizit odobren!");
      location.reload();
    })
  }

  izmeniRekvizit(rekvizit) {
    this.izmeniRekvizitForm = new FormGroup({
      id: new FormControl(rekvizit.id,[Validators.required]),
      teatarId: new FormControl(rekvizit.teatarId,[Validators.required]),
      naziv: new FormControl(rekvizit.naziv,[Validators.required]),
      opis: new FormControl(rekvizit.opis,[Validators.required]),
      slika: new FormControl(rekvizit.slika,[]),
      cena: new FormControl(rekvizit.cena,[Validators.required]),
      stanje: new FormControl(rekvizit.stanje,[Validators.required])
    })
  }

  saveIzmenjenRekvizit() {
    var oglas = this.izmeniRekvizitForm.value;
    this.registrationService.saveRekvizit(this.teatarID, oglas).subscribe(data=>{
      alert("Rekvizit uspesno izmenjen");
      this.aktivnaStranica = "sviNoviRekviziti";
      location.reload();
    })
  }

}
