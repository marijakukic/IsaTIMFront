import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationServiceService } from '../registration-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService : RegistrationServiceService,private router: Router) { }

  registrationForm : FormGroup;
  tipKorisnika : any;

  ngOnInit() {
    this.registrationForm = new FormGroup({
      ime: new FormControl('',[Validators.required]),
      prezime: new FormControl('',[Validators.required]),
      email: new FormControl('maksi@gmail.com',[Validators.required, Validators.email]),
      lozinka: new FormControl('', [Validators.required]),
      lozinka2: new FormControl('', [Validators.required]),
      mestoStanovanja: new FormControl('Backa P', Validators.required),
      adresa: new FormControl('ILR', [Validators.required]),
      brojTelefona: new FormControl('ILR', [Validators.required]),
      tipKorisnika: new FormControl('registrovanKorisnik')
    })
  }

  registration(){
    let value = this.registrationForm.value;
     console.log(value);
    this.registrationService.registration(value)
           .subscribe(data=>{
               console.log(data.ime);
               console.log("Uspesna registracija, molim vas ulogujte se" );
               this.router.navigate(['/login']);
           })

  }



}
