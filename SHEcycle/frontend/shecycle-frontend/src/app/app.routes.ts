import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items/all', component: ItemListComponent },
  { path: 'items/:filterType/:filterValue', component: ItemListComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: ''}
];
