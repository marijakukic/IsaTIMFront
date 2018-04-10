import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationServiceService {

  private url = "http://localhost:9000";
  public user:any;

  constructor(private http : Http) { }

  registration(korisnik:any){
    console.log("Ovo je service front");
    return this.http.post(this.url + "/registration", korisnik).map(res=>res.json());
  }

  login(email){
    console.log("Ovo je service login front");
    return this.http.get(this.url + "/login/"+ email).map(res=>res.json());
  }

  setActiveUser(userId: number) {
    return this.http.post(this.url + "/setActiveUser/" + userId, null).map(res=>res.json());
  }

  getActiveUser() {
    return this.http.get(this.url + "/getActiveUser").map(res=>res.json());
  }

  registrationTeatar(teatar:any){
    console.log("Ovo je service front");
    return this.http.post(this.url + "/registrationTeatar", teatar).map(res=>res.json());
  }

  getUserDetails(userId: any){
    return this.http.get(this.url + "/getUserDetails/" + userId).map(res=>res.json());
  }

  listaPrijatelja(korisnikId: number){
    return this.http.get(this.url + "/getFriendsList/" + korisnikId).map(res => res.json());
  }

  getAllUsersExceptMe(korisnikId: number, imeS: string, prezimeS: string) {
    return this.http.get(this.url + "/getAllUsersExceptMe/" + korisnikId + "/" + imeS + "/" + prezimeS).map(res => res.json());
  }

  sendFriendRequest(sender: number, reciever: number) {
    return this.http.post(this.url + "/sendFriendRequest/" + sender + "/" + reciever, null).map(res => res.json());
  }

  acceptOrRefuseFriendRequest(sender: number, reciever: number, decision: boolean) {
    return this.http.post(this.url + "/acceptOrRefuseFriendRequest/" + sender + "/" + reciever + "/" + decision, null).map(res => res.json());
  }

}
