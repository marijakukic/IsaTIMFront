import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationServiceService } from '../registration-service.service';
import { Korisnik } from './Korisnik';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  korisnik: Korisnik;

  constructor(private registrationService : RegistrationServiceService) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      lozinka: new FormControl('',[Validators.required])

    })
  }

  login(){
    let email = this.loginForm.value.email;
    console.log("aaaaaaaaaaaaa" + email);
    this.registrationService.login(email)
    .subscribe(data=>{
      console.log("Ispisi nesto za login front contr");
      this.korisnik.email = data.email;
      this.korisnik.lozinka = data.lozinka;
      
      if(data.lozinka === this.loginForm.value.lozinka){
        console.log("Lozinke se podudaraju");
      }else{
        console.log("Pogresno")
      }
  })
  }

  
}
