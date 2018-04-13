import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';
import { MatTableDataSource } from '@angular/material';
declare const SVG:any;

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css']
})
export class SeatReservationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  draw: any;
  alreadyReserved: Array<number>;
  alreadyInvited: Array<number>;

  teatarID: number;
  terminID: number;
  korisnikID: number;

  displayedColumnsPrijateljstvo = ['ime', 'prezime', 'pozovi'];
  dataSourcePrijateljstvo = new MatTableDataSource<any>();

  ngOnInit() {
    
    this.alreadyReserved = [];
    const alreadyRes = this.alreadyReserved;

    this.alreadyInvited = [];
    const alreadyInv = this.alreadyInvited;

    this.teatarID = parseInt(this.route.snapshot.paramMap.get('teatarID'));
    this.terminID = parseInt(this.route.snapshot.paramMap.get('terminID'));

    this.draw = SVG('canvas').size(400, 400);
    const border = this.draw.rect(0, 0);
    border.size(390,390);
    border.fill({ color: '#111' })
    const draw = this.draw;
    
    this.registrationService.getAllFreeSeats(this.teatarID, this.terminID).subscribe(data=>{
        for (var _i = 0; _i < data.length; _i++) {
          const rect = draw.rect(100, 100);
          rect.size(50,50);
          
          rect.data('nazivMesta', { value: { data: data[_i].naziv }});
          rect.data('idMesta', { value: { data: data[_i].id }});
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

          group.click(function() {
            var nazivMesta = rect.data('nazivMesta').value.data;
            var idMesta = rect.data('idMesta').value.data;
            
            
            if (!alreadyRes.includes(idMesta)) {
              alreadyRes.push(idMesta);
              alert('Uspesno ste rezervisali mesto: ' + nazivMesta);
            }
            else {
              alert('Vec ste rezervisali mesto: ' + nazivMesta);
            }
            console.log('ID mesta koje zelim da rezervisem: ' + idMesta);
            
          })
          
        }
    })

    this.registrationService.getActiveUser().subscribe(data=>{
      this.korisnikID = data.id;
      this.registrationService.listaPrijatelja(data.id).subscribe(
        data => {
          this.dataSourcePrijateljstvo = new MatTableDataSource<any>(data);
        }
      )

    })

  }

  nastavi() {
    console.log("Nastavi");
    console.log(this.alreadyReserved);

    var remainingSeats = this.alreadyReserved.length - this.alreadyInvited.length;
    
    var _i = 0;

    //pozivi za korisnika
    for (_i; _i < this.alreadyReserved.length - this.alreadyInvited.length; _i++) {
      this.registrationService.saveRezervacija(this.terminID, this.alreadyReserved[_i], this.korisnikID, false).subscribe(
        data => {
          console.log('Napravljena rezervacija za korisnika: ');
          console.log(data);
        }
      )
    }

    //pozivi za prijatelje
    var j = 0;
    for (_i; _i < this.alreadyReserved.length; _i++) {
      this.registrationService.saveRezervacija(this.terminID, this.alreadyReserved[_i], this.alreadyInvited[j], true).subscribe(
        data => {
          console.log('Napravljena rezervacija za prijatelja: ');
          console.log(data);
        }
      )
      j++;
    }

    alert("Rezervacija uspesna!");
    this.router.navigate(['/aktivneRezervacije']);

  }

  pozovi(prijateljId) {
    if(!this.alreadyInvited.includes(prijateljId)){
      this.alreadyInvited.push(prijateljId);
    }
  }

}
