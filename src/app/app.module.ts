import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HandsComponent } from './hands/hands.component';
import { PenComponent } from './pen/pen.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  {path: 'about', component: HomeComponent},
  // {path: 'pen', component: PenComponent},
  {path: 'hands', component: HandsComponent},
  {path: 'keyboard', component: KeyboardComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HandsComponent,
    PenComponent,
    KeyboardComponent,
    NavigationComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
