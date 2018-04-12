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

  zvanicnaProdavnica: boolean;

  teatarID: number;

  ponudaForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {

    this.teatarID = parseInt(this.route.snapshot.paramMap.get('teatarID'));

    this.ponudaForm = new FormGroup({
      cena: new FormControl('',[Validators.required])
    })

    this.registrationService.getAllRekvizite(this.teatarID, "nov").subscribe(data=>{
      console.log(data);
      this.rekviziti = data;
    })

    this.registrationService.getAllRekvizite(this.teatarID, "polovan").subscribe(data=>{
      console.log(data);
      this.polovniRekviziti = data;
    })

    this.zvanicnaProdavnica = true;

  }

  sendPonuda(polovanRekvizitId: string) {
    console.log("Cena za rekvizit " + polovanRekvizitId + " je :");
    console.log((<HTMLInputElement>document.getElementById(polovanRekvizitId)).value);
  }

}
