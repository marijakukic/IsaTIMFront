import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-ponude',
  templateUrl: './ponude.component.html',
  styleUrls: ['./ponude.component.css']
})
export class PonudeComponent implements OnInit {

  rekvizitID: number;
  ponude: any;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {

    this.rekvizitID = parseInt(this.route.snapshot.paramMap.get('rekvizitID'));

    this.registrationService.findPonudeByRekvizit(this.rekvizitID).subscribe(data=>{
      console.log(data);
      this.ponude = data;
    })

  }

  prihvatiPonudu(ponuda) {
    this.registrationService.prihvatiPonudu(ponuda).subscribe(data=>{
      console.log("Prihvacena ponuda sa id: " + data.id);
    })
  }

}
