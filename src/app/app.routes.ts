import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LeagueComponent } from '../pages/league/league.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'league', component: LeagueComponent },
];
