import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  
  teatarID: number;
  datumProjekcijeForm: FormGroup;
  projekcije: any;
  
  ngOnInit() {

    this.teatarID = parseInt(this.route.snapshot.paramMap.get('teatarID'));

    this.datumProjekcijeForm = new FormGroup({
      datumProjekcije: new FormControl('',[Validators.required])
    })

  }

  getAllProjekcije() {
    console.log("datumProjekcije: " + this.datumProjekcijeForm.value.datumProjekcije);
    this.registrationService.getAllProjekcije(this.teatarID, this.datumProjekcijeForm.value.datumProjekcije).subscribe(data=>{
      console.log(data);
      this.projekcije = data;
    })
  }

  rezervisi(terminId) {
    this.router.navigate(['/seatReservation', this.teatarID, terminId]);
  }

}
