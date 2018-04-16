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
    this.registrationService.login(email).subscribe(data=>{
      
      
      if(data.lozinka === this.loginForm.value.lozinka){

       if (data.tipKorisnika === "registrovanKorisnik") {
          if (data.potvrdjenMail == true) {
            this.registrationService.setActiveUser(data.id).subscribe(data=>{
              console.log(data);
             })
             this.router.navigate(['/homePageForRUser']);
          }else {
            alert("Prvo potvrdite Vas mejl pa pokusajte ponovo!");
          }
       }else if(data.tipKorisnika === "sistemAdministrator"){
        console.log("Ja sam sistem administrator");
        this.router.navigate(['/firstForAdmin']);
        
        }else if(data.tipKorisnika === "adminFAN"){
          if (data.promenjenaLozinka === false) {
            this.router.navigate(['/izmeniLozinku']);
          }
          else {
            this.router.navigate(['/adminFAN']);
          }
        }else if(data.tipKorisnika === "adminBP"){
          if (data.promenjenaLozinka === false) {
            this.router.navigate(['/izmeniLozinku']);
          }
          else{
            this.router.navigate(['/adminBP']);
          }
        }
        else{
          console.log("Ja sam obican korisnik");
        }   
      }else{
        alert("Neispravan mejl ili sifra");
      }
    })


  }

  
}
