import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DestinationComponent} from './pages/destination/destination.component';
import {CrewComponent} from './pages/crew/crew.component';
import {TechnologyComponent} from './pages/technology/technology.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent
  }, {
    path: 'destination',
    component: DestinationComponent
  }, {
  path: 'crew',
  component: CrewComponent
  }, {
  path: 'technology',
  component: TechnologyComponent
}];
