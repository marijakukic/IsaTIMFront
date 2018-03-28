import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-theater',
  templateUrl: './registration-theater.component.html',
  styleUrls: ['./registration-theater.component.css']
})
export class RegistrationTheaterComponent implements OnInit {

  registrationForm:FormGroup;
  tip:any;

  constructor(private registrationService: RegistrationServiceService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      naziv: new FormControl('',[Validators.required]),
      adresa: new FormControl('',[Validators.required]),
      promotivniOpis: new FormControl('',[Validators.required]),
      tip: new FormControl('',[Validators.required])
    })
  }

  registrationTeatar(){
    let value = this.registrationForm.value;
    console.log(value);
    this.registrationService.registrationTeatar(value)
           .subscribe(data=>{
               console.log(data.naziv);
               console.log("Ispisi nesto");
           })

  }

  izaberiTip(){
    if(this.registrationForm.controls['tip'].value === 'bioskop'){
      this.tip = "bioskop";
    }else{
      this.tip = "pozoriste";
    }
  }

  tipovi = [
    {value: 'bioskop', viewValue: 'Bioskop'},
    {value: 'pozoriste', viewValue: 'Pozoriste'}
  ];

}
