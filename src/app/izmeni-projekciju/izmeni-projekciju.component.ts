import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-izmeni-projekciju',
  templateUrl: './izmeni-projekciju.component.html',
  styleUrls: ['./izmeni-projekciju.component.css']
})
export class IzmeniProjekcijuComponent implements OnInit {

  projekcijaID: number;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {

    this.projekcijaID = parseInt(this.route.snapshot.paramMap.get('projekcijaID'));


  }

}
