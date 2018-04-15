import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  filmForm: FormGroup;
  selectedValue: string;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {
    this.filmForm = new FormGroup({
      naziv: new FormControl('',[Validators.required]),
      kratakOpis: new FormControl('',[Validators.required]),
      zanr: new FormControl('',[Validators.required]),
      spisakGlumaca: new FormControl('',[Validators.required]),
      imeReditelja: new FormControl('',[Validators.required]),
      trajanje: new FormControl('',[Validators.required]),
      poster: new FormControl('',[Validators.required]),
      tip: new FormControl('',[Validators.required])
    })

  }

  save() {
    this.registrationService.saveFilm(this.filmForm.value, null).subscribe(data=>{
      this.router.navigate(['/sviFilmovi']);
    })
  }

  tipovi = [
    {value: 'film', viewValue: 'Film'},
    {value: 'predstava', viewValue: 'Predstava'}
  ];

}
