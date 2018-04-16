import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-skala-clanstva',
  templateUrl: './skala-clanstva.component.html',
  styleUrls: ['./skala-clanstva.component.css']
})
export class SkalaClanstvaComponent implements OnInit {

  skalaClanstvaForm: FormGroup;

  skalaClanstva: any;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {
    this.skalaClanstva = {};


    this.skalaClanstvaForm = new FormGroup({
      id: new FormControl(1,[Validators.required]),
      bodoviZaPosetu: new FormControl('',[Validators.required]),
      bronzani: new FormControl('',[Validators.required]),
      bronzaniPopust: new FormControl('',[Validators.required]),
      srebrni: new FormControl('',[Validators.required]),
      srebrniPopust: new FormControl('',[Validators.required]),
      zlatni: new FormControl('',[Validators.required]),
      zlatniPopust: new FormControl('',[Validators.required])
    })


    this.registrationService.getSkalaClanstva().subscribe(data=>{
      this.skalaClanstva = data;

      this.skalaClanstvaForm = new FormGroup({
        id: new FormControl(1,[Validators.required]),
        bodoviZaPosetu: new FormControl(this.skalaClanstva.bodoviZaPosetu,[Validators.required]),
        bronzani: new FormControl(this.skalaClanstva.bronzani,[Validators.required]),
        bronzaniPopust: new FormControl(this.skalaClanstva.bronzaniPopust,[Validators.required]),
        srebrni: new FormControl(this.skalaClanstva.srebrni,[Validators.required]),
        srebrniPopust: new FormControl(this.skalaClanstva.srebrniPopust,[Validators.required]),
        zlatni: new FormControl(this.skalaClanstva.zlatni,[Validators.required]),
        zlatniPopust: new FormControl(this.skalaClanstva.zlatniPopust,[Validators.required])
      })
    })
    

  }

  save() {
    this.registrationService.saveSkalaClanstva(this.skalaClanstvaForm.value).subscribe(data=>{
      alert("Uspesno izmenjena skala clanstva!");
      location.reload();
    })
  }

}
