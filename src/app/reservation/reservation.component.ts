import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';
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
  
  
  ngOnInit() {

    this.teatarID = parseInt(this.route.snapshot.paramMap.get('teatarID'));

    this.draw = SVG('canvas').size(400, 400);
    const border = this.draw.rect(0, 0);
    border.size(390,390);
    border.fill({ color: '#111' })

  }

  getAllFreeSeats() {
    const draw = this.draw;
    //TODO: termin
    this.registrationService.getAllFreeSeats(this.teatarID, 1).subscribe(data=>{
        for (var _i = 0; _i < data.length; _i++) {
          const rect = draw.rect(100, 100);
          rect.size(50,50);
          
          rect.data('nazivMesta', { value: { data: data[_i].naziv }});
          //u mestu cuvaj segment pa boju iz segmenta uzmi
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
