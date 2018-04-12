import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationServiceService {

  private url = "http://localhost:9000";
  public user:any;

  constructor(private http : Http) { }

  registration(korisnik:any){
    return this.http.post(this.url + "/registration", korisnik).map(res=>res.json());
  }

  editUser(korisnik:any){
    return this.http.post(this.url + "/editUser", korisnik).map(res=>res.json());
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

  saveSala(sala: any, teatarID: number) {
    sala.teatarId = teatarID;
    return this.http.post(this.url + "/sala/saveSala", sala).map(res=>res.json());
  }

  saveSegment(segment: any, salaId: number) {
    segment.salaId = salaId;
    return this.http.post(this.url + "/segment/saveSegment", segment).map(res=>res.json());
  }

  getAllSalaSegments(salaId: number){
    return this.http.get(this.url + "/segment/getAllSalaSegments/" + salaId).map(res => res.json());
  }

  getAllFreeSeats(teatarId: number, terminId: number){
    return this.http.get(this.url + "/projekcija/getAllFreeSeats/" + teatarId + "/" + terminId).map(res => res.json());
  }

  getAllProjekcije(teatarId: number, datum: string) {
    return this.http.get(this.url + "/projekcija/getProjectionsForDate/" + teatarId + "/" + datum).map(res => res.json());
  }

  saveMesto(salaId, segmentId, naziv, id, x, y, mesto: any) {
    mesto.id = id;
    mesto.salaId = salaId;
    mesto.segmentId = segmentId;
    mesto.naziv = naziv;
    mesto.x = x;
    mesto.y = y;
    return this.http.post(this.url + "/mesto/saveMesto", mesto).map(res=>res.json());
  }

  deleteMesto(id){
    return this.http.delete(this.url + "/mesto/deleteMesto/" + id).map(res=>res.toString)
  }

  saveRezervacija(terminId: number, mestoId: number, korisnikId: number, poziv: boolean) {
    return this.http.post(this.url + "/rezervacija/saveRezervacija/" + terminId + "/" + mestoId + "/" + korisnikId + "/" + poziv, null).map(res=>res.json());
  }

  getAllRekvizite(teatarId: number, stanje: string) {
    return this.http.get(this.url + "/fanZona/getAllRekvizite/" + teatarId + "/" + stanje).map(res => res.json());
  }

  getAllMojeRekvizite(teatarId: number, stanje: string) {
    return this.http.get(this.url + "/fanZona/getAllMojeRekvizite/" + teatarId + "/" + stanje).map(res => res.json());
  }

  savePonuda(teatarId, korisnikId, rekvizitId, cena) {
    var ponuda: any;
    ponuda = {};
    ponuda.teatarId = teatarId;
    ponuda.korisnikId = korisnikId;
    ponuda.rekvizitId = rekvizitId;
    ponuda.cena = cena;
    return this.http.post(this.url + "/ponuda/savePonuda", ponuda).map(res=>res.json());
  }

  findPonuda(korisnikId: number, rekvizitId: number) {
    return this.http.get(this.url + "/ponuda/findPonuda/" + korisnikId + "/" + rekvizitId).map(res => res.json());
  }

  prihvatiPonudu(ponuda) {
    return this.http.post(this.url + "/ponuda/odaberi", ponuda).map(res=>res.json());
  }

  saveKupovina(teatarId, korisnikId, rekvizitId, cena) {
    var kupovina: any;
    kupovina = {};
    kupovina.teatarId = teatarId;
    kupovina.korisnikId = korisnikId;
    kupovina.rekvizitId = rekvizitId;
    kupovina.cena = cena;
    return this.http.post(this.url + "/kupovina/saveKupovina", kupovina).map(res=>res.json());
  }

  saveOglas(teatarId: number, korisnikId: number, oglas: any) {
    oglas.teatarId = teatarId;
    oglas.korisnikId = korisnikId;
    oglas.stanje = "polovan";
    return this.http.post(this.url + "/rekvizit/saveRekvizit", oglas).map(res=>res.json());
  }

  findPonudeByRekvizit(rekvizitId: number) {
    return this.http.get(this.url + "/ponuda/findPonudeByRekvizit/" + rekvizitId).map(res => res.json());
  }

}
