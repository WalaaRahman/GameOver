import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AllComponent } from './Components/all/all.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { Routes, RouterLink, RouterModule } from '@angular/router';
import { AddHeaderInterceptor } from './Interceptors/add-header.interceptor';
import { GameComponent } from './Components/game/game.component';
import { GameDetailsComponent } from './Components/game-details/game-details.component';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FilterdGamesComponent } from './Components/filterd-games/filterd-games.component';
import { SearchPipe } from './Pipes/search.pipe';
import { NotFoundComponent } from './Components/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AllComponent,
    GameComponent,
    GameDetailsComponent,
    FilterdGamesComponent,
    SearchPipe,
    NotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterLink,
   HttpClientModule,
   CommonModule,
   BrowserAnimationsModule,
   RouterModule,
   CarouselModule,
   FormsModule
  
   

  ],
  providers: [
   {
    provide: HTTP_INTERCEPTORS,
    useClass: AddHeaderInterceptor,
    multi:true

   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
