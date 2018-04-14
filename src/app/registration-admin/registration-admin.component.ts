import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-registration-admin',
  templateUrl: './registration-admin.component.html',
  styleUrls: ['./registration-admin.component.css']
})
export class RegistrationAdminComponent implements OnInit {

  tipKorisnika: any;
  registrationForm: FormGroup;

  constructor(private registrationService: RegistrationServiceService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      ime: new FormControl('',[Validators.required]),
      prezime: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      lozinka: new FormControl('', [Validators.required]),
      lozinka2: new FormControl('', [Validators.required]),
      mestoStanovanja: new FormControl('BP', Validators.required),
      adresa: new FormControl('ILR', [Validators.required]),
      brojTelefona: new FormControl('ILR', [Validators.required]),
      tipKorisnika: new FormControl('', Validators.required)
    })
  }


  registration(){
    let value = this.registrationForm.value;
     console.log(value);
    this.registrationService.registration(value).subscribe(data=>{
      console.log(data.ime);
      console.log("Ispisi nesto");
    })

  }


  izaberiTip(){
    if(this.registrationForm.controls['tipKorisnika'].value === 'adminBP'){
      this.tipKorisnika = "adminBP";
    }else{
      this.tipKorisnika = "adminFAN";
    }
  }

  administratori = [
    {value: 'adminBP', viewValue: 'administrator pozorista/bioskopa'},
    {value: 'adminFAN', viewValue: 'administrator fan zone'}
  ];

}
