import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AddComponent} from './pages/add/add.component';
import {ListComponent} from './pages/list/list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
];
