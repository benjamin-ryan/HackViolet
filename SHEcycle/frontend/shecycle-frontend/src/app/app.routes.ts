import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: ItemListComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: ''}
];
