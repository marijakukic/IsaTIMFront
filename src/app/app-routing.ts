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
    { path: 'seatReservation/:teatarID/:terminID', component:SeatReservationComponent }

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
                                  SeatReservationComponent]