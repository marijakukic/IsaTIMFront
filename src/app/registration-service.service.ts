import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationServiceService {

  private url = "http://localhost:9000";

  constructor(private http : Http) { }

  registration(korisnik:any){
    console.log("Ovo je service front");
    return this.http.post(this.url + "/registration", korisnik).map(res=>res.json());
  }

  login(email){
    console.log("Ovo je service login front");
    return this.http.get(this.url + "/login/"+ email).map(res=>res.json());
  }

}
