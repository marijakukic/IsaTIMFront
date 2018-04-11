import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare const SVG:any;

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  
  teatarID: number;
  draw: any;
  datumProjekcijeForm: FormGroup;
  projekcije: any;
  
  ngOnInit() {

    this.teatarID = parseInt(this.route.snapshot.paramMap.get('teatarID'));

    this.datumProjekcijeForm = new FormGroup({
      datumProjekcije: new FormControl('',[Validators.required])
    })


    this.draw = SVG('canvas').size(400, 400);
    const border = this.draw.rect(0, 0);
    border.size(390,390);
    border.fill({ color: '#111' })

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

  getAllFreeSeats() {
    const draw = this.draw;
    //TODO: termin
    this.registrationService.getAllFreeSeats(this.teatarID, 1).subscribe(data=>{
        for (var _i = 0; _i < data.length; _i++) {
          const rect = draw.rect(100, 100);
          rect.size(50,50);
          
          rect.data('nazivMesta', { value: { data: data[_i].naziv }});
          rect.fill({ color: data[_i].segment.boja })
          rect.attr('x', data[_i].x);
          rect.attr('y', data[_i].y);

          var text = draw.text( data[_i].naziv);
          text.move(20, 20).font({ fill: '#111', family: 'Inconsolata' })
          text.attr('x', data[_i].x + 20);
          text.attr('y', data[_i].y + 10);

          var group = draw.group(data[_i].x, data[_i].y);
          group.add(rect);
          group.add(text);
          group.attr('x', data[_i].x);
          group.attr('y', data[_i].y);
          console.log(data[_i].x);
          //group.draggable();
        }
    })

  }



}
