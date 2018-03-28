import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationServiceService } from '../registration-service.service';
import { Korisnik } from './Korisnik';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  korisnik: Korisnik;

  constructor(private registrationService : RegistrationServiceService, private router: Router) { }

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
      
      
      if(data.lozinka === this.loginForm.value.lozinka){
        console.log("Lozinke se podudaraju");
        this.registrationService.user = data;
        console.log("Oooooooooooooooo" + this.registrationService.user);
        this.router.navigate(['/homePageForRUser']);
        
      }else{
        console.log("Pogresno")
      }

      if(data.tipKorisnika === "sistemAdministrator"){
        console.log("Ja sam sistem administrator");
        this.router.navigate(['/firstForAdmin']);
        
      }else{
        console.log("Ja sam obican covek");
      }
  })
  }

  
}
