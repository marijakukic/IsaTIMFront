import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FirstForAllPageComponent } from './first-for-all-page/first-for-all-page.component';
import { FirstForAdminPageComponent } from './first-for-admin-page/first-for-admin-page.component';
import { RegistrationAdminComponent } from './registration-admin/registration-admin.component';
import { RegistrationTheaterComponent } from './registration-theater/registration-theater.component';
import { HomePageForUserComponent } from './home-page-for-user/home-page-for-user.component';
import { SettingRuserComponent } from './setting-ruser/setting-ruser.component';
import { SalaComponent } from './sala/sala.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';
import { FanzonaComponent } from './fanzona/fanzona.component';
import { PonudeComponent } from './ponude/ponude.component';
import { AllCinemasComponent } from './all-cinemas/all-cinemas.component';
import { AllTheatersComponent } from './all-theaters/all-theaters.component';
import { ActiveReservationsComponent } from './active-reservations/active-reservations.component';
import { HistoryComponent } from './history/history.component';
import { PrijateljiComponent } from './prijatelji/prijatelji.component';
import { FirstForFanAdminComponent } from './first-for-fan-admin/first-for-fan-admin.component';
import { FirstForBpadminComponent } from './first-for-bpadmin/first-for-bpadmin.component';
import { FilmComponent } from './film/film.component';
import { IzmeniFilmComponent } from './izmeni-film/izmeni-film.component';
import { SviFilmoviComponent } from './svi-filmovi/svi-filmovi.component';
import { ProjekcijaComponent } from './projekcija/projekcija.component';
import { IzmeniProjekcijuComponent } from './izmeni-projekciju/izmeni-projekciju.component';
import { SveProjekcijeComponent } from './sve-projekcije/sve-projekcije.component';
import { IzmeniTeatarComponent } from './izmeni-teatar/izmeni-teatar.component';
import { KarteSaPopustomComponent } from './karte-sa-popustom/karte-sa-popustom.component';
import { UredjivanjeFanzoneComponent } from './uredjivanje-fanzone/uredjivanje-fanzone.component';
import { SkalaClanstvaComponent } from './skala-clanstva/skala-clanstva.component';


const routes : Routes = [
    { path: '', redirectTo:'/firstForAll', pathMatch:'full'},
    { path: 'registration', component: RegistrationComponent},
    { path: 'firstPage', component:AppComponent},
    { path: 'login', component:LoginComponent,},
    { path: 'firstForAll', component:FirstForAllPageComponent},
    { path: 'firstForAdmin', component:FirstForAdminPageComponent},
    { path: 'registrationAdmin', component:RegistrationAdminComponent},
    { path: 'registrationPozoriste', component:RegistrationTheaterComponent},
    { path: 'homePageForRUser', component:HomePageForUserComponent},
    { path: 'settingsRUser', component:SettingRuserComponent},
    { path: 'sala/:teatarID', component:SalaComponent},
    { path: 'reservation/:teatarID', component:ReservationComponent },
    { path: 'seatReservation/:teatarID/:terminID', component:SeatReservationComponent },
    { path: 'fanzona/:teatarID', component:FanzonaComponent },
    { path: 'ponude/:rekvizitID', component:PonudeComponent },
    { path: 'bioskopi', component:AllCinemasComponent},
    { path: 'pozorista', component:AllTheatersComponent },
    { path: 'aktivneRezervacije', component:ActiveReservationsComponent },
    { path: 'istorija', component:HistoryComponent },
    { path: 'prijatelji', component:PrijateljiComponent },
    { path: 'adminFAN', component:FirstForFanAdminComponent },
    { path: 'adminBP', component:FirstForBpadminComponent },
    { path: 'film', component:FilmComponent },
    { path: 'izmeniFilm/:filmID', component:IzmeniFilmComponent },
    { path: 'sviFilmovi', component:SviFilmoviComponent },
    { path: 'projekcija/:filmID', component:ProjekcijaComponent },
    { path: 'izmeniProjekciju/:projekcijaID', component:IzmeniProjekcijuComponent },
    { path: 'sveProjekcije/:teatarID', component:SveProjekcijeComponent },
    { path: 'izmeniTeatar/:teatarID', component:IzmeniTeatarComponent },
    { path: 'karteSaPopustom/:teatarID', component:KarteSaPopustomComponent },
    { path: 'uredjivanjeFanzone/:teatarID', component:UredjivanjeFanzoneComponent },
    { path: 'skalaClanstva', component:SkalaClanstvaComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents = [RegistrationComponent, LoginComponent, FirstForAllPageComponent,
                                  FirstForAdminPageComponent, RegistrationAdminComponent,
                                  RegistrationTheaterComponent,HomePageForUserComponent,
                                  SettingRuserComponent, SalaComponent, ReservationComponent,
                                  SeatReservationComponent, FanzonaComponent, PonudeComponent,
                                  AllCinemasComponent, AllTheatersComponent, ActiveReservationsComponent,
                                  HistoryComponent, PrijateljiComponent, FilmComponent,
                                  IzmeniFilmComponent, SviFilmoviComponent,
                                  ProjekcijaComponent, IzmeniProjekcijuComponent, SveProjekcijeComponent,
                                  IzmeniTeatarComponent, KarteSaPopustomComponent, UredjivanjeFanzoneComponent,
                                  SkalaClanstvaComponent
                                ]