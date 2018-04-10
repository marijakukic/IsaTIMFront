import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationServiceService } from '../registration-service.service';
import { Router, ActivatedRoute } from '@angular/router';
declare const SVG:any;

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }
  draw: any;
  counter: number;
  salaForm: FormGroup;
  segmentForm: FormGroup;
  teatarID: number;
  salaID: number;
  segments: any;

  ngOnInit() {
    this.counter = 0;
    this.draw = SVG('canvas').size(400, 400);
    const border = this.draw.rect(0, 0);
    border.size(390,390);
    border.fill({ color: '#111' })

    this.salaForm = new FormGroup({
      naziv: new FormControl('',[Validators.required])
    })

    this.segmentForm = new FormGroup({
      naziv: new FormControl('',[Validators.required]),
      boja: new FormControl('',[Validators.required])
    })

    this.teatarID = parseInt(this.route.snapshot.paramMap.get('teatarID'));
    
  }

  novoMesto(segmentID: number, segmentColor: string) {
    this.counter++;
    const rect = this.draw.rect(100, 100);
    rect.size(50,50);

    rect.data('nazivMesta', { value: { data: this.counter }});
    rect.fill({ color: segmentColor })
    

    var text = this.draw.text(this.counter+"")
    text.move(20,20).font({ fill: '#111', family: 'Inconsolata' })

    var group = this.draw.group();
    group.add(rect);
    group.add(text);
    group.draggable();

    const regService = this.registrationService;
    const salaaID = this.salaID;

    group.click(function() {
      var nazivMesta = rect.data('nazivMesta').value.data;
      var idMesta = rect.data('idMesta').value.data;
      console.log('Id mesta: ' + idMesta);
      regService.saveMesto(salaaID, segmentID, nazivMesta, idMesta, group.x(), group.y(), {}).subscribe(data=>{
        console.log('Sacuvano mesto ispod: ');
        console.log(data);
      })
    })

    group.dblclick(function(this){ 
      var idMesta = rect.data('idMesta').value.data;
      regService.deleteMesto(idMesta).subscribe(data => {
        console.log("Mesto je obrisano iz baze.");
      })
      group.remove();
    })

    var nazivMesta = rect.data('nazivMesta').value.data;
    this.registrationService.saveMesto(this.salaID, segmentID, nazivMesta, null, group.x(), group.y(), {}).subscribe(data=>{
      rect.data('idMesta', { value: { data: data.id }});
    })

  }


  saveSala() {
    this.registrationService.saveSala(this.salaForm.value, this.teatarID).subscribe(data=>{
      console.log('Sala sacuvana, vidi ispod: ');
      console.log('Teatar ID: ' + this.teatarID);
      console.log(data);
      this.salaID = data.id;
    })
  }

  saveSegment() {
    this.registrationService.saveSegment(this.segmentForm.value, this.salaID).subscribe(data=>{
      console.log(data);
      this.registrationService.getAllSalaSegments(data.salaId).subscribe(data=>{
        this.segments = [];
        this.segments = data;
      })
    })
  }

}
