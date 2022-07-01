import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HandsComponent } from './hands/hands.component';
import { PenComponent } from './pen/pen.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pen', component: PenComponent},
  {path: 'hands', component: HandsComponent},
  {path: 'keyboard', component: KeyboardComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HandsComponent,
    PenComponent,
    KeyboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
