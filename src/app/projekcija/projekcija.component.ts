import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projekcija',
  templateUrl: './projekcija.component.html',
  styleUrls: ['./projekcija.component.css']
})
export class ProjekcijaComponent implements OnInit {

  filmID: number;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {

    this.filmID = parseInt(this.route.snapshot.paramMap.get('filmID'));

  }

}
