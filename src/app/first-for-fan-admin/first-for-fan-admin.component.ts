import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';
import { TeatarServiceService } from '../teatar-service.service';

@Component({
  selector: 'app-first-for-fan-admin',
  templateUrl: './first-for-fan-admin.component.html',
  styleUrls: ['./first-for-fan-admin.component.css']
})
export class FirstForFanAdminComponent implements OnInit {

  constructor(private router: Router,
              public registrationService:RegistrationServiceService,
              private teatarService:TeatarServiceService) { }

  ngOnInit() {

  }


}
