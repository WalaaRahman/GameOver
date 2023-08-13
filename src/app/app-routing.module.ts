import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AllComponent } from './Components/all/all.component';

import { RegisterationComponent } from './Components/registeration/registeration.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './Guard/auth.guard';
import { GameDetailsComponent } from './Components/game-details/game-details.component';
import { FilterdGamesComponent } from './Components/filterd-games/filterd-games.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'all',canActivate:[AuthGuard],component:AllComponent},
  {path:'game/:id',canActivate:[AuthGuard],component:GameDetailsComponent},
  {path:'game/:tag/:filter',canActivate:[AuthGuard],component:FilterdGamesComponent},

  {path:'registeration',component:RegisterationComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
