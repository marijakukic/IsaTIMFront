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
    return this.http.get(this.url + "/login/"+ email).map(res=>res.json());
  }

  izmeniLozinku(staraLozinka, novaLozinka) {
    return this.http.post(this.url + "/korisnik/prvaPromenaLozinke/" + staraLozinka + "/" + novaLozinka, null).map(res=>res.json());
  }

  odjaviSe() {
    return this.http.get(this.url + "/logout").map(res=>res.toString);
  }

  setActiveUser(userId: number) {
    return this.http.post(this.url + "/setActiveUser/" + userId, null).map(res=>res.json());
  }

  getActiveUser() {
    return this.http.get(this.url + "/getActiveUser").map(res=>res.json());
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

  getSaleFromTeatar(teatarId) {
    return this.http.get(this.url + "/teatar/getSale/" + teatarId).map(res => res.json());
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

  saveKartaSaPopustom(terminId: number, mestoId: number, cenaSaPopustom: number) {
    return this.http.post(this.url + "/rezervacija/saveKartaSaPopustom/" + terminId + "/" + mestoId + "/" + cenaSaPopustom, null).map(res=>res.json());
  }

  rezervisiKartuSaPopustom(kartaId, korisnikId) {
    return this.http.post(this.url + "/rezervacija/oneClick/" + kartaId + "/" + korisnikId, null).map(res=>res.json());
  }

  getKarteSaPopustom(teatarID) {
    return this.http.get(this.url + "/rezervacija/getKarteSaPopustom/" + teatarID).map(res=>res.json());
  }

  getAllRekvizite(teatarId: number, stanje: string) {
    return this.http.get(this.url + "/fanZona/getAllRekvizite/" + teatarId + "/" + stanje).map(res => res.json());
  }

  getAllRekviziteZaOdobravanje(teatarId: number) {
    return this.http.get(this.url + "/fanZona/getAllRekviziteZaOdobravanje/" + teatarId).map(res => res.json());
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
    oglas.odobren = false;
    return this.http.post(this.url + "/rekvizit/saveOglas", oglas).map(res=>res.json());
  }

  saveRekvizit(teatarId: number, oglas: any) {
    oglas.teatarId = teatarId;
    oglas.stanje = "nov";
    return this.http.post(this.url + "/rekvizit/saveRekvizit", oglas).map(res=>res.json());
  }

  ponistiRekvizit(polovanRekvizit) {
    return this.http.post(this.url + "/rekvizit/ponisti", polovanRekvizit).map(res=>res.json());
  }

  odobriRekvizit(polovanRekvizit) {
    return this.http.post(this.url + "/rekvizit/odobri", polovanRekvizit).map(res=>res.json());
  }

  findPonudeByRekvizit(rekvizitId: number) {
    return this.http.get(this.url + "/ponuda/findPonudeByRekvizit/" + rekvizitId).map(res => res.json());
  }

  istorijaPoseta() {
    return this.http.get(this.url + "/rezervacija/istorijaPoseta").map(res=>res.json());
  }

  aktivneRezervacije() {
    return this.http.get(this.url + "/rezervacija/aktivneRezervacije").map(res=>res.json());
  }

  otkaziRezervaciju(rezervacija) {
    return this.http.post(this.url + "/rezervacija/otkazi", rezervacija).map(res=>res.json());
  }

  saveFilm(film: any, id: number) {
    film.id = id;
    return this.http.post(this.url + "/film/save", film).map(res=>res.json());
  }

  getFilm(id) {
    return this.http.get(this.url + "/film/get/" + id).map(res=>res.json());
  }

  sviFilmovi() {
    return this.http.get(this.url + "/film/get/svi").map(res=>res.json());
  }

  registrationTeatar(teatar:any, teatarID){
    teatar.id = teatarID;
    return this.http.post(this.url + "/registrationTeatar", teatar).map(res=>res.json());
  }

  getTeatar(id) {
    return this.http.get(this.url + "/teatar/get/" + id).map(res=>res.json());
  }

  editProjekcija(projekcija:any, datum) {
    projekcija.datum = datum;
    return this.http.post(this.url + "/projekcija/save", projekcija).map(res=>res.json());
  }

  getProjekcija(projekcijaId) {
    return this.http.get(this.url + "/projekcija/get/" + projekcijaId).map(res=>res.json());
  }

  saveProjekcija(projekcija:any, film: any){
    projekcija.film = film;
    return this.http.post(this.url + "/projekcija/save", projekcija).map(res=>res.json());
  }

  saveTermin(termin: any, projekcijaId: number) {
    return this.http.post(this.url + "/termin/save/" + projekcijaId, termin).map(res=>res.json());
  }

  obrisiTermin(termin: any) {
    return this.http.post(this.url + "/termin/obrisi", termin).map(res=>res.json());
  }

  listaAktivnihProjekcijaUTeatru(teatarId) {
    return this.http.get(this.url + "/projekcija/aktivne/teatar/" + teatarId).map(res=>res.json());
  }

  obrisiProjekciju(projekcijaId) {
    return this.http.post(this.url + "/projekcija/obrisi/" + projekcijaId, null).map(res=>res.json());
  }

  omogucenaIzmena(projekcijaId) {
    return this.http.get(this.url + "/projekcija/izmena/omogucena/" + projekcijaId).map(res=>res.json());
  }

  saveSkalaClanstva(skalaClanstva) {
    return this.http.post(this.url + "/skala/save", skalaClanstva).map(res=>res.json());
  }

  getSkalaClanstva() {
    return this.http.get(this.url + "/skala/get").map(res=>res.json());
  }

}
