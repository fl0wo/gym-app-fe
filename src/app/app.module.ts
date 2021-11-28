import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrivateAreaComponent } from './private-area/private-area.component';
import { WeightRoomReservationComponent } from './weight-room-reservation/weight-room-reservation.component';
import { LessonReservationComponent } from './lesson-reservation/lesson-reservation.component';
import {ChunkPipe} from "./weight-room-reservation/weight-room-reservation.component";
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputFieldComponent } from './shared-components/input-field/input-field.component';
import { MessageResponseDialogComponent } from './shared-components/message-response-dialog/message-response-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PrivateAreaComponent,
    WeightRoomReservationComponent,
    LessonReservationComponent,
    ChunkPipe,
    InputFieldComponent,
    MessageResponseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    MatDialogModule,
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
