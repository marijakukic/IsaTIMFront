import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-izmeni-teatar',
  templateUrl: './izmeni-teatar.component.html',
  styleUrls: ['./izmeni-teatar.component.css']
})
export class IzmeniTeatarComponent implements OnInit {

  teatarForm: FormGroup;

  teatarID: number;
  teatar: any;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {
    this.teatar = {};
    this.teatarID = parseInt(this.route.snapshot.paramMap.get('teatarID'));


    this.teatarForm = new FormGroup({
      naziv: new FormControl('',[Validators.required]),
      adresa: new FormControl('',[Validators.required]),
      promotivniOpis: new FormControl('',[Validators.required]),
      tip: new FormControl('',[Validators.required])
    })


    this.registrationService.getTeatar(this.teatarID).subscribe(data=>{
      this.teatar = data;

      this.teatarForm = new FormGroup({
        naziv: new FormControl(this.teatar.naziv,[Validators.required]),
        adresa: new FormControl(this.teatar.adresa,[Validators.required]),
        promotivniOpis: new FormControl(this.teatar.promotivniOpis,[Validators.required]),
        tip: new FormControl(this.teatar.tip,[Validators.required])
      })
    })
    

  }

  save() {
    this.registrationService.registrationTeatar(this.teatarForm.value, this.teatarID).subscribe(data=>{
      this.router.navigate(['/bioskopi']);
    })
  }

}
