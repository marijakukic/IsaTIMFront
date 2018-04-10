import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule,routingComponents } from './app-routing';

import { HttpModule } from '@angular/http';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import { FirstForAllPageComponent } from './first-for-all-page/first-for-all-page.component';
import { RegistrationServiceService } from './registration-service.service';
import { FirstForAdminPageComponent } from './first-for-admin-page/first-for-admin-page.component';
import { RegistrationAdminComponent } from './registration-admin/registration-admin.component';
import { RegistrationTheaterComponent } from './registration-theater/registration-theater.component';
import { TeatarServiceService } from './teatar-service.service';
import { HomePageForUserComponent } from './home-page-for-user/home-page-for-user.component';
import { SettingRuserComponent, DialogOverviewExampleDialog } from './setting-ruser/setting-ruser.component';
import { SalaComponent } from './sala/sala.component';
  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FirstForAllPageComponent,
    FirstForAdminPageComponent,
    RegistrationAdminComponent,
    RegistrationTheaterComponent,
    HomePageForUserComponent,
    SettingRuserComponent,
    DialogOverviewExampleDialog,
    SalaComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RegistrationServiceService,
              TeatarServiceService],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }
