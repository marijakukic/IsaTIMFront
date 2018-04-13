import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeatarServiceService {

  private url = "http://localhost:9000";

  constructor(private http : Http) { }


  listaBioskopa(){
    console.log("Ovo je service login front");
    return this.http.get(this.url + "/bioskop/sviBioskopi").map(res=>res.json());
  }

  listaPozorista(){
    return this.http.get(this.url + "/pozorista/svaPozorista").map(res=>res.json());
  }

  listaSearch(naziv, tip) {
    if (naziv == "") {
      naziv = "undefined";
    }
    return this.http.get(this.url + "/searchPB/" + naziv + "/" + tip).map(res=>res.json());
  }

}
