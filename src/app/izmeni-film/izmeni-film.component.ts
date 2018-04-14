import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-izmeni-film',
  templateUrl: './izmeni-film.component.html',
  styleUrls: ['./izmeni-film.component.css']
})
export class IzmeniFilmComponent implements OnInit {

  filmForm: FormGroup;

  filmID: number;
  film: any;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistrationServiceService) { }

  ngOnInit() {
    this.film = {};
    this.filmID = parseInt(this.route.snapshot.paramMap.get('filmID'));


    this.filmForm = new FormGroup({
      naziv: new FormControl('',[Validators.required]),
      kratakOpis: new FormControl('',[Validators.required]),
      zanr: new FormControl('',[Validators.required]),
      spisakGlumaca: new FormControl('',[Validators.required]),
      imeReditelja: new FormControl('',[Validators.required]),
      trajanje: new FormControl('',[Validators.required]),
      poster: new FormControl('',[Validators.required])
    })


    this.registrationService.getFilm(this.filmID).subscribe(data=>{
      this.film = data;

      this.filmForm = new FormGroup({
        naziv: new FormControl(this.film.naziv,[Validators.required]),
        kratakOpis: new FormControl(this.film.kratakOpis,[Validators.required]),
        zanr: new FormControl(this.film.zanr,[Validators.required]),
        spisakGlumaca: new FormControl(this.film.spisakGlumaca,[Validators.required]),
        imeReditelja: new FormControl(this.film.imeReditelja,[Validators.required]),
        trajanje: new FormControl(this.film.trajanje,[Validators.required]),
        poster: new FormControl(this.film.poster,[Validators.required])
      })
    })
    

  }

  save() {
    this.registrationService.saveFilm(this.filmForm.value, this.filmID).subscribe(data=>{
      this.router.navigate(['/sviFilmovi']);
    })
  }

}
