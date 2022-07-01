import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HandsComponent } from './components/hands/hands.component';
import { PenComponent } from './components/pen/pen.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';

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
