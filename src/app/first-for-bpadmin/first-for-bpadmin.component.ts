import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';
import { TeatarServiceService } from '../teatar-service.service';

@Component({
  selector: 'app-first-for-bpadmin',
  templateUrl: './first-for-bpadmin.component.html',
  styleUrls: ['./first-for-bpadmin.component.css']
})
export class FirstForBpadminComponent implements OnInit {

  korisnik: any;

  constructor(private router: Router,
    public registrationService:RegistrationServiceService,
    private teatarService:TeatarServiceService) { }

  ngOnInit() {
    this.registrationService.getActiveUser().subscribe(data=>{
      this.korisnik = data;
    })
  }

  odjaviSe() {
    this.registrationService.odjaviSe().subscribe(data=>{
      this.router.navigate(['/']);
    })
  }

}
