import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FirstForAllPageComponent } from './first-for-all-page/first-for-all-page.component';


const routes : Routes = [
    {path: 'registration', component: RegistrationComponent},
    { path: 'firstPage', component:AppComponent},
    { path: 'login', component:LoginComponent,},
    { path: 'firstForAll', component:FirstForAllPageComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents = [RegistrationComponent, LoginComponent, FirstForAllPageComponent]