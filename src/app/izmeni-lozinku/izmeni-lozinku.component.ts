import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-izmeni-lozinku',
  templateUrl: './izmeni-lozinku.component.html',
  styleUrls: ['./izmeni-lozinku.component.css']
})
export class IzmeniLozinkuComponent implements OnInit {

  izmeniLozinkuForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {

    this.izmeniLozinkuForm = new FormGroup({
      staraLozinka: new FormControl('',[Validators.required]),
      novaLozinka1: new FormControl('',[Validators.required]),
      novaLozinka2: new FormControl('',[Validators.required])
    })
    
  }

  save() {
    this.registrationService.izmeniLozinku(this.izmeniLozinkuForm.value.staraLozinka, this.izmeniLozinkuForm.value.novaLozinka1).subscribe(data=>{
      if (data === 1) {
        alert("Uspesno izmenjena lozinka!");
      }
      else {
        alert("Doslo je do greske! Pokusajte ponovo!");
      }
    })
  }

}
